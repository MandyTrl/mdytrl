import { v4 as uuidv4 } from 'uuid'
import { ItemCard } from './ItemCard'
import { inspiration } from '@/utils/datas/inspiration'

export const Inspiration = () => {
  return (
    <aside className="flex flex-col items-start h-fit">
      <div className="flex flex-col justify-center items-center">
        <h2 className="uppercase font-rokkitt text-4xl text-primary font-semibold my-6">Inspirations</h2>
      </div>

      <div className="flex mt-20">
        {inspiration.map((el, idx) => {
          return <ItemCard key={uuidv4()} index={idx} datas={el} numberOfItems={inspiration.length} />
        })}
      </div>
    </aside>
  )
}
