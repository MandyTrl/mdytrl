import Image from 'next/image'
import { LocalTime } from '@/components/LocalTime'
import { Intro } from '@/components/About/Intro'

export default function Home() {
  return (
    <section id="home" className="flex flex-col items-center justify-center lg:px-14">
      <div className="flex items-center text-[33px] lg:text-[5.7rem] uppercase">
        <Image
          src="assets/icons/abstract-vase.svg"
          alt="mandy-thorel"
          height={64}
          width={64}
          className="w-16 h-16 lg:w-[140px] lg:h-[140px] mr-2 lg:mr-4"
        />

        <h1 className="leading-9 lg:leading-none">
          Développeuse <br></br> Full stack
        </h1>
      </div>

      <LocalTime />

      <Intro />
    </section>
  )
}
