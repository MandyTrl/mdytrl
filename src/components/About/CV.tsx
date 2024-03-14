import { Collapse } from '../UI/Collapse'
import { professional, school } from '@/utils/datas/cv'
import Link from 'next/link'

export const CV = () => {
  return (
    <section id="CV" className="mt-40 flex">
      <div>
        <Collapse title={'Parcours professionnel'} datas={professional} />
        <Collapse title={'Formation'} datas={school} />
      </div>

      <button
        id="cv_btn"
        className="flex items-center lg:my-4 justify-center ml-6 rounded-md px-3 py-2 bg-gray-100 text-primary hover:px-6 hover:bg-yel-primary hover:border-transparent transform ease-in-out duration-300 tracking-widest text-sm uppercase"
      >
        <Link href="/assets/cv-dev-full-stack-mandy-thorel.pdf" download target="_blank">
          Télécharger le CV
        </Link>
      </button>
    </section>
  )
}
