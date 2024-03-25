import Image from 'next/image'
import { Stacks } from '../UI/Stacks'

export const EncartLayout = () => {
  return (
    <div className="absolute hidden lg:flex lg:bottom-28 bg-transparent w-full items-end justify-between">
      <div className="h-9 w-[130px] flex items-center justify-center ml-8 px-2 uppercase animate-bounce font-rokkitt bg-white border-[0.5px] border-primary">
        <Image src="/assets/icons/arrow-right.svg" alt="" width={10} height={10} className="rotate-90 mr-1" />
        <p className="text-xs">Me contacter </p>
      </div>

      <div className="flex flex-col ml-4">
        <Stacks />
      </div>
    </div>
  )
}
