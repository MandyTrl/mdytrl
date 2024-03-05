import { ExperienceType } from '@/utils/datas/cv'
import { CollapseItem } from './CollapseItem'

export type CollapseTypeProps = {
  title: string
  datas: ExperienceType[]
}

export const Collapse = ({ title, datas }: CollapseTypeProps) => {
  return (
    <div id="collapse" className="rounded-xl py-4 px-6 border-[0.5px] border-gray-primary my-4">
      <h3 className="font-semibold text-xl lg:text-lg uppercase lg:capitalize text-center lg:text-left mb-4 lg:mb-0">
        {title}
      </h3>
      <div className="divide-y-[0.3px] divide-gray-primary">
        <CollapseItem datas={datas} />
      </div>
    </div>
  )
}
