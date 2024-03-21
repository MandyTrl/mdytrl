/* eslint-disable @next/next/no-img-element */
import { LocalTime } from '@/components/LocalTime'
import { Intro } from '@/components/About/Intro'

export default function Home() {
  return (
    <section id="home" className="flex flex-col items-center justify-start">
      <div className="h-full flex flex-col items-center">
        <div className="relative w-full h-[195px] lg:w-[850px] lg:h-[450px] overflow-hidden">
          <img src="/assets/photos/mt-berlin.webp" alt="mandy-thorel" className="absolute bottom-0 w-full h-fit" />
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
