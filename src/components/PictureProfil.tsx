import Image from 'next/image'

export default function ProfilPicture() {
  const labelStyle =
    'absolute -right-4 px-2 py-[4px] pt-1 rounded-md bg-gray-primary bg-opacity-20 drop-shadow-md text-white uppercase tracking-wider text-xs duration-300 group-hover:scale-[1.2] group-hover:my-20 group-hover:bg-opacity-30'

  return (
    <div className="group relative m-4 ml-0">
      <Image
        alt="Mandy Thorel, photo en noir et blanc"
        src="/assets/mdytrl.webp"
        width={568}
        height={824}
        className="drop-shadow rounded-md transition ease-in-out duration-700	saturate-0 hover:saturate-100 hover:cursor-pointer"
      />
      <span className={`${labelStyle} top-24 group-hover:-translate-x-8`}>Design</span>
      <span className={`${labelStyle} top-32 group-hover:-translate-x-8`}>Coder</span>
      <span className={`${labelStyle} top-40 group-hover:-translate-x-8`}>Art</span>
      <span className={`${labelStyle} top-48 group-hover:-translate-x-8`}>Voyager</span>
      <span className={`${labelStyle} top-56 group-hover:-translate-x-12`}>Tester de nouveaux restaurants</span>
      <span className={`${labelStyle} top-64 group-hover:-translate-x-8`}>Nature</span>
    </div>
  )
}
