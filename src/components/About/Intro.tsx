import Image from 'next/image'

export const Intro = () => {
  return (
    <div className="flex items-center justify-end text-[40px] lg:text-5xl lg:capitalize mt-2">
      <h5 className="text-right uppercase">
        Mandy Thorel<br></br>
        <span className="font-thin">Créative Front-end</span>
      </h5>
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
        <p className="group cursor-pointer flex pb-6 border-b border-gray-primary bg-yel-secondary rounded-md p-4">
          <p className="group-hover:rotate-6 duration-100 ease-linear mr-2">👋</p>
          <p>Hey !</p>
        </p>
        <p className="text-sm pt-2 lowercase">@coded with Next.JS</p>
      </div>
    </div>
  )
}
