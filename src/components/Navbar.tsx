export const Navbar = () => {
  return (
    <nav className="fixed w-full p-4 z-10 shadow bg-white bg-opacity-30">
      <ul className="[&>*]:px-2 flex justify-end uppercase font-generalSans">
        <li>Accueil</li>
        <li>À propos</li>
        <li>Projets</li>
      </ul>
    </nav>
  )
}
