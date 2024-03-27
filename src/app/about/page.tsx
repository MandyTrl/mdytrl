import { Metadata } from 'next'
import { AboutLayout } from '@/components/Layouts/AboutLayout'
import { MusicLayout } from '@/components/Layouts/MusicLayout'
import { Inspirations } from '@/components/About/Inspirations'

export const metadata: Metadata = {
  title: 'Mandy Thorel - À propos',
  description:
    'Mon parcours, mes compétences, mes inspirations. Téléchargez mon CV ou venez découvrir mes musiques préferées !'
}

export default function About() {
  return (
    <div className="w-full flex flex-col items-center px-4 lg:px-14 mt-14 lg:mt-0">
      <section id="about" className="lg:mb-16">
        <AboutLayout />
      </section>

      <div className="w-full flex flex-col items-center justify-center mb-14">
        <h5 className="lg:text-4xl text-3xl mt-16 border-b border-gray-secondary lg:pb-7 pb-4 mb-8 lg:mb-10">
          Les choses qui m&apos;enthousiasment
        </h5>

        <div className="w-full h-full relative group">
          {/* <div className="w-10 h-10 z-10 flex items-center justify-center absolute top-1/3 -left-4 bg-white rounded-full border-[0.5px] border-primary p-1 opacity-0 group-hover:opacity-100 duration-150 ease-in-out">
            <img src="/assets/icons/arrow-single-down.svg" alt="" className="w-2 lg:w-3 rotate-90" />
          </div>
          <div className="w-10 h-10 z-10 flex items-center justify-center absolute top-1/3 -right-4 bg-white rounded-full border-[0.5px] border-primary p-1 opacity-0 group-hover:opacity-100 duration-150 ease-in-out">
            <img src="/assets/icons/arrow-single-up.svg" alt="" className="w-2 lg:w-3 rotate-90" />
          </div> */}

          <Inspirations />
        </div>
      </div>

      <MusicLayout />
    </div>
  )
}
