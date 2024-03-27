import Image from 'next/image'
import { musics } from '@/utils/datas/music'
import { MusicCard } from '@/components/MusicCard'

export const MusicLayout = () => {
  return (
    <section id="musics" className="w-full lg:mt-5">
      <div className="flex items-end justify-start lg:w-2/3 pb-2">
        <p className="tracking-wide font-light">Et le meilleur des oreilles pour se mettre de bonne humeur</p>
        <Image src="/assets/icons/listening-to-music.svg" alt="top music spotify" width={30} height={30} />
        <p>..</p>
      </div>

      <div className="w-full my-8 lg:my-0 lg:relative lg:pt-[470px]">
        <div className="w-full lg:m-auto lg:flex lg:flex-row lg:absolute lg:left-0 lg:right-0 lg:top-[30%] lg:m-auto">
          {musics.map((el, idx) => {
            return <MusicCard key={idx} index={idx} datas={el} numberOfItems={musics.length} />
          })}
        </div>
      </div>
    </section>
  )
}
