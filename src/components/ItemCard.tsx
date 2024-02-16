import Link from 'next/link'
import Image from 'next/image'
import { artInspirationType } from '@/utils/datas/inspiration'

type InspirationCardPropsType = {
  index: number
  datas: artInspirationType
}

export const ItemCard = ({ index, datas }: InspirationCardPropsType) => {
  const translateX = `-${index}5%`

  return (
    // <div>
    //   <iframe
    //     className="rounded-12"
    //     src="https://open.spotify.com/embed/track/6tCLQ3LO1V9l6qdrrwdV6q?utm_source=generator&theme=0"
    //     width="100%"
    //     height="auto"
    //     allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    //     loading="lazy"
    //   ></iframe>

    //   <Link href="https://open.spotify.com/intl-fr/track/2I4AhSWdVku2SQsJXiIci6?si=316e7d17fd0b4536">Hanoi Café</Link>
    // </div>

    <div
      className={`absolute transform rounded-lg h-60 w-40 skew-y-12 drop-shadow-sm hover:cursor-pointer hover:-translate-y-[120px] duration-500 ease-in-out`}
      style={{ zIndex: index + 1, translate: `${translateX}` }}
    >
      <Image
        src={datas.img}
        alt="github_link"
        width={160}
        height={240}
        className="relative object-cover h-56 rounded-lg"
      />

      <div className="bg-white h-12 w-full z-10 absolute bottom-0 rounded-b-lg p-2 italic">
        <p className="text-[13px] line-clamp-1">{datas.oeuvre}</p>
        <p className="text-[11px]">
          {datas.artiste} {datas.année}
        </p>
      </div>
    </div>
  )
}
