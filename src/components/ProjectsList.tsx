import { projects } from '@/utils/datas/projects'
import Link from 'next/link'

export const ProjectsList = () => {
  return (
    <div className="w-3/5 h-full ml-6 hover:cursor-pointer">
      {projects.map((project, index) => {
        return (
          <p
            key={index}
            className="last:border-b border-t border-primary py-6 pl-1 uppercase hover:font-soria hover:tracking-widest hover:text-xl"
          >
            <Link href={`/projects/${project.name}`}>&lt; {project.name} /&gt;</Link>
          </p>
        )
      })}
    </div>
  )
}
