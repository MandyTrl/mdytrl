import { v4 as uuidv4 } from 'uuid'
import { ItemCard, StuffCard } from './StuffCard'
import { inspiration, inspirationEnum } from '@/utils/datas/inspiration'
import { MusicCard } from './musicCard'
import { BookCard } from './BookCard'
import { ArtCard } from './ArtCard'

export const Inspiration = () => {
  const musicInspiration = inspiration.filter((el) => el.type === inspirationEnum.MUSIC)
  const bookInspiration = inspiration.filter((el) => el.type === inspirationEnum.BOOK)
  const stuffInspiration = inspiration.filter((el) => el.type === inspirationEnum.STUFF)
  const artInspiration = inspiration.filter((el) => el.type === inspirationEnum.ART)

  return (
    <aside className="flex flex-col items-start h-fit">
      <div className="flex flex-col justify-center items-center">
        <h2 className="uppercase font-rokkitt text-4xl text-primary font-semibold my-6">Inspirations</h2>
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
        <div className="flex flex-wrap">
          {artInspiration.map((el, idx) => {
            return <ArtCard key={uuidv4()} index={idx} datas={el} numberOfItems={inspiration.length} />
          })}
        </div>
        <div className="[&>*]:mx-2 flex items-end">
          {stuffInspiration.map((el, idx) => {
            return <StuffCard key={uuidv4()} index={idx} datas={el} numberOfItems={inspiration.length} />
          })}
        </div>
      </div>
    </aside>
  )
}
