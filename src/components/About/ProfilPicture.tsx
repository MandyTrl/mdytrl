'use client'
import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

export default function ProfilPicture() {
  const [imageUrl, setImgUrl] = useState<string>('/assets/photos/mdytrl.webp')
  const isProfilImg = imageUrl === '/assets/photos/mdytrl.webp'
  const isRestoImg = imageUrl === '/assets/photos/resto.jpg'

  const labelStyle =
    'flex justify-center items-center w-[8.9rem] lg:w-60 m-1 lg:m-0 text-center hover:cursor-pointer rounded-md p-2 text-gray-primary hover:text-primary uppercase text-xs lg:text-sm border-[0.8px] border-gray-400 duration-300 lg:hover:scale-110 hover:scale-105 hover:border-primary duration-300'

  return (
    <div className="lg:w-full flex flex-col lg:flex-row lg:justify-around mb-16 group relative lg:m-0 m-4 ml-0">
      <Image
        alt="Mandy Thorel, photo en noir et blanc"
        src={imageUrl}
        width={480}
        height={730}
        priority
        className={clsx(
          isProfilImg && 'saturate-0',
          'drop-shadow rounded-md transition duration-700 w-screen lg:w-fit lg:h-[730px] object-cover hover:saturate-100 hover:cursor-pointer'
        )}
      />

      <div className="lg:[&>span]:my-2 mt-3 flex flex-wrap lg:flex-col lg:items-center lg:justify-between mx-[5.1px] lg:m-0 lg:mx-2">
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/design.jpg')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Le Design
        </span>
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/mt-code.jpg')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Coder
        </span>
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/statue.jpg')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          L&apos;Art
        </span>
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/seal.avif')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Un phoque sur une plage
        </span>
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/spring.jpg')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          La Nature
        </span>
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/edinburg.jpg')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Voyager
        </span>
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/resto.jpg')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Tester de nouveaux restaurants
        </span>
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/music.jpg')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          La musique de qualité
        </span>
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/dessin.jpg')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Dessiner
        </span>
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/archi-hostel.jpeg')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Prendre des photos
        </span>
        <span
          className={`${labelStyle}`}
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
          '[&>*]:mx-1 opacity-0 bg-white bg-opacity-80 absolute lg:top-[84%] top-[20%] lg:left-20 left-[10%] py-3 px-4 rounded-lg drop-shadow-lg flex items-center justify-between'
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
