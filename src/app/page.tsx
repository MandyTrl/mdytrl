/* eslint-disable @next/next/no-img-element */
import { LocalTime } from '@/components/LocalTime'
import { Intro } from '@/components/About/Intro'
import { ProjectsList } from '@/components/ProjectsList'
import { MagneticBtn } from '@/components/UI/MagneticBtn'

export default function Home() {
  return (
    <div className="flex flex-col">
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

      <section id="projects" className="w-full">
        <div>
          <div className="flex items-center justify-center lg:justify-start pt-10 lg:pt-36 pb-10 lg:mb-10 mb-6">
            <div className="border-[0.5px] border-primary">
              <div className="relative h-28 lg:h-36 w-28 lg:w-36 border-8 border-white overflow-hidden">
                <img
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjU2d2xmNGNtdWVoYnAwMHM1cHdoczZzYTBhc3FwOHg5aGh0NnZvYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VbnUQpnihPSIgIXuZv/giphy.gif"
                  alt=""
                  className="absolute top-0 left-0 w-fit"
                />
              </div>
            </div>

            <h1 className="lg:text-8xl text-5xl text-primary pl-2">Projets</h1>
          </div>
          <div className="w-full flex flex-col lg:flex-row items-center">
            <ProjectsList />
          </div>
        </div>

        <div className="relative lg:py-[10rem] hidden lg:block">
          <hr className="separator" />
          <MagneticBtn title="À propos" />
        </div>
      </section>
    </div>
  )
}
