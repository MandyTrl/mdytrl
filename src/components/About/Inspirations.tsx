/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import { inspirations } from '@/utils/datas/inspirations'
import { useEffect, useRef } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

export const Inspirations = () => {
  const containerRef = useRef<any>(null)
  const styleLabel =
    'z-20 absolute w-fit flex items-center py-1 px-3 font-rokkitt bg-white border-[0.5px] border-primary'

  useEffect(() => {
    // centre les photos au centre du conteneur
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth
      const totalWidth = inspirations.length * (250 + 4) // largeur de la photo + largeur de la marge
      const scrollLeft = (totalWidth - containerWidth) / 2
      containerRef.current.scrollLeft = scrollLeft
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-fit overflow-x-auto">
      <div className="flex gap-x-4">
        {inspirations.map((el, idx) => {
          const pinLabel = el.label === 'Voyager' || el.label === 'Randonner'
          const isTravelLabel = el.label === 'Voyager'
          const isHikkingLabel = el.label === 'Randonner'
          const isRestoLabel = el.label === 'Tester de nouveaux restaurants'

          return (
            <div key={idx} className="relative h-[445px] flex flex-col text-center">
              <div id="img-container" className="relative w-[250px] h-[335px]">
                <Image
                  alt=""
                  src={el.img}
                  width={490}
                  height={730}
                  priority
                  className="h-full object-cover object-left rounded-lg"
                />
              </div>

              <p className="w-full tracking-wide text-base text-gray-primary mt-2 rounded-md">{el.label}</p>

              {pinLabel && (
                <div
                  className={clsx(
                    isTravelLabel && 'top-6 -right-2',
                    isHikkingLabel && 'bottom-[24rem] left-10',
                    styleLabel
                  )}
                >
                  <img src="/assets/icons/pin.svg" alt="" className="w-2 lg:w-3 mr-1" />
                  <p className="text-xs lg:text-sm">{isTravelLabel ? 'Kyoto' : 'Les Alpes'}</p>
                </div>
              )}

              {isRestoLabel && (
                <div className="group hover:cursor-pointer mt-2 w-full flex flex-col items-center py-1 rounded-md bg-yel-secondary text-xs lg:text-sm hover:bg-yel-primary duration-150 ease-linear">
                  <Link href="https://mapstr.com/user/mdy.trl" target="_blank">
                    <div className="flex">
                      <p className="mr-1">Mon compte Mapstr</p>
                      <img src="/assets/icons/burger.svg" alt="" className="w-3 lg:w-4 mr-1 duration-150 ease-linear" />
                    </div>
                    <span className="underline group-hover:text-blue-500">@mdy.trl</span>
                  </Link>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
