import Image from 'next/image'
import { TechnicalSkillsLayout } from '@/components/Layouts/TechnicalSkillsLayout'
import { LocalTime } from '@/components/LocalTime'
import { MagneticBtn } from '@/components/UI/MagneticBtn'
import { Intro } from '@/components/About/Intro'

export default function Home() {
  return (
    <main className="flex flex-col font-generalSans">
      <section id="home" className="relative">
        <div className="flex items-center text-[33px] lg:text-[5.7rem] uppercase mt-10 lg:mt-60 pb-2">
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

      <section id="projects" className="relative flex flex-col mt-20 lg:mt-[25rem]">
        <hr className="separator" />
        <h5 className="absolute -top-[50px] left-[35%] bg-white p-4 lg:p-5 text-2xl lg:text-6xl uppercase border-[0.8px] border-primary">
          Projets
        </h5>

        <TechnicalSkillsLayout />
      </section>

      <div className="relative lg:mt-[20rem] mb-60">
        <hr className="separator" />
        <MagneticBtn title="À propos" />
      </div>
    </main>
  )
}
