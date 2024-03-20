'use client'
import UseIsDesktop from '@/utils/hooks/UseIsDesktop'
import { Stacks } from '@/components/Stacks'
import { ProjectsList } from '@/components/ProjectsList'

export const TechnicalSkillsLayout = () => {
  const isDesktop = UseIsDesktop()

  return (
    <aside className="w-full p-40 pb-10 flex flex-col lg:flex-row items-center">
      {/* {isDesktop && <Stacks />} */}
      <ProjectsList />
    </aside>
  )
}
