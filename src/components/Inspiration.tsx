import { v4 as uuidv4 } from 'uuid'
import { ItemCard } from './ItemCard'
import { artInspiration } from '@/utils/datas/inspiration'
import { Separator } from './UI/Separator'

export const Inspiration = () => {
  return (
    <aside className="flex flex-col items-start">
      <div className="flex flex-col justify-center items-center">
        <Separator />
        <h2 className="uppercase font-soria text-4xl text-primary font-semibold my-6 tracking-widest">Inspirations</h2>
        <Separator />
      </div>

      <div className="mt-20 mx-28">
        {artInspiration.map((el, idx) => {
          return <ItemCard key={uuidv4()} index={idx} datas={el} />
        })}
      </div>
    </aside>
  )
}
