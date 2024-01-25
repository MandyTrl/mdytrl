import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="fixed w-full p-4 z-10 shadow bg-white bg-opacity-30">
      <ul className="[&>*]:px-2 flex justify-end uppercase font-generalSans">
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/about">À propos</Link>
        </li>
        <li>
          <Link href="/projects">Projets</Link>
        </li>
      </ul>
    </nav>
  )
}
