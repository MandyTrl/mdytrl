import Image from 'next/image'
import { RoundedText } from '../UI/RoundedText'

export default function ProfilPicture() {
  const labelStyle =
    'absolute -right-4 px-2 py-[4px] pt-1 rounded-md bg-gray-primary bg-opacity-20 drop-shadow-md text-white uppercase tracking-wider text-xs duration-300 group-hover:text-sm group-hover:bg-opacity-30'

  return (
    <div className="my-10 group relative m-4 ml-0">
      <Image
        alt="Mandy Thorel, photo en noir et blanc"
        src="/assets/mdytrl.webp"
        width={568}
        height={824}
        className="drop-shadow rounded-md transition ease-in-out duration-700	saturate-0 hover:saturate-100 hover:cursor-pointer"
      />
      <RoundedText />
      <span className={`${labelStyle} top-[100px]`}>Design</span>
      <span className={`${labelStyle} top-[140px]`}>Coder</span>
      <span className={`${labelStyle} top-[180px]`}>L'Art</span>
      <span className={`${labelStyle} top-[300px]`}>La Nature</span>
      <span className={`${labelStyle} top-[340px]`}>Un phoque sur une plage</span>
      <span className={`${labelStyle} top-[220px]`}>Voyager</span>
      <span className={`${labelStyle} top-[260px]`}>Tester de nouveaux restaurants</span>
    </div>
  )
}
