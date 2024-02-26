import { ProjectsList } from '@/components/ProjectsList'
import { Stacks } from '@/components/Stacks'

export const TechnicalSkillsLayout = () => {
  return (
    <aside className="w-full h-[600px] flex justify-around items-center">
      <Stacks />
      <ProjectsList />
    </aside>
  )
}
