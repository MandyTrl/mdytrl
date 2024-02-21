import Image from 'next/image'
export const Footer = () => {
  return (
    <footer className="flex justify-between p-8 font-generalSans bg-primary">
      <div className="flex items-center ml-4">
        <p className="text-gray-primary uppercase text-xs font-semibold font-soria pr-4">coded with</p>
        <div className="Sheldon text-xs">
          <p> ≽^•˕•^≼ </p>
          <p className="text-[10px] text-center italic text-gray-primary">Sheldon</p>
        </div>
        <span className="text-primaryrounded-full text-xs mx-2">+</span>
        <div className="Papaille text-xs">
          <p> ≽^◕⩊◕^≼ </p>
          <p className="text-[10px] text-center italic text-gray-primary">Papaille</p>
        </div>
        <span className="text-primaryrounded-full text-xs mx-2">+</span> ❤
        <p className="flex items-center">
          <span className="text-primaryrounded-full text-xs mx-2">+</span>
          <Image src="/assets/icons/coffee-cup-2.svg" alt="cup of coffee, matcha, tea icon" width={20} height={20} />
        </p>
      </div>

      <div className="flex flex-col items-end mr-4">
        <p className="text-xs">©Mandy Thorel</p>
        <p className="text-[10px] text-center italic text-gray-primary">march 2024</p>
      </div>
    </footer>
  )
}
