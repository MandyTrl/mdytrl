'use client'
import React, { useEffect, useState } from 'react'

type BtnTypeProps = {
  title: string
}
export const Button = ({ title }: BtnTypeProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [cursorPositionX, setCursorPositionX] = useState<number>(0)
  const [cursorPositionY, setCursorPositionY] = useState<number>(0)
  const hoverOffset = 5 // décalage au survol en pixels
  const transitionSpeed = 0.1

  const translateBtn = isHovered
    ? `translate3d(${cursorPositionX - hoverOffset}px, ${cursorPositionY - hoverOffset}px)`
    : 'translate(0, 0)'
  const transformStyle = `transform ${transitionSpeed}s ease-in-out`

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPositionX(e.clientX)
      setCursorPositionY(e.clientY)
    }

    if (isHovered) {
      document.addEventListener('mousemove', moveCursor)
    } else {
      document.removeEventListener('mousemove', moveCursor)
    }

    return () => {
      document.removeEventListener('mousemove', moveCursor)
    }
  }, [isHovered])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <button
      className="rounded-full bg-yel-primary text-primary w-32 h-32 p-5 text-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `${translateBtn}`,
        transition: transformStyle
      }}
    >
      {title}
    </button>
  )
}
