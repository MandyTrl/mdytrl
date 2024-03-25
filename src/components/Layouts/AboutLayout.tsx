import { CV } from '@/components/About/CV'
import { Bio } from '@/components/About/Bio'
import { SkillsSection } from '../About/SkillsSection'

export const AboutLayout = () => {
  return (
    <div className="h-full w-full flex flex-col items-center text-gray-primary mt-10 lg:mt-32">
      <h4 className="w-full lg:text-7xl text-5xl border-b border-gray-secondary lg:pb-22 pb-10 lg:mb-10 mb-6 text-primary">
        Donner forme aux idées
      </h4>

      <Bio />
      <SkillsSection />
      <CV />
    </div>
  )
}
