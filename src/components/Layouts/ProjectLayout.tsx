'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { projects } from '@/utils/datas/projects'
import { Slider } from '@/components/UI/Slider'

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
      <Slider images={project.images} />

      <div className="bg-white p-10 rounded-t-2xl mt-10 pb-20 border-t border-gray-secondary">
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

        <ul className="w-full flex items-center border-y border-solid border-gray-primary py-6 my-6">
          {project.stacks.map((stack: string, idx: number) => {
            return stack !== lastStack ? (
              <li key={idx} className="flex items-center uppercase tracking-wider font-rokkitt text-2xl">
                <span className="text-sm px-[10px] text-gray-primary">❈</span>
                {stack}
              </li>
            ) : (
              <li key={idx} className="flex items-center uppercase tracking-wider font-rokkitt text-xl">
                <span className="text-xs px-[10px] text-gray-primary">❈</span>
                {stack}
                <span className="text-xs px-[10px] text-gray-primary">❈</span>
              </li>
            )
          })}
        </ul>

        <div>
          <div className="flex items-center justify-between mb-4 uppercase text-xs tracking-wide">
            <div
              className={clsx(
                project.type === 'OpenClassRooms' ? 'bg-[#7451EB] text-white' : 'bg-yel-secondary text-primary',
                'w-fit rounded-lg px-2 py-[1px] mr-2'
              )}
            >
              {project.type}
            </div>

            {project.site && (
              <p className="flex justify-center hover:cursor-pointer">
                <Link
                  href={project.site}
                  target="_blank"
                  className="text-gray-primary underline underline-offset-4 hover:decoration-yel-primary mr-2"
                >
                  Consulter le site
                </Link>
                <span className="font-semibold">⤴</span>
              </p>
            )}
          </div>

          <div className="mt-6 mb-20">
            <p className="text-gray-primary py-8 border-t-[0.5px] border-b-[0.5px] border-gray-secondary">
              {project.description}
            </p>

            <div>
              <p className="uppercase mr-2 text-sm tracking-wide mt-8 pb-2">COMPÉTENCES DÉVELOPPÉES</p>
              <ul>
                {project.skills_developed?.map((skill: string, idx: number) => {
                  return (
                    <li key={idx} className="list-outside pb-1 pl-4 text-gray-primary">
                      ∙ {skill}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
