import Image from 'next/image'
import { Contact } from './Contact'

export const CodedWith = () => {
  return (
    <div className="w-full h-full flex flex-col items-center border-t-[0.5px] border-primary px-4 py-8 lg:py-6">
      <div className="lg:w-full flex flex-col lg:flex-row lg:justify-between lg:px-2">
        <Contact />

        <div id="coded_with_container" className="lg:w-fit flex flex-col lg:flex-row items-center lg:px-4">
          <p className="uppercase font-rokkitt lg:text-xl font-thin lg:mr-10 tracking-[0.2em] lg:tracking-[0.4em] border-gray-primary border-[0.5px] lg:border-0 px-3 py-1 lg:p-0 mt-14 lg:mt-0 mb-4 lg:mb-0">
            coded with
          </p>

          <div className="Sheldon flex flex-col items-center">
            <p className="text-xl">≽^●˕●^≼</p>
            <p className="text-[10px] italic mt-2">Sheldon</p>
          </div>

          <p className="lg:mx-8 font-rokkitt font-thin">and</p>

          <div className="Papaille flex flex-col items-center">
            <p className="text-xl">≽^◕⩊◕^≼</p>
            <p className="text-[10px] italic mt-2">Papaille</p>
          </div>

          <p className="lg:mx-8 font-rokkitt font-thin">much</p>

          <span className="text-2xl">❤</span>

          <p className="lg:mx-8 font-rokkitt font-thin">and some</p>

          <Image src="/assets/icons/coffee-cup-1.svg" alt="" width={25} height={25} />
        </div>
      </div>
    </div>
  )
}
