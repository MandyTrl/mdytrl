import Link from 'next/link'
import Image from 'next/image'
import { inspirationEnum, inspirationType } from '@/utils/datas/inspiration'

export type InspirationCardPropsType = {
  index: number
  datas: inspirationType
  numberOfItems: number
}

export const StuffCard = ({ datas }: InspirationCardPropsType) => {
  return (
    <div className="flex flex-col items-center justify-between w-44 h-44 rounded-xl bg-gray-primary bg-opacity-10 transform-all duration-500 ease-in-out drop-shadow-md hover:cursor-pointer hover:-translate-y-[140px]">
      <Image
        src={datas.img}
        alt={`service ${datas.title}`}
        width={60}
        height={60}
        className="h-[60] w-[60] cover rounded-full mt-10"
      />

      <div className="w-full z-10 text-center uppercase p-2 h-10 rounded-b-lg bg-gray-primary text-white">
        <p className="text-[13px] line-clamp-1">{datas.title}</p>
      </div>
    </div>
  )
}
