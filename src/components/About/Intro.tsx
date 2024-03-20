'use client'
import Image from 'next/image'
import UseIsDesktop from '@/utils/hooks/UseIsDesktop'

export const Intro = () => {
  const isDesktop = UseIsDesktop()

  return isDesktop ? (
    <div id="desktop_intro" className="flex items-center justify-end text-5xl capitalize mt-2">
      <div className="text-right uppercase">
        <h5>Mandy Thorel</h5>

        <div className="flex items-center font-thin">
          <p>Créative</p>
          <Image src="assets/icons/dots-square.svg" alt="mandy-thorel" height={33} width={33} className="mx-1" />
          <p>Front-end</p>
        </div>
      </div>

      <p
        className="h-28 text-2xl text-center uppercase border-r border-l border-gray-primary px-2 mx-2 tracking-[0.2em]"
        style={{ writingMode: 'vertical-rl' }}
      >
        Paris
      </p>

      <Image
        src="/assets/photos/mt-street-art.jpeg"
        alt="mandy-thorel-tokyo-street-art"
        height={130}
        width={130}
        className="rounded-md"
      />

      <div className="flex flex-col items-center ml-2">
        <div className="group cursor-pointer flex border-b border-gray-primary bg-yel-secondary rounded-md p-4">
          <p className="group-hover:rotate-6 duration-100 ease-linear mr-2">👋</p>
          <p>Hey !</p>
        </div>
        <p className="text-sm mt-2 lowercase">@coded with Next.JS</p>
      </div>
    </div>
  ) : (
    <div id="mobile_intro" className="flex capitalize mt-2">
      <div className="flex flex-col items-end mr-2">
        <div className="text-right uppercase">
          <h5>Mandy Thorel</h5>
          <div className="font-thin">Créative Front-end</div>
        </div>

        <p className="w-fit text-center uppercase border-y border-gray-primary px-2 tracking-wide italic">Paris</p>
      </div>

      <div className="flex flex-col items-center">
        <Image
          src="/assets/photos/mt-street-art.jpeg"
          alt="mandy-thorel-tokyo-street-art"
          height={130}
          width={130}
          className="rounded-md"
        />

        <div className="group cursor-pointer flex border-b border-gray-primary bg-yel-secondary rounded-md p-2">
          <p className="group-hover:rotate-6 duration-100 ease-linear mr-2">👋</p>
          <p>Hey !</p>
        </div>

        <p className="text-sm pt-2 lowercase">@coded with Next.JS</p>
      </div>
    </div>
  )
}
