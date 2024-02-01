import { projects } from '@/utils/datas/projects'
import Link from 'next/link'

export const ProjectsList = () => {
  return (
    <div className="w-3/5 h-full ml-6 hover:cursor-pointer">
      {projects.map((project, index) => {
        return (
          <div key={index} className="last:border-b border-t border-primary py-6">
            <p className="group pl-2 uppercase transform hover:font-soria hover:tracking-widest hover:scale-150 duration-300 hover:translate-x-36">
              <Link href={`/projects/${project.name}`}>
                &lt; {project.name} <span className="group-hover:text-yel-primary">/</span>
                &gt;
              </Link>
            </p>
          </div>
        )
      })}
    </div>
  )
}
