import { Collapse } from '../UI/Collapse'
import { professional, school } from '@/utils/datas/cv'

export const CV = () => {
  return (
    <section id="CV">
      <Collapse title={'Parcours professionnel'} datas={professional} />
      <Collapse title={'Formation'} datas={school} />
    </section>
  )
}
