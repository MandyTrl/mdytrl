import Image from 'next/image'

export default function ProfilPicture() {
  return (
    <Image
      alt="Mandy Thorel, photo en noir et blanc"
      src="/assets/mdytrl.webp"
      width={568}
      height={824}
      className="drop-shadow transition ease-in-out duration-700	saturate-0 hover:saturate-100 hover:cursor-pointer"
    />
  )
}
