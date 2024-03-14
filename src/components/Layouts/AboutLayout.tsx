import { skills } from '@/utils/datas/skills'
import { CV } from '@/components/About/CV'
import { Bio } from '@/components/About/Bio'
import { CardSkill } from '@/components/UI/CardSkill'

export const AboutLayout = () => {
  return (
    <div className="h-full flex flex-col items-center text-gray-primary">
      <h4 className="text-8xl mt-32 border-b border-gray-secondary pb-28 mb-14 text-primary">Donner forme aux idées</h4>

      <Bio />

      <aside id="skills" className="bg-gray-secondary bg-opacity-30 rounded-sm p-8">
        <h3 className="text-lg pb-4 mb-6 border-b-2 border-white">Mes compétences</h3>
        <div id="skills" className="grid grid-cols-3 gap-16 p-6">
          {skills.map((skill, idx) => (
            <CardSkill key={idx} skill={skill} />
          ))}
        </div>
      </aside>

      <CV />
    </div>
  )
}
