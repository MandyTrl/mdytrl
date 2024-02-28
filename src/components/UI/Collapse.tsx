import { CollapseItem } from './CollapseItem'

export type CollapseTypeProps = {
  titre: string
}

export const Collapse = ({ titre }: CollapseTypeProps) => {
  return (
    <div id="collapse" className="w-[500px] rounded-xl py-4 px-6 border-[0.5px] border-gray-primary my-4 font-rokkitt">
      <h3 className="font-generalSans font-semibold">{titre}</h3>
      <div className="divide-y-[0.3px] divide-gray-primary">
        <CollapseItem />
        <CollapseItem />
      </div>
    </div>
  )
}
