import Image from 'next/image'

export default function ProfilPicture() {
  const labelStyle =
    'absolute px-2 py-[2px] pt-1 rounded-md bg-gray-primary bg-opacity-20 drop-shadow-md text-white uppercase tracking-wider text-xs duration-300 group-hover:scale-110'

  return (
    <div className="group relative m-4 ml-0">
      <Image
        alt="Mandy Thorel, photo en noir et blanc"
        src="/assets/mdytrl.webp"
        width={568}
        height={824}
        className="drop-shadow rounded-md transition ease-in-out duration-700	saturate-0 hover:saturate-100 hover:cursor-pointer"
      />
      <span className={`${labelStyle} top-56 -left-8 group-hover:-translate-y-2 group-hover:translate-x-6`}>
        Créative
      </span>
      <span className={`${labelStyle} top-12 right-2 group-hover:translate-y-6 group-hover:-translate-x-2`}>
        Organisée
      </span>
      <span className={`${labelStyle} bottom-20 left-8 group-hover:-translate-y-4 group-hover:translate-x-6`}>
        Optimiste
      </span>
      <span className={`${labelStyle} bottom-40 right-8 group-hover:-translate-y-4 group-hover:-translate-x-6`}>
        Curieuse
      </span>
    </div>
  )
}
