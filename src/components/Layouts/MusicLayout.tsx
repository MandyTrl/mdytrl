import Image from 'next/image'
import { musics } from '@/utils/datas/music'
import { MusicCard } from '@/components/MusicCard'

export const MusicLayout = () => {
  return (
    <section id="musics" className="lg:mt-40">
      <div className="w-fit lg:flex lg:items-center lg:justify-center border-gray-primary border-b-[0.5px] pb-6">
        <Image
          src="/assets/stacks/spotify.svg"
          alt="top music spotify"
          width={23}
          height={23}
          className="mx-2 hidden lg:block"
        />
        <h4 className="text-justify uppercase text-xl lg:text-2xl tracking-wide font-thin">
          Le meilleur des oreilles pour se mettre de bonne humeur
        </h4>
      </div>

      <div className="w-full my-8 lg:my-0 lg:relative lg:pt-[500px]">
        <div className="lg:m-auto lg:flex lg:flex-row lg:absolute lg:left-[41.5%] lg:-right-[30%] lg:top-[35%] lg:-translate-x-1/2">
          {musics.map((el, idx) => {
            return <MusicCard key={idx} index={idx} datas={el} numberOfItems={musics.length} />
          })}
        </div>
      </div>
    </section>
  )
}
