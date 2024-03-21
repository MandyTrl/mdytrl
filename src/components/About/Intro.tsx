'use client'
import Image from 'next/image'
import usIsDesktop from '@/utils/hooks/useIsDesktop'

export const Intro = () => {
  const isDesktop = usIsDesktop()

  return isDesktop ? (
    <div id="desktop_intro" className="w-full flex items-center justify-end text-3xl capitalize py-4">
      <div className="mr-3 flex flex-col text-right uppercase">
        <h2>Mandy Thorel</h2>

        <div className="flex items-center justify-end font-thin">
          <p>Créative</p>
          <Image src="assets/icons/dots-square.svg" alt="" height={30} width={30} />
          <p>Front-end</p>
        </div>
      </div>

      <Image src="/assets/logomdytrl.svg" alt="" height={70} width={70} className="rounded-md" />

      <div className="ml-3 flex flex-col items-center">
        <div className="group cursor-pointer text-xl flex border-b border-gray-primary bg-[#0f72c9bf] rounded-md p-3">
          <Image src="assets/icons/waves.svg" alt="" height={25} width={25} className="mr-2" />
          <p className="text-white tracking-widest">Hey !</p>
        </div>

        <p className="text-xs mt-1 lowercase">@coded with Next.JS</p>
      </div>
    </div>
  ) : (
    <div id="mobile_intro" className="w-full flex flex-col items-center justify-end text-xl capitalize py-4">
      <div className="w-full flex items-center justify-end mr-8">
        <div className="mr-3 flex flex-col text-right uppercase">
          <h2>Mandy Thorel</h2>

          <div className="flex items-center justify-end font-thin">
            <p>Créative</p>
            <Image src="assets/icons/dots-square.svg" alt="" height={20} width={20} />
            <p>Front-end</p>
          </div>
        </div>

        <Image src="/assets/logomdytrl.svg" alt="" height={50} width={50} className="rounded-md" />
      </div>

      <div className="flex flex-col items-center">
        <div className="group cursor-pointer flex border-b border-gray-primary bg-[#0f72c9bf] rounded-md p-2">
          <Image src="assets/icons/waves.svg" alt="" height={25} width={25} className="mr-2" />
          <p className="text-white tracking-widest">Hey !</p>
        </div>

        <p className="text-xs mt-1 lowercase">@coded with Next.JS</p>
      </div>
    </div>
  )
}
