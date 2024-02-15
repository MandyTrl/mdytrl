import { v4 as uuidv4 } from 'uuid'
import { ItemCard } from './ItemCard'
import { stuffs } from '@/utils/datas/things-i-love.ts'
import { artInspiration } from '@/utils/datas/inspiration'

export const Inspiration = () => {
  return (
    <div className="mt-4">
      <ul className="flex flex-wrap">
        {stuffs.map((stuff: string) => {
          return (
            <li
              key={uuidv4()}
              className="w-fit border border-gray-primary rounded-full px-2 my-2 mx-2 uppercase hover:scale-x-110 hover:cursor-pointer duration-300"
            >
              {stuff}
            </li>
          )
        })}
      </ul>

      <aside className="flex justify-center relative">
        {artInspiration.map((el, idx) => {
          return <ItemCard index={idx} datas={el} />
        })}
      </aside>
    </div>
  )
}
