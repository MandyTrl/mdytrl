import { skillsType } from '@/utils/datas/skills'

type CardSkillPropsType = {
  skill: skillsType
}

export const CardSkill = ({ skill }: CardSkillPropsType) => {
  return (
    <div className="group hover:cursor-pointer hover:scale-105 duration-200 ease-linear">
      <h5 className="pb-8 mb-6 text-2xl border-b-[0.7px] border-gray-primary group-hover:text-primary duration-200 ease-linear">
        {skill.name}
      </h5>
      <p>{skill.description}</p>
    </div>
  )
}
