import { Inspiration } from '@/components/Inspiration/Inspiration'
import { MusicCard } from '@/components/Inspiration/MusicCard'
import { AboutLayout } from '@/components/Layouts/AboutLayout'
import { musics } from '@/utils/datas/music'

export default function About() {
  return (
    <main className="flex flex-col h-full items-center justify-between font-generalSans">
      <section id="about" className="mb-20 h-full">
        <AboutLayout />
        <div className="flex items-end">
          {musics.map((el, idx) => {
            return <MusicCard key={idx} index={idx} datas={el} numberOfItems={musics.length} />
          })}
        </div>
      </section>

      <section id="inspiration" className="mb-20">
        <Inspiration />
      </section>
    </main>
  )
}
