/* eslint-disable @next/next/no-img-element */
'use client'
import { useState, useEffect } from 'react'

type SliderProps = {
  images: string[]
}

export const Slider = ({ images }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const moreThanOneImg = images.length > 1

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'ArrowLeft') {
      goToPrevious()
    } else if (e.key === 'ArrowRight') {
      goToNext()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex])

  return (
    <div className="w-full h-[450px] overflow-hidden rounded-b-2xl border-b border-gray-secondary">
      <div className="h-[450px] relative">
        {moreThanOneImg && (
          <div className="text-xl font-soria">
            <button
              onClick={goToPrevious}
              className="z-20 absolute top-[180px] left-0 px-[11px] rounded-full hover:cursor-pointer ml-5 border border-gray-secondary hover:border-gray-400 active:border-gray-primary"
            >
              ‹
            </button>
            <button
              onClick={goToNext}
              className="z-20 absolute top-[180px] right-0 px-[11px] rounded-full hover:cursor-pointe mr-5 border border-gray-secondary hover:border-gray-400 active:border-gray-primary"
            >
              ›
            </button>
          </div>
        )}

        <div>
          <img
            src={`${images[currentIndex]}`}
            alt={`screenshot_${images[currentIndex]}`}
            className="object-cover hover:scale-110 hover:cursor-pointer transform duration-500"
          />
        </div>
      </div>
    </div>
  )
}
