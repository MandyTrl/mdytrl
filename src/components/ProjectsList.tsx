import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/utils/datas/projects'

export const ProjectsList = () => {
  return (
    <div className="lg:w-5/6 h-full">
      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className="element-hover group py-10 hover:cursor-pointer last:border-b border-t border-primary"
          >
            <Link href={`/projects/${project.name}`}>
              <div className="flex justify-between px-1">
                <p className="uppercase transform duration-300 group-hover:scale-[1.30] text-lg group-hover:translate-x-[12%]">
                  <span className="group-hover:opacity-100 opacity-0 duration-300 text-yel-primary">•</span>{' '}
                  {project.name}
                </p>
                <p className="flex items-center">
                  <span className="mr-4 opacity-0 group-hover:opacity-100 transform duration-300 group-hover:translate-x-[0%] translate-x-[50%]">
                    Voir le projet
                  </span>
                  <Image
                    src="/assets/icons/arrow-up-right.svg"
                    alt={`go to the project ${project.name}`}
                    width={18}
                    height={18}
                  />
                </p>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
