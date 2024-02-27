import Link from 'next/link'
import Image from 'next/image'
import { inspirationType } from '@/utils/datas/inspiration'

export type InspirationCardPropsType = {
  index: number
  datas: inspirationType
  numberOfItems: number
}

export const StuffCard = ({ datas }: InspirationCardPropsType) => {
  return (
    <div className="group w-20 hover:cursor-pointer">
      <div className="flex flex-col items-center justify-center h-20 rounded-xl bg-gray-primary bg-opacity-10 drop-shadow-md transform-all duration-500 ease-in-out group-hover:scale-110">
        <Image src={datas.img} alt={`service ${datas.title}`} width={50} height={50} className="rounded-lg" />
      </div>
      <p className="w-20 mt-2 text-center uppercase px-2 py-1 h-6 rounded-lg bg-gray-primary text-[10px] truncate text-white">
        {datas.title}
      </p>
    </div>
  )
}
