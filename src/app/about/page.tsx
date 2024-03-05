import { Inspiration } from '@/components/Inspiration/Inspiration'
import { MusicCard } from '@/components/Inspiration/MusicCard'
import { AboutLayout } from '@/components/Layouts/AboutLayout'
import { musics } from '@/utils/datas/music'

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between font-generalSans">
      <section id="about" className="relative mb-20 h-full">
        <AboutLayout />
      </section>

      <div className="lg:relative lg:pt-[480px]">
        <section
          id="musics"
          className="lg:absolute m-auto lg:left-1/2 lg:-right-[30%] lg:top-20 lg:-translate-x-1/2 flex flex-col items-center"
        >
          {musics.map((el, idx) => {
            return <MusicCard key={idx} index={idx} datas={el} numberOfItems={musics.length} />
          })}
        </section>

        <section id="inspiration" className="mb-20">
          <Inspiration />
        </section>
      </div>
    </main>
  )
}
