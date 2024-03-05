import Image from 'next/image'
import { RoundedText } from '../UI/RoundedText'

export default function ProfilPicture() {
  const labelStyle =
    'hover:cursor-pointer lg:absolute lg:-right-10 m-1 lg:m-0 px-2 py-[4px] pt-1 rounded-md bg-gray-primary bg-opacity-60 drop-shadow-md text-white uppercase tracking-wider text-xs border border-transparent duration-300 hover:text-sm hover:bg-opacity-80 group-hover:duration-300 hover:text-yel-primary'

  return (
    <div className="flex flex-col lg:flex-row items-center mt-28 mb-16 group relative m-4 ml-0">
      <Image
        alt="Mandy Thorel, photo en noir et blanc"
        src="/assets/mdytrl.webp"
        width={578}
        height={834}
        priority
        className="drop-shadow rounded-md transition duration-700	saturate-0 hover:saturate-100 hover:cursor-pointer"
      />
      <RoundedText />
      <div className="flex flex-wrap lg:block">
        <span className={`${labelStyle} lg:top-[120px]`}>Design</span>
        <span className={`${labelStyle} lg:top-[170px]`}>Coder</span>
        <span className={`${labelStyle} lg:top-[220px]`}>L&apos;Art</span>
        <span className={`${labelStyle} lg:top-[270px]`}>La Nature</span>
        <span className={`${labelStyle} lg:top-[320px]`}>Un phoque sur une plage</span>
        <span className={`${labelStyle} lg:top-[370px]`}>Voyager</span>
        <span className={`${labelStyle} lg:top-[420px]`}>Tester de nouveaux restaurants</span>
      </div>
    </div>
  )
}
