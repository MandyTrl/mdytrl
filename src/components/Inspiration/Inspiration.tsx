import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { StuffCard } from './StuffCard'
import { inspiration, inspirationEnum } from '@/utils/datas/inspiration'
import { MusicCard } from './MusicCard'
import { BookCard } from './BookCard'
import { ArtCard } from './ArtCard'

export const Inspiration = () => {
  const musicInspiration = inspiration.filter((el) => el.type === inspirationEnum.MUSIC)
  const bookInspiration = inspiration.filter((el) => el.type === inspirationEnum.BOOK)
  const stuffInspiration = inspiration.filter((el) => el.type === inspirationEnum.STUFF)
  const artInspiration = inspiration.filter((el) => el.type === inspirationEnum.ART)

  return (
    <aside className="flex flex-col items-start h-fit">
      <h2 className="relative w-full uppercase border-y border-l-transparent border-r-transparent border-solid border-primary py-2 font-rokkitt tracking-[20px] text-4xl text-center">
        Inspirations
      </h2>

      <div className="flex">
        <div className="[&>*]:my-2 mt-2 mr-10 flex flex-col items-end">
          {stuffInspiration.map((el, idx) => {
            return <StuffCard key={uuidv4()} index={idx} datas={el} numberOfItems={inspiration.length} />
          })}
        </div>
        <div className="flex flex-wrap w-3/4">
          {artInspiration.map((el, idx) => {
            return <ArtCard key={uuidv4()} index={idx} datas={el} numberOfItems={inspiration.length} />
          })}
        </div>
      </div>
      <div className="[&>*]:my-6 flex flex-col">
        <div className="flex items-end">
          {musicInspiration.map((el, idx) => {
            return <MusicCard key={uuidv4()} index={idx} datas={el} numberOfItems={inspiration.length} />
          })}
        </div>
        <div className="flex items-end">
          {bookInspiration.map((el, idx) => {
            return <BookCard key={uuidv4()} index={idx} datas={el} numberOfItems={inspiration.length} />
          })}
        </div>
      </div>
    </aside>
  )
}
