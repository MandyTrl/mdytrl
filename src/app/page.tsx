/* eslint-disable @next/next/no-img-element */
import { LocalTime } from '@/components/UI/LocalTime'
import { Intro } from '@/components/About/Intro'
import { ProjectsList } from '@/components/ProjectsList'
import { MagneticBtn } from '@/components/UI/MagneticBtn'

export default function Home() {
  return (
    <div className="flex flex-col mt-14 lg:mt-0">
      <section id="home" className="flex flex-col items-center justify-start">
        <div className="relative h-full flex flex-col items-center">
          <div className="relative w-full h-[195px] md:w-[750px] md:h-[400px] lg:w-[850px] lg:h-[450px] overflow-hidden">
            <img src="/assets/photos/mt-berlin.webp" alt="mandy-thorel" className="absolute bottom-0 w-full h-fit" />
          </div>

          <div className="z-10 absolute top-11 md:top-28 left-4 md:left-24 w-fit flex items-center py-1 px-2 rounded-md font-rokkitt bg-white border-[0.5px] border-primary">
            <p className="text-xs md:text-base italic">Hello !</p>
          </div>

          <div className="z-10 absolute top-2 md:top-10 right-2 md:right-5 w-fit flex items-center py-1 px-2 lg:p-2 font-rokkitt bg-white border-[0.5px] border-primary">
            <img src="/assets/icons/pin.svg" alt="" className="w-2 md:w-4 mr-1" />
            <p className="text-xs md:text-base">Paris</p>
          </div>

          <h1 className="leading-9 md:leading-none uppercase text-[22px] md:text-[52px] lg:text-[65px] py-2 md:py-4 px-4 md:px-0">
            Développeuse Full stack
          </h1>
        </div>

        <div className="w-full md:px-8 flex flex-col justify-center">
          <LocalTime />
          <Intro />
        </div>
      </section>

      <section id="projects" className="w-full md:px-16">
        <div>
          <div className="flex items-center justify-start pt-16 md:pt-36 pb-10 md:mb-4 lg:mb-10 ml-3 md:ml-0">
            <div className="border-[0.5px] border-primary rounded-full">
              <div className="relative h-24 md:h-28 lg:h-36 w-24 md:w-28 lg:w-36 border-[6px] lg:border-8 border-white overflow-hidden rounded-full">
                <img
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjU2d2xmNGNtdWVoYnAwMHM1cHdoczZzYTBhc3FwOHg5aGh0NnZvYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VbnUQpnihPSIgIXuZv/giphy.gif"
                  alt=""
                  className="absolute top-0 left-0 w-fit rounded-full"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-8xl text-primary pl-2">Projets</h1>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center">
            <ProjectsList />
          </div>
        </div>

        <div className="relative md:py-[10rem] hidden md:block">
          <hr className="separator" />
          <MagneticBtn title="À propos" />
        </div>
      </section>
    </div>
  )
}
