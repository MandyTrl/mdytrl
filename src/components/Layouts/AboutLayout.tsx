import ProfilPicture from '@/components/About/PictureProfil'
import { Bio } from '@/components/About/Bio'
import { CV } from '../About/CV'

export const AboutLayout = () => {
  return (
    <div className="h-full flex flex-col items-center text-gray-primary">
      <h4 className="text-8xl self-start mt-20">Donner forme aux idées</h4>
      <ProfilPicture />
      <Bio />
      <CV />
    </div>
  )
}
