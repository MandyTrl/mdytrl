import { AboutLayout } from '@/components/Layouts/AboutLayout'
import { MusicLayout } from '@/components/Layouts/MusicLayout'
import ProfilPicture from '@/components/About/PictureProfil'

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between font-generalSans">
      <section id="about" className="relative mb-20 h-full">
        <AboutLayout />
      </section>

      <div>
        <h4 className="text-6xl mt-32 border-b border-gray-secondary pb-10 mb-14">
          Les choses qui m&apos;enthousiasment
        </h4>
        <ProfilPicture />
      </div>

      <MusicLayout />
    </main>
  )
}
