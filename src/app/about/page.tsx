import { AboutLayout } from '@/components/Layouts/AboutLayout'
import { MusicLayout } from '@/components/Layouts/MusicLayout'
import ProfilPicture from '@/components/About/ProfilPicture'

export default function About() {
  return (
    <div className="w-full flex flex-col items-center px-4 lg:px-14">
      <section id="about" className="lg:mb-20">
        <AboutLayout />
      </section>

      <div className="w-full flex flex-col items-center">
        <h4 className="lg:text-6xl text-4xl mt-32 border-b border-gray-secondary lg:pb-10 pb-4 mb-14">
          Les choses qui m&apos;enthousiasment
        </h4>
        <ProfilPicture />
      </div>

      <MusicLayout />
    </div>
  )
}
