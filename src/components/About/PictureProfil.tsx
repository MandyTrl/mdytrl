'use client'
import Image from 'next/image'
import { RoundedText } from '../UI/RoundedText'
import { useState } from 'react'
import clsx from 'clsx'

export default function ProfilPicture() {
  const [imageUrl, setImgUrl] = useState<string>('/assets/photos/mdytrl.webp')
  const isProfilImg = imageUrl === '/assets/photos/mdytrl.webp'
  const isRestoImg = imageUrl === '/assets/photos/resto.jpg'

  const labelStyle =
    'hover:cursor-pointer lg:absolute lg:-right-10 m-1 lg:m-0 px-2 py-[4px] pt-1 rounded-md bg-gray-primary bg-opacity-70 drop-shadow-md text-white uppercase tracking-wider text-xs border border-transparent duration-300 hover:text-sm hover:bg-opacity-80 group-hover:duration-300 hover:text-yel-primary'

  return (
    <div className="flex flex-col lg:flex-row items-center mt-28 mb-16 group relative m-4 ml-0">
      <Image
        alt="Mandy Thorel, photo en noir et blanc"
        src={imageUrl}
        width={578}
        height={834}
        priority
        className={clsx(
          isProfilImg && 'saturate-0',
          'drop-shadow rounded-md transition duration-700 h-[834px] object-cover hover:saturate-100 hover:cursor-pointer'
        )}
      />
      <RoundedText />
      <div className="flex flex-wrap lg:block">
        <span
          className={`${labelStyle} lg:top-[120px]`}
          onMouseEnter={() => setImgUrl('/assets/photos/design.jpg')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Design
        </span>
        <span
          className={`${labelStyle} lg:top-[170px]`}
          onMouseEnter={() => setImgUrl('/assets/photos/mt-code.jpg')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Coder
        </span>
        <span
          className={`${labelStyle} lg:top-[220px]`}
          onMouseEnter={() => setImgUrl('/assets/photos/statue.jpg')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          L&apos;Art
        </span>
        <span
          className={`${labelStyle} lg:top-[270px]`}
          onMouseEnter={() => setImgUrl('/assets/photos/seal.avif')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Un phoque sur une plage
        </span>
        <span
          className={`${labelStyle} lg:top-[320px]`}
          onMouseEnter={() => setImgUrl('/assets/photos/spring.jpg')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          La Nature
        </span>
        <span
          className={`${labelStyle} lg:top-[370px]`}
          onMouseEnter={() => setImgUrl('/assets/photos/scotland-castle.jpg')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Voyager
        </span>
        <span
          className={`${labelStyle} lg:top-[420px]`}
          onMouseEnter={() => setImgUrl('/assets/photos/resto.jpg')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Tester de nouveaux restaurants
        </span>
        <span
          className={`${labelStyle} lg:top-[470px]`}
          onMouseEnter={() => setImgUrl('/assets/photos/music.jpg')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          La musique de qualité
        </span>
        <span
          className={`${labelStyle} lg:top-[520px]`}
          onMouseEnter={() => setImgUrl('/assets/photos/dessin.jpg')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Dessiner
        </span>
        <span
          className={`${labelStyle} lg:top-[570px]`}
          onMouseEnter={() => setImgUrl('/assets/photos/archi-hostel.jpeg')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Prendre des photos
        </span>
        <span
          className={`${labelStyle} lg:top-[620px]`}
          onMouseEnter={() => setImgUrl('/assets/photos/mt-hikking.jpg')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Randonner
        </span>
      </div>

      <div
        id="mapstr"
        className={clsx(
          isRestoImg && 'opacity-100',
          '[&>*]:mx-1 opacity-0 bg-white bg-opacity-80 lg:absolute lg:top-[84%] lg:left-20 py-3 px-4 rounded-lg drop-shadow-lg flex items-center justify-between'
        )}
      >
        <Image alt="compte mapstr" src="/assets/inspirations/stuff/mapstr_logo.png" width={45} height={45} priority />
        <div className="ml-4">
          <p>
            Mon compte <span className="font-semibold">Mapstr</span>
          </p>
          <p>
            <span className="text-lg underline text-blue-500">@mandy.tho</span>
            <span> 😋🍴</span>
          </p>
        </div>
      </div>
    </div>
  )
}
