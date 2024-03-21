/* eslint-disable @next/next/no-img-element */
import { LocalTime } from '@/components/LocalTime'
import { Intro } from '@/components/About/Intro'

export default function Home() {
  return (
    <section id="home" className="flex flex-col items-center justify-start">
      <div className="relative h-full flex flex-col items-center">
        <div className="relative w-full h-[195px] lg:w-[850px] lg:h-[450px] overflow-hidden">
          <img src="/assets/photos/mt-berlin.webp" alt="mandy-thorel" className="absolute bottom-0 w-full h-fit" />
        </div>

        <div className="z-10 absolute top-11 lg:top-28 left-4 lg:left-24 w-fit flex items-center py-1 px-2 rounded-md font-rokkitt bg-white border-[0.5px] border-primary">
          <p className="text-xs lg:text-base italic">Hello !</p>
        </div>

        <div className="z-10 absolute top-2 lg:top-10 right-2 lg:-right-8 w-fit flex items-center py-1 px-2 lg:p-2 font-rokkitt bg-white border-[0.5px] border-primary">
          <img src="/assets/icons/pin.svg" alt="" className="w-2 lg:w-4 mr-1" />
          <p className="text-xs lg:text-base">Paris</p>
        </div>

        <h1 className="leading-9 lg:leading-none uppercase text-[22px] lg:text-[65px] py-2 lg:py-4 px-4 lg:px-0">
          Développeuse Full stack
        </h1>
      </div>

      <div className="w-full flex flex-col justify-center">
        <LocalTime />
        <Intro />
      </div>
    </section>
  )
}
