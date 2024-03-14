import { Collapse } from '../UI/Collapse'
import { professional, school } from '@/utils/datas/cv'
import Link from 'next/link'

export const CV = () => {
  return (
    <section id="CV" className="w-full lg:mt-20 mt-4 lg:flex">
      <div className="hidden lg:flex lg:flex-col">
        <Collapse title={'Parcours professionnel'} datas={professional} />
        <Collapse title={'Formation'} datas={school} />
      </div>

      <button
        id="cv_btn"
        className="hidden lg:flex items-center my-4 justify-center ml-6 rounded-md px-3 bg-gray-secondary bg-opacity-30 text-primary hover:px-6 hover:bg-yel-primary hover:border-transparent transform ease-in-out duration-300 tracking-widest text-sm uppercase"
      >
        <Link href="/assets/cv-dev-full-stack-mandy-thorel.pdf" download target="_blank">
          Télécharger le CV
        </Link>
      </button>

      <button className="lg:hidden w-full flex items-center justify-center rounded-md px-3 py-2 bg-gray-secondary bg-opacity-30 text-primary hover:px-6 hover:bg-yel-primary hover:border-transparent transform ease-in-out duration-300 tracking-widest text-sm uppercase">
        <Link href="/assets/cv-dev-full-stack-mandy-thorel.pdf" download target="_blank">
          Télécharger le CV
        </Link>
      </button>
    </section>
  )
}
