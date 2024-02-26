import { Inspiration } from '@/components/Inspiration/Inspiration'
import { MusicCard } from '@/components/Inspiration/MusicCard'
import { AboutLayout } from '@/components/Layouts/AboutLayout'
import { inspiration, inspirationEnum } from '@/utils/datas/inspiration'

export default function About() {
  const musicInspiration = inspiration.filter((el) => el.type === inspirationEnum.MUSIC)

  return (
    <main className="flex flex-col h-full items-center justify-between font-generalSans">
      <section id="about" className="mb-20 h-full">
        <AboutLayout />
        <div className="flex items-end">
          {musicInspiration.map((el, idx) => {
            return <MusicCard key={idx} index={idx} datas={el} numberOfItems={inspiration.length} />
          })}
        </div>
      </section>

      <section id="inspiration" className="mb-20">
        <Inspiration />
      </section>
    </main>
  )
}
