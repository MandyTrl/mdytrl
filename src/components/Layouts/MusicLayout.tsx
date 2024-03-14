import Image from 'next/image'
import { musics } from '@/utils/datas/music'
import { MusicCard } from '@/components/MusicCard'

export const MusicLayout = () => {
  return (
    <section id="musics" className="lg:mt-40">
      <div className="w-fit flex items-center justify-center border-gray-primary border-b-[0.5px] pb-6">
        <Image src="/assets/stacks/spotify.svg" alt="top music spotify" width={23} height={23} className="mx-2" />
        <h4 className="uppercase text-2xl tracking-wide font-thin">
          Le meilleur des oreilles pour se mettre de bonne humeur
        </h4>
      </div>

      <div className="w-full lg:relative lg:pt-[580px]">
        <div className="lg:absolute m-auto lg:left-[41.5%] lg:-right-[30%] lg:top-[25%] lg:-translate-x-1/2 flex flex-col lg:flex-row">
          {musics.map((el, idx) => {
            return <MusicCard key={idx} index={idx} datas={el} numberOfItems={musics.length} />
          })}
        </div>
      </div>
    </section>
  )
}
