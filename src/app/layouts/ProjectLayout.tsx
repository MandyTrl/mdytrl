/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { v4 as uuidv4 } from 'uuid'
import { projects } from '@/utils/datas/projects'
import { Separator } from '@/components/UI/Separator'

export const ProjectLayout = () => {
  const pathname = usePathname()
  const pathnameSplited = pathname.split('/')
  const projectPathname = pathnameSplited[2].replace(/%20/g, ' ')
  const project = projects.find((project) => project.name === projectPathname)

  if (!project) {
    return <></>
  }

  const lastStack = project.stacks.slice(-1).toString()

  return (
    <div>
      <div className="w-full h-1/3 overflow-hidden rounded-b-2xl flex items-center mb-10">
        <img
          src={project.image}
          alt={`screenshot_${project?.name}`}
          className="object-cover hover:scale-110 hover:cursor-pointer transform duration-500"
        />
      </div>

      <div className="flex mt-4">
        <h1 className="font-bold text-6xl uppercase text-primary">{project.name}</h1>
        {project.repo && (
          <Link
            href={project.repo}
            target="_blank"
            className="hover:cursor-pointer ml-2 transform hover:rotate-6 duration-100 ease-in-out text-primary"
          >
            <Image
              src="/assets/stacks/github.svg"
              alt="github_link"
              width={20}
              height={20}
              className="hover:scale-110"
            />
          </Link>
        )}
      </div>

      <ul className="w-full flex items-center border-y border-solid border-gray-primary py-4 my-4">
        {project.stacks.map((stack: string) => {
          return stack !== lastStack ? (
            <li key={uuidv4()} className="flex items-center uppercase tracking-wider font-soria text-xl">
              <span className="text-sm px-[10px] text-gray-primary">❈</span>
              {stack}
            </li>
          ) : (
            <li key={uuidv4()} className="flex items-center uppercase tracking-wider font-soria text-xl">
              <span className="text-xs px-[10px] text-gray-primary">❈</span>
              {stack}
              <span className="text-xs px-[10px] text-gray-primary">❈</span>
            </li>
          )
        })}
      </ul>

      <div>
        <p
          className={clsx(
            project.type === 'OpenClassRooms' ? 'bg-[#7451EB] text-white' : 'bg-yel-secondary text-primary',
            'w-fit rounded-lg px-2 py-[1px] mb-4 uppercase text-xs tracking-wide'
          )}
        >
          {project.type}
        </p>

        <div className="flex items-center mb-4">
          <p className="font-semibold uppercase text-xs mr-2 tracking-wide">Description</p>
          <p className="text-gray-primary">{project.description}</p>
        </div>

        <div>
          <p className="font-semibold uppercase text-xs mr-2 tracking-wide mb-2">COMPÉTENCES DÉVELOPPÉES</p>
          <div>
            {project.skills_developed?.map((skill: string) => {
              return (
                <p key={uuidv4()} className="pb-1 pl-4 text-gray-primary">
                  {skill}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
