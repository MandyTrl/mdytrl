'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import clsx from 'clsx'

gsap.registerPlugin(ScrollToPlugin)

export const Navbar = () => {
  const pathname = usePathname()

  console.log(pathname)

  return (
    <nav className="fixed lg:static z-50 lg:z-0 w-full min-h-[60px] lg:min-h-[70px] bg-white flex items-center justify-end px-4 border-b-[0.5px] border-primary">
      <ul className="[&>*]:px-2 flex uppercase font-generalSans">
        <li>
          <Link
            href={pathname === '/' ? '#home' : '/'}
            id="link-container"
            className="rounded-2xl duration-150 ease-linear px-3 py-1 hover:bg-yel-secondary"
            onClick={() => gsap.to(window, { duration: 1, scrollTo: { y: '#home', offsetY: 250 } })}
          >
            <span>Accueil</span>
            {/* <span className={clsx((pathname === '/#home' || pathname === '/') && 'line-through')}>Accueil</span> */}
          </Link>
        </li>
        <li>
          <Link href="/about" className="rounded-2xl duration-150 ease-linear px-3 py-1 hover:bg-yel-secondary">
            <span>À propos</span>
            {/* <span className={clsx(pathname === '/about' && 'line-through')}>À propos</span> */}
          </Link>
        </li>
        <li>
          <Link
            href={pathname === '/' ? '#projects' : '/#projects'}
            className="rounded-2xl duration-150 ease-linear px-3 py-1 hover:bg-yel-secondary"
            onClick={() => gsap.to(window, { duration: 1, scrollTo: { y: '#projects', offsetY: 210 } })}
          >
            <span>Projets</span>
            {/* <span className={clsx(pathname === '/#projects' && 'line-through')}>Projets</span> */}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
