import { MusicCard } from '@/components/MusicCard'
import { AboutLayout } from '@/components/Layouts/AboutLayout'
import { musics } from '@/utils/datas/music'
import ProfilPicture from '@/components/About/PictureProfil'

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between font-generalSans">
      <section id="about" className="relative mb-20 h-full">
        <AboutLayout />
      </section>

      <ProfilPicture />

      <div className="w-full lg:relative lg:pt-[480px]">
        <section
          id="musics"
          className="lg:absolute m-auto lg:left-[51%] lg:-right-[30%] lg:top-20 lg:-translate-x-1/2 flex flex-col lg:flex-row"
        >
          {musics.map((el, idx) => {
            return <MusicCard key={idx} index={idx} datas={el} numberOfItems={musics.length} />
          })}
        </section>
      </div>
    </main>
  )
}
