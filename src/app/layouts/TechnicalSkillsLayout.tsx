import { ProjectsList } from '@/components/ProjectsList'
import { Stacks } from '@/components/Stacks'

export const TechnicalSkillsLayout = () => {
  return (
    <aside className="flex w-full max-h-[450px]">
      <Stacks />
      <ProjectsList />
    </aside>
  )
}
