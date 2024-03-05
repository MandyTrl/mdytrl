import Image from 'next/image'
import { Copyright } from './Copyright'

export const CodedWith = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex flex-col items-center justify-around">
        <p className="uppercase font-rokkitt text-2xl font-thin tracking-[0.5em] lg:tracking-[0.7em]">coded with</p>

        <div className="flex items-center border-t-[0.5px] border-b-[0.5px] border-gray-secondary py-20 lg:px-10">
          <div className="Sheldon flex flex-col items-center">
            <p className="text-xl">≽^●˕●^≼</p>
            <p className="text-[10px] italic my-2">Sheldon</p>
          </div>

          <p className="lg:mx-8 font-rokkitt font-thin">and</p>

          <div className="Papaille flex flex-col items-center">
            <p className="text-xl">≽^◕⩊◕^≼</p>
            <p className="text-[10px] italic my-2">Papaille</p>
          </div>

          <p className="lg:mx-8 font-rokkitt font-thin">much</p>

          <span className="text-2xl">❤</span>

          <p className="lg:mx-8 font-rokkitt font-thin">and some</p>

          <Image src="/assets/icons/coffee-cup-1.svg" alt="cup of coffee, matcha, tea icon" width={25} height={25} />
        </div>

        <Copyright />
      </div>
    </div>
  )
}
