'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="w-full min-h-[90px] bg-white flex items-center justify-end px-4 border-b-[0.5px] border-primary">
      <ul className="[&>*]:px-2 flex uppercase font-generalSans">
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
            href="/about"
            className="hover:underline hover:underline-offset-4"
            // onClick={() => gsap.to(window, { duration: 2, scrollTo: { y: '#about', offsetY: 160 } })}
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
