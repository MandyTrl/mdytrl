import { musicType } from '@/utils/datas/music'

export type MusicCardPropsType = {
  index: number
  datas: musicType
  numberOfItems: number
}

export const MusicCard = ({ datas, index, numberOfItems }: MusicCardPropsType) => {
  const n = 6
  const translateX = `-${index * n}0%`

  return (
    <div
      className="transform-all duration-500 ease-in-out opacity-80 lg:skew-y-6 drop-shadow-sm hover:cursor-pointer lg:hover:-translate-y-[120px] hover:opacity-90"
      style={{ zIndex: numberOfItems - index, translate: translateX }}
    >
      <iframe
        src={datas.link}
        width={250}
        height={250}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"
        loading="lazy"
        style={{ borderRadius: 0, width: '250px', height: '250px' }}
      ></iframe>
    </div>
  )
}
