import Image from 'next/image'
import { InspirationCardPropsType } from './StuffCard'

export const ArtCard = ({ datas }: InspirationCardPropsType) => {
  return (
    <div className="relative group flex m-4 h-[360px] w-[206px]drop-shadow-sm hover:cursor-pointer">
      <Image
        src={datas.img}
        alt={`cover ${datas.title} ${datas.owner}`}
        width={206}
        height={360}
        className="object-cover opacity-85 rounded-lg group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out group-hover:rounded-none group-hover:opacity-100"
      />

      <div className="h-full w-full bg-primary rounded-lg bg-opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-center italic text-white group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out group-hover:opacity-0 group-hover:rounded-none">
        <p className="text-[18px]">{datas.title}</p>
        <p className="text-[13px]">
          {datas.owner} {datas.year}
        </p>
      </div>
    </div>
  )
}
