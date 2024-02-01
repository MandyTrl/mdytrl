'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const useScrollTo = (scrollTarget: number) => {
  useEffect(() => {
    gsap.to(window, { duration: 2, scrollTo: scrollTarget, ease: 'power2.inOut' })
  }, [scrollTarget])
}

export default useScrollTo
