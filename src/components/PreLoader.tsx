'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'

export const PreLoader = () => {
  useEffect(() => {
    const hidePreloader = () => {
      document.body.style.overflow = ''
    }
    document.body.style.overflow = 'hidden'

    const timeLine = gsap.timeline()

    // Définir les propriétés initiales et finales du preloader
    timeLine.fromTo(
      '#pre-loader',
      { opacity: 100, zIndex: 99 },
      { opacity: 0, delay: 1, duration: 3, ease: 'power2.inOut', onComplete: hidePreloader }
    )

    // Ajouter une nouvelle animation pour cacher le preloader
    timeLine.to('#pre-loader', { display: 'hidden', zIndex: -20 })
  }, [])

  return <div id="pre-loader" className="absolute h-full w-full bg-yel-primary"></div>
}
