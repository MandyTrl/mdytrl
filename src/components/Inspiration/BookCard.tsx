import Link from 'next/link'
import Image from 'next/image'
import { InspirationCardPropsType } from './StuffCard'

export const BookCard = ({ index, datas, numberOfItems }: InspirationCardPropsType) => {
  const n = 7
  const translateX = `-${index * n}0%`

  return (
    <div
      className="flex min-w-48 h-80 justify-center transform-all duration-500 ease-in-out skew-y-12 drop-shadow-sm hover:cursor-pointer hover:-translate-y-[140px]"
      style={{ zIndex: numberOfItems - index, translate: translateX }}
    >
      <Image
        src={datas.img}
        alt={`cover ${datas.title} ${datas.owner}`}
        width={192}
        height={312}
        className="relative object-cover w-full h-full"
      />
    </div>
  )
}
