import { InspirationCardPropsType } from './StuffCard'

export const MusicCard = ({ datas, index, numberOfItems }: InspirationCardPropsType) => {
  const n = 8
  const translateX = `-${index * n}0%`
  return (
    <div
      className="transform-all duration-500 ease-in-out opacity-80 skew-y-6 drop-shadow-sm hover:cursor-pointer hover:-translate-y-[140px]"
      style={{ zIndex: numberOfItems - index, translate: translateX }}
    >
      <iframe
        src={datas.link}
        width={0}
        height={0}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"
        loading="lazy"
        style={{ borderRadius: 0, width: '250px', height: '250px' }}
      ></iframe>
    </div>
  )
}
