import { Bio } from '@/components/About/Bio'
import { CV } from '../About/CV'

export const AboutLayout = () => {
  return (
    <div className="h-full flex flex-col items-center text-gray-primary">
      <h4 className="text-8xl mt-20 border-b border-gray-secondary pb-20 mb-14">Donner forme aux idées</h4>

      <Bio />
      <CV />
    </div>
  )
}
