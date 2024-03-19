import { ProjectsList } from '@/components/ProjectsList'
import { Stacks } from '@/components/Stacks'

export const TechnicalSkillsLayout = () => {
  return (
    <aside className="w-full flex flex-col lg:flex-row items-center justify-around">
      <Stacks />
      <ProjectsList />
    </aside>
  )
}
