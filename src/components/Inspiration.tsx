import { v4 as uuidv4 } from 'uuid'
import { stuffs } from '@/utils/datas/things-i-love.ts'
import { ItemCard } from './ItemCard'

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
        <ItemCard index={1} />
        <ItemCard index={2} />
        <ItemCard index={3} />
        <ItemCard index={4} />
      </aside>
    </div>
  )
}
