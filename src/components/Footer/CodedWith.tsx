import Image from 'next/image'

export const CodedWith = () => {
  return (
    <div className="flex flex-col items-center mt-6 py-20 border-t-[0.5px] border-gray-secondary">
      <div className="w-full flex items-center justify-between pl-8 pr-10">
        <p className="mr-10 uppercase font-rokkitt text-2xl tracking-widest">coded with</p>

        <div className="flex items-center">
          <div className="Sheldon flex flex-col items-center">
            <p className="text-xl">≽^●˕●^≼</p>
            <p className="text-[10px] italic my-2">Sheldon</p>
          </div>

          <p className="mx-8 font-rokkitt font-thin">and</p>

          <div className="Papaille flex flex-col items-center">
            <p className="text-xl">≽^◕⩊◕^≼</p>
            <p className="text-[10px] italic my-2">Papaille</p>
          </div>

          <p className="mx-8 font-rokkitt font-thin">much</p>

          <span>❤</span>

          <p className="mx-8 font-rokkitt font-thin">and some</p>

          <Image src="/assets/icons/coffee-cup-2.svg" alt="cup of coffee, matcha, tea icon" width={20} height={20} />
        </div>
      </div>
    </div>
  )
}
