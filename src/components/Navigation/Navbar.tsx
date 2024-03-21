import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="w-full min-h-[90px] bg-white flex items-center justify-end px-4 border-b-[0.5px] border-primary">
      <ul className="[&>*]:px-2 flex uppercase font-generalSans">
        <li>
          <Link href="/" className="hover:underline hover:underline-offset-4">
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline hover:underline-offset-4">
            À propos
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:underline hover:underline-offset-4">
            Projets
          </Link>
        </li>
      </ul>
    </nav>
  )
}
