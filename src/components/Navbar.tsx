'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="fixed w-full p-4 z-10 shadow bg-white bg-opacity-30">
      <ul className="[&>*]:px-2 flex justify-end uppercase font-generalSans">
        <li>
          <Link
            href={pathname === '/' ? '#home' : '/'}
            className="hover:underline hover:underline-offset-4"
            onClick={() => gsap.to(window, { duration: 2, scrollTo: { y: '#home', offsetY: 250 } })}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href={pathname === '/' ? '#about' : '/#about'}
            className="hover:underline hover:underline-offset-4"
            onClick={() => gsap.to(window, { duration: 2, scrollTo: { y: '#about', offsetY: 0 } })}
          >
            À propos
          </Link>
        </li>
        <li>
          <Link
            href={pathname === '/' ? '#projects' : '/#projects'}
            className="hover:underline hover:underline-offset-4"
            onClick={() => gsap.to(window, { duration: 2, scrollTo: { y: '#projects', offsetY: 210 } })}
          >
            Projets
          </Link>
        </li>
      </ul>
    </nav>
  )
}
