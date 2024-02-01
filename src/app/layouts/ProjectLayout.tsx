'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import { projects } from '@/utils/datas/projects'

export const ProjectLayout = () => {
  const pathname = usePathname()
  const pathnameSplited = pathname.split('/')
  const projectPathname = pathnameSplited[2].replace(/%20/g, ' ')
  const project = projects.find((project) => project.name === projectPathname)

  console.log(project)

  if (!project) {
    return <></>
  }

  return (
    <div>
      <div className="w-full h-2/5 overflow-hidden rounded-b-2xl flex items-center">
        <img src={project.image} alt={`screenshot_${project?.name}`} className="object-cover" />
      </div>
      <h1 className="font-bold text-6xl">{project.name}</h1>
      <p>{project.type}</p>
      {project.repo && (
        <Link href={project.repo} target="_blank" className="hover:cursor-pointer">
          <Image src="/assets/stacks/github.svg" alt="github_link" width={20} height={20} />
        </Link>
      )}
      <ul className="flex">
        {project.stacks.map((stack: string) => {
          return <li key={uuidv4()}>{stack}</li>
        })}
      </ul>
      <p>{project.description}</p>
      <div>
        {project.skills_developed?.map((skill: string) => {
          return <p key={uuidv4()}>{skill}</p>
        })}
      </div>
    </div>
  )
}
