import { CV } from '@/components/About/CV'
import { Bio } from '@/components/About/Bio'
import { SkillsSection } from '../About/SkillsSection'

export const AboutLayout = () => {
  return (
    <div className="flex flex-col items-center text-gray-primary">
      <h4 className="lg:text-8xl text-5xl border-b border-gray-secondary lg:pb-28 pb-10 lg:mt-32 mt-10 lg:mb-14 mb-6 text-primary">
        Donner forme aux idées
      </h4>

      <Bio />
      <SkillsSection />
      <CV />
    </div>
  )
}
