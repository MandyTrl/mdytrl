import { AboutLayout } from '@/components/Layouts/AboutLayout'
import { MusicLayout } from '@/components/Layouts/MusicLayout'
import ProfilPicture from '@/components/About/ProfilPicture'

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between font-generalSans">
      <section id="about" className="relative lg:mb-20">
        <AboutLayout />
      </section>

      <div>
        <h4 className="lg:text-6xl text-4xl mt-32 border-b border-gray-secondary lg:pb-10 pb-4 mb-14">
          Les choses qui m&apos;enthousiasment
        </h4>
        <ProfilPicture />
      </div>

      <MusicLayout />
    </main>
  )
}
