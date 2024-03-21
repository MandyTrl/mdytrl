'use client'
import Image from 'next/image'
import usIsDesktop from '@/utils/hooks/useIsDesktop'

export const Intro = () => {
  const isDesktop = usIsDesktop()

  return isDesktop ? (
    <div id="desktop_intro" className="w-full flex items-center justify-end text-3xl capitalize my-4">
      <div className="w-full mr-3 flex flex-col text-right uppercase">
        <h2>Mandy Thorel</h2>

        <div className="flex items-center justify-end font-thin">
          <p>Créative</p>
          <Image src="assets/icons/dots-square.svg" alt="mandy-thorel" height={33} width={33} />
          <p>Front-end</p>
        </div>
      </div>

      <Image src="/assets/logomdytrl.svg" alt="" height={80} width={80} className="rounded-md" />

      <div className="w-[18%] ml-3 flex flex-col items-center">
        <div className="group cursor-pointer text-2xl flex border-b border-gray-primary bg-[#2185dd8a] rounded-md p-3">
          <p className="group-hover:rotate-6 duration-100 ease-linear mr-2">👋</p>
          <p className="text-white">Hey !</p>
        </div>
        <p className="text-sm mt-2 lowercase">@coded with Next.JS</p>
      </div>
    </div>
  ) : (
    <div id="mobile_intro" className="flex capitalize mt-2">
      <div className="flex flex-col items-end  mr-2">
        <div className="text-right uppercase">
          <h5>Mandy Thorel</h5>
          <div className="font-thin">Créative Front-end</div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Image src="/assets/photos/mt-street-art.jpeg" alt="" height={100} width={100} className="rounded-md" />

        <div className="group cursor-pointer flex border-b border-gray-primary rounded-md p-2">
          <p className="group-hover:rotate-6 duration-100 ease-linear mr-2">👋</p>
          <p>Hey !</p>
        </div>

        <p className="text-sm pt-2 lowercase">@coded with Next.JS</p>
      </div>
    </div>
  )
}
