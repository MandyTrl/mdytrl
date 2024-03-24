import Link from 'next/link'
import { Collapse } from '../UI/Collapse'
import { professional, school } from '@/utils/datas/cv'

export const CV = () => {
  return (
    <section id="CV" className="w-full lg:mt-20 mt-4">
      <div className="hidden lg:flex lg:flex-col">
        <Collapse title={'Parcours professionnel'} datas={professional} />
        <Collapse title={'Formation'} datas={school} />

        <button className="w-full lg:w-fit flex items-center justify-center rounded-md px-3 py-2 mb-3 bg-gray-secondary bg-opacity-30 tracking-widest text-sm uppercase text-primary hover:px-6 hover:bg-yel-primary transform ease-in-out duration-300">
          <Link href="/assets/cv-dev-full-stack-mandy-thorel.pdf" download target="_blank">
            Télécharger le CV
          </Link>
        </button>
      </div>
    </section>
  )
}
