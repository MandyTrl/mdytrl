'use client'
import Image from 'next/image'

export const Intro = () => {
  return (
    <div id="intro" className="w-full flex items-center justify-end md:text-3xl capitalize py-4">
      <div className="mr-2 md:mr-3 flex flex-col text-right uppercase">
        <h2>Mandy Thorel</h2>

        <div className="flex items-center font-thin">
          <p>Créative</p>
          <Image
            src="assets/icons/dots-square.svg"
            alt=""
            height={30}
            width={30}
            className="mx-1 w-3 h-3 md:w-[30px] md:h-[30px]"
          />
          <p>Front-end</p>
        </div>
      </div>

      <Image
        src="/assets/logomdytrl.svg"
        alt=""
        height={70}
        width={70}
        className="w-12 h-12 md:w-[70px] md:h-[70px] rounded-md"
      />
    </div>
  )
}
