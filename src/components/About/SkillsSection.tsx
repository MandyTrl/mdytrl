import { skills } from '@/utils/datas/skills'
import { CardSkill } from '../UI/CardSkill'

export const SkillsSection = () => {
  return (
    <aside id="skills" className="bg-gray-secondary bg-opacity-30 rounded-sm p-8">
      <div id="skills" className="grid lg:grid-cols-3 gap-16 p-6">
        {skills.map((skill, idx) => (
          <CardSkill key={idx} skill={skill} />
        ))}
      </div>
    </aside>
  )
}
