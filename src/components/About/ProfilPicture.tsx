'use client'
import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

export default function ProfilPicture() {
  const [imageUrl, setImgUrl] = useState<string>('/assets/photos/mdytrl.webp')
  const isProfilImg = imageUrl === '/assets/photos/mdytrl.webp'
  const isRestoImg = imageUrl === '/assets/photos/resto.webp'

  const labelStyle =
    'flex justify-center items-center w-[5.1rem] lg:w-40 m-1 lg:m-0 text-center hover:cursor-pointer rounded-md p-2 text-gray-primary hover:text-primary uppercase text-xs lg:text-sm border-[0.8px] border-gray-400 duration-300 lg:hover:scale-110 hover:scale-105 hover:border-primary duration-300'

  return (
    <div className="lg:w-full flex flex-col lg:flex-row lg:justify-around mb-16 m-4 lg:m-0 group relative lg:px-20">
      <Image
        alt="Mandy Thorel, photo en noir et blanc"
        src={imageUrl}
        width={490}
        height={730}
        priority
        className={clsx(
          isProfilImg && 'saturate-0',
          'drop-shadow rounded-md transition duration-700 w-screen lg:w-[490px] lg:h-[730px] object-cover hover:saturate-100 hover:cursor-pointer'
        )}
      />

      <div className="lg:[&>span]:my-1 mt-3 mx-1 lg:mx-2 flex flex-wrap lg:flex-col lg:items-center lg:justify-between">
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/design.webp')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Le Design
        </span>
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/mt-code.webp')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Coder
        </span>
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/statue.webp')}
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
          onMouseEnter={() => setImgUrl('/assets/photos/spring.webp')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          La Nature
        </span>
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/edinburg.webp')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Voyager
        </span>
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/resto.webp')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Tester de nouveaux restaurants
        </span>
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/music.webp')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          La musique de qualité
        </span>
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/dessin.webp')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Dessiner
        </span>
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/archi-hostel.webp')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Prendre des photos
        </span>
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/mt-hikking.webp')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Randonner
        </span>
        <span
          className={`${labelStyle}`}
          onMouseEnter={() => setImgUrl('/assets/photos/window.webp')}
          onMouseLeave={() => setImgUrl('/assets/photos/mdytrl.webp')}
        >
          Les details
        </span>
      </div>

      <div
        id="mapstr"
        className={clsx(
          isRestoImg && 'opacity-100',
          '[&>*]:mx-1 opacity-0 bg-primary bg-opacity-80 absolute lg:top-[86%] top-[20%] lg:left-36 left-[10%] py-3 px-4 rounded-lg drop-shadow-lg flex text-center items-center justify-between'
        )}
      >
        <div className="flex flex-col">
          <Image
            alt="compte mapstr"
            src="/assets/icons/mapstr.png"
            width={107}
            height={0}
            priority
            className="mx-1 mb-1"
          />

          <p>
            <span className="underline text-white">@mandy.tho</span>
            <span> 😋</span>
          </p>
        </div>
      </div>
    </div>
  )
}
