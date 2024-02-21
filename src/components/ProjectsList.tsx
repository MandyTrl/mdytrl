import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/utils/datas/projects'

export const ProjectsList = () => {
  return (
    <div className="w-3/5 h-full ml-8 hover:cursor-pointer">
      {projects.map((project, index) => {
        return (
          <div key={index} className="group last:border-b border-t border-primary py-6">
            <Link href={`/projects/${project.name}`}>
              <div className="flex justify-between px-2">
                <p className="uppercase transform group-hover:scale-[1.25] duration-300 group-hover:translate-x-[10%]">
                  &lt; {project.name} <span className="group-hover:text-yel-primary">/</span>
                  &gt;
                </p>
                <p className="flex items-center">
                  <span className="text-sm mr-4 opacity-0 group-hover:opacity-100 transform duration-300 group-hover:translate-x-[0%] translate-x-[50%]">
                    Voir le projet
                  </span>
                  <Image
                    src="/assets/icons/arrow-up-right.svg"
                    alt={`go to the project ${project.name}`}
                    width={15}
                    height={15}
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
