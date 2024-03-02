'use client'
import React, { useRef } from 'react'

type BtnTypeProps = {
  title: string
}
export const Button = ({ title }: BtnTypeProps) => {
  const btnRef = useRef<HTMLDivElement | null>(null)
  const spanRef = useRef<HTMLDivElement | null>(null)

  const onMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current

    if (btn) {
      const bounds = btn.getBoundingClientRect()
      const x = e.pageX - bounds.left - bounds.width / 2
      const y = e.pageY - bounds.top - bounds.height / 2
      btn.style.transform = 'translate(' + x * 0.3 + 'px, ' + y * 0.5 + 'px)'
    }
  }

  const onMouseOut = () => {
    const btn = btnRef.current
    if (btn) {
      btn.style.transform = 'translate(0px, 0px)'
    }
  }

  return (
    <div id="magnetic_container" ref={btnRef} className="absolute top-20 right-0">
      <button
        id="magnetic_btn"
        onMouseMove={(e) => onMouseMove(e)}
        onMouseOut={() => onMouseOut()}
        className="rounded-full bg-yel-primary text-primary w-32 h-32 p-5 text-lg duration-100"
      >
        <span>{title}</span>
      </button>
    </div>
  )
}
