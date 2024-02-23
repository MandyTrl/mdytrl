import Image from 'next/image'
import { InspirationCardPropsType } from './StuffCard'

export const ArtCard = ({ datas }: InspirationCardPropsType) => {
  return (
    <div className="shrink-1 relative group flex mx-4 my-2 h-[400px] w-[240px]drop-shadow-sm hover:cursor-pointerspotify">
      <Image
        src={datas.img}
        alt={`cover ${datas.title} ${datas.owner}`}
        width={200}
        height={400}
        className="object-cover opacity-90 rounded-lg group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out group-hover:rounded-none group-hover:w-[450px] group-hover:opacity-100"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-fit justify-center italic text-white group-hover:transition-opacity group-hover:duration-500 group-hover:ease-in-out group-hover:opacity-0">
        <p className="text-[18px]">{datas.title}</p>
        <p className="text-[13px]">
          {datas.owner} {datas.year}
        </p>
      </div>
    </div>
  )
}
