'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function ProfilPicture() {
  const [isHovering, setIsHovered] = useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isHovering ? (
        <Image alt="Mandy Thorel" src="/assets/mdytrl.webp" width={368} height={624} />
      ) : (
        <Image alt="Mandy Thorel, photo en noir et blanc" src="/assets/mdytrlb&w.webp" width={368} height={624} />
      )}
    </div>
  )
}
