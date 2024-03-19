import Image from 'next/image'
import { TechnicalSkillsLayout } from '@/components/Layouts/TechnicalSkillsLayout'
import { LocalTime } from '@/components/LocalTime'
import { MagneticBtn } from '@/components/UI/MagneticBtn'
import { Intro } from '@/components/About/Intro'

export default function Home() {
  return (
    <main className="flex flex-col font-generalSans">
      <section id="home" className="relative">
        <div className="flex items-center font-bold text-[40px] lg:text-8xl uppercase lg:capitalize mt-10 lg:mt-60 pb-2">
          {/* <Image
            src="assets/logomdytrl.svg"
            alt="mandy-thorel"
            height={160}
            width={160}
            className="rounded-md w-24 h-24 lg:w-[160px] lg:h-[160px]"
          /> */}

          <h1 className="leading-9 lg:leading-none">
            Développeuse <br></br> Fullstack
          </h1>
        </div>

        <LocalTime />

        <Intro />

        <MagneticBtn title="À proposss" />
      </section>

      <section id="projects" className="flex flex-col h-screen lg:mt-72 lg:mb-20">
        <div className="text-6xl mb-12">Projets</div>
        <TechnicalSkillsLayout />
      </section>
    </main>
  )
}
