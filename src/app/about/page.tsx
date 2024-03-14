import Image from 'next/image'
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

      <div>
        <h4 className="text-6xl mt-32 border-b border-gray-secondary pb-10 mb-14">
          Les choses qui m&apos;enthousiasment
        </h4>
      </div>

      <ProfilPicture />

      <section id="musics" className="w-full lg:relative lg:pt-[580px] lg:mt-20">
        <div className="w-full absolute top-0 left-0 flex items-center border-gray-primary border-b-[0.5px] pb-6">
          <Image src="/assets/stacks/spotify.svg" alt="top 5 spotify" width={23} height={23} className="mx-2" />
          <h4 className="text-right uppercase text-2xl tracking-wide">Mon top 5</h4>
        </div>

        <div
          id="musics_cards_container"
          className="lg:absolute m-auto lg:left-[51%] lg:-right-[30%] lg:top-[30%] lg:-translate-x-1/2 flex flex-col lg:flex-row"
        >
          {musics.map((el, idx) => {
            return <MusicCard key={idx} index={idx} datas={el} numberOfItems={musics.length} />
          })}
        </div>
      </section>
    </main>
  )
}
