import { Metadata } from 'next'
import { AboutLayout } from '@/components/Layouts/AboutLayout'
import { MusicLayout } from '@/components/Layouts/MusicLayout'
import ProfilPicture from '@/components/About/ProfilPicture'

export const metadata: Metadata = {
  title: 'Mandy Thorel - À propos',
  description:
    'Mon parcours, mes compétences, mes inspirations. Téléchargez mon CV ou venez découvrir mes musiques préferées !'
}

export default function About() {
  return (
    <div className="w-full flex flex-col items-center px-4 lg:px-14">
      <section id="about" className="lg:mb-20">
        <AboutLayout />
      </section>

      <div className="w-full flex flex-col items-center">
        <h5 className="lg:text-4xl text-3xl mt-16 lg:mt-32 border-b border-gray-secondary lg:pb-7 pb-4 lg:mb-14">
          Les choses qui m&apos;enthousiasment
        </h5>
        <ProfilPicture />
      </div>

      <MusicLayout />
    </div>
  )
}
