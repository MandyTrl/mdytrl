import { skills } from '@/utils/datas/skills'
import { CardSkill } from '../UI/CardSkill'

export const SkillsSection = () => {
  return (
    <aside id="skills" className="border-[0.5px] border-primary rounded-sm p-8">
      <div id="skills" className="grid lg:grid-cols-3 lg:gap-10">
        {skills.map((skill, idx) => (
          <CardSkill key={idx} skill={skill} />
        ))}
      </div>
    </aside>
  )
}
