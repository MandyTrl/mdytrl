import Image from 'next/image'
import { Separator } from './UI/Separator'

export default function ProfilPicture() {
  return (
    <div className="group relative m-4 ml-0">
      <Image
        alt="Mandy Thorel, photo en noir et blanc"
        src="/assets/mdytrl.webp"
        width={568}
        height={824}
        className=" drop-shadow rounded-md transition ease-in-out duration-700	saturate-0 hover:saturate-100 hover:cursor-pointer"
      />
      <span className="absolute px-2 py-[2px] rounded-md bg-gray-primary bg-opacity-20 drop-shadow-md text-white uppercase tracking-wider text-sm top-56 -left-8 group-hover:-translate-y-2 group-hover:translate-x-6 duration-300">
        Créative
      </span>
      <span className="absolute px-2 py-[2px] rounded-md bg-gray-primary bg-opacity-20 drop-shadow-md text-white uppercase tracking-wider text-sm pt-1 top-12 right-2 group-hover:translate-y-6 group-hover:-translate-x-2 duration-300">
        Organisée
      </span>
      <span className="absolute px-2 py-[2px] rounded-md bg-gray-primary bg-opacity-20 drop-shadow-md text-white uppercase tracking-wider text-sm pt-1 bottom-20 left-8 group-hover:-translate-y-4 group-hover:translate-x-6 duration-300">
        Optimiste
      </span>
      <span className="absolute px-2 py-[2px] rounded-md bg-gray-primary bg-opacity-20 drop-shadow-md text-white uppercase tracking-wider text-sm pt-1 bottom-40 right-8 group-hover:-translate-y-4 group-hover:-translate-x-6 duration-300">
        Curieuse
      </span>
    </div>
  )
}
