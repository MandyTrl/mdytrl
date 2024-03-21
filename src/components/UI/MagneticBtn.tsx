'use client'
import Link from 'next/link'
import React, { useRef } from 'react'

type BtnTypeProps = {
  title: string
}
export const MagneticBtn = ({ title }: BtnTypeProps) => {
  const btnRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLDivElement | null>(null)

  const onMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current
    const title = titleRef.current

    if (btn && title) {
      const bounds = btn.getBoundingClientRect()
      const x = e.pageX - bounds.left - bounds.width / 2
      const y = e.pageY - bounds.top - bounds.height / 2
      btn.style.transform = 'translate(' + x * 0.4 + 'px, ' + y * 0.5 + 'px)'
      title.style.transform = 'translate(' + x * 0.1 + 'px, ' + y * 0.1 + 'px)'
    }
  }

  const onMouseOut = () => {
    const btn = btnRef.current
    const title = titleRef.current

    if (btn && title) {
      btn.style.transform = 'translate(0px, 0px)'
      title.style.transform = 'translate(0px, 0px)'
    }
  }

  return (
    <div
      id="magnetic_container"
      ref={btnRef}
      className="z-40 hidden lg:flex absolute top-[20%] lg:right-[4rem] duration-100 ease-linear hover:animate-none"
    >
      <button
        id="magnetic_btn"
        onMouseMove={(e) => onMouseMove(e)}
        onMouseOut={() => onMouseOut()}
        className="rounded-full w-[200px] h-[200px] p-1 hover:scale-105 ease-out duration-300 border-white border-8"
      >
        <div ref={titleRef} className="duration-100 ease-linear text-2xl tracking-wide">
          <Link href="/about">{title}</Link>
        </div>
      </button>
    </div>
  )
}
