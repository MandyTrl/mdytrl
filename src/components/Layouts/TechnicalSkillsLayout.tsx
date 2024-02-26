import { ProjectsList } from '@/components/ProjectsList'
import { Stacks } from '@/components/Stacks'

export const TechnicalSkillsLayout = () => {
  return (
    <aside className="w-full h-[630px] flex items-center justify-around">
      <Stacks />
      <ProjectsList />
    </aside>
  )
}
