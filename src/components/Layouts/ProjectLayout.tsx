/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { projects } from '@/utils/datas/projects'

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
      <div className="relative w-full h-[200px] lg:h-[550px] overflow-hidden rounded-b-2xl shadow-md">
        <Image
          src={project.images[0]}
          alt={`screenshot-${project.images[0]}`}
          width={1500}
          height={550}
          className="absolute top-0 w-full h-fit hover:scale-110 hover:cursor-pointer transform duration-500"
        />
      </div>

      <div className="my-6 lg:my-20 px-6 lg:px-14">
        <div className="flex lg:mt-4">
          <h1 className="font-bold text-3xl lg:text-6xl uppercase text-primary">{project.name}</h1>
          {project.repo && (
            <Link href={project.repo} target="_blank" className="group hover:cursor-pointer ml-2 text-primary">
              <Image
                src="/assets/stacks/github.svg"
                alt="github_link"
                width={20}
                height={20}
                className="group-hover:w-6 group-hover:h-6 group-hover:scale-110 group-hover:rotate-6 duration-100 group-hover:-translate-y-2 ease-in-out"
              />
            </Link>
          )}
        </div>

        <ul className="lg:w-full flex items-center border-y-[0.5px] border-solid border-gray-primary py-4 my-4 lg:py-6 lg:my-6">
          {project.stacks.map((stack: string, idx: number) => {
            return stack !== lastStack ? (
              <li key={idx} className="flex items-center uppercase tracking-wider font-rokkitt lg:text-2xl">
                <span className="text-xs px-[10px] text-gray-primary">❈</span>
                {stack}
              </li>
            ) : (
              <li key={idx} className="flex items-center uppercase tracking-wider font-rokkitt lg:text-2xl">
                <span className="text-xs px-[10px] text-gray-primary">❈</span>
                {stack}
                <span className="text-xs pl-[10px] text-gray-primary">❈</span>
              </li>
            )
          })}
        </ul>

        <div>
          <div className="flex items-center justify-between mb-4 uppercase text-xs tracking-wide">
            <div className="bg-gray-primary text-white w-fit rounded-lg px-2 py-[1px] mr-2">{project.type}</div>

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

          <div className=" text-gray-primary py-8 lg:text-lg italic">
            <p>{project.description}</p>
          </div>
        </div>
      </div>

      <img src={project.images[1]} alt={`screenshot-${project.images[1]}`} className="w-screen lg:w-[950px] mx-auto" />
    </div>
  )
}
