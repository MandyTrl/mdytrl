/* eslint-disable @next/next/no-img-element */
import { LocalTime } from '@/components/LocalTime'
import { Intro } from '@/components/About/Intro'

export default function Home() {
  return (
    <section id="home" className="flex flex-col items-center justify-center lg:px-14">
      <div className="flex flex-col items-center text-[33px] lg:text-[5.7rem] uppercase">
        <img src="/assets/photos/mt-berlin.webp" alt="mandy-thorel" className="lg:w-[70%]" />

        <h1 className="leading-9 lg:leading-none">
          Développeuse <br></br> Full stack
        </h1>
      </div>

      <LocalTime />

      <Intro />
    </section>
  )
}
