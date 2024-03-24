import { ExperienceType } from '@/utils/datas/cv'
import { CollapseItem } from './CollapseItem'

export type CollapseTypeProps = {
  title: string
  datas: ExperienceType[]
}

export const Collapse = ({ title, datas }: CollapseTypeProps) => {
  const isProfessionalExperience = title === 'Parcours professionnel'

  return (
    <div id="collapse" className="mb-4 px-6 lg:px-0">
      <h3 className="text-center font-thin text-2xl uppercase lg:text-left mb-4 lg:mb-3">{title}</h3>

      <div>
        <CollapseItem datas={datas} isProfessionalExperience={isProfessionalExperience} />
      </div>
    </div>
  )
}
