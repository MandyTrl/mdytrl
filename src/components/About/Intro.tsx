'use client'
import Image from 'next/image'

export const Intro = () => {
  return (
    <div id="intro" className="w-full flex items-center justify-end lg:text-3xl capitalize py-4">
      <div className="mr-2 lg:mr-3 flex flex-col text-right uppercase">
        <h2>Mandy Thorel</h2>

        <div className="flex items-center font-thin">
          <p>Créative</p>
          <Image
            src="assets/icons/dots-square.svg"
            alt=""
            height={30}
            width={30}
            className="mx-1 w-3 h-3 lg:w-[30px] lg:h-[30px]"
          />
          <p>Front-end</p>
        </div>
      </div>

      <Image
        src="/assets/logomdytrl.svg"
        alt=""
        height={70}
        width={70}
        className="w-12 h-12 lg:w-[70px] lg:h-[70px] rounded-md"
      />
    </div>
  )
}
