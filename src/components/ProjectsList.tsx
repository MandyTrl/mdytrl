import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/utils/datas/projects'

export const ProjectsList = () => {
  // const profectsSelected = projects.filter((project) => project.name !== 'Sophie Buel' && project.name !== 'Booki')

  return (
    <div className="w-full">
      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className="w-full h-20 lg:h-28 element-hover group flex items-center justify-between hover:cursor-pointer last:mb-10 last:border-b-[0.8px] border-t-[0.8px] border-primary"
          >
            <Link href={`/projects/${project.name}`} className="w-full ml-1">
              <div className="flex items-center justify-between">
                <p className="flex items-center uppercase transform duration-300 group-hover:scale-[1.30] lg:text-lg group-hover:translate-x-[12%]">
                  <span className="w-fit group-hover:opacity-100 opacity-0 duration-300 text-yel-primary mr-1">•</span>{' '}
                  {project.name}
                </p>

                <p className="flex items-center mr-1">
                  <span className="w-full mr-4 opacity-0 group-hover:opacity-100 transform duration-300 group-hover:translate-x-[0%] translate-x-[50%]">
                    Voir le projet
                  </span>
                  <Image
                    src="/assets/icons/arrow-up-right.svg"
                    alt={`go to the project ${project.name}`}
                    width={18}
                    height={18}
                    className="mr-2"
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
