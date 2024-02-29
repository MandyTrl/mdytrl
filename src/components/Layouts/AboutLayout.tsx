import ProfilPicture from '@/components/About/PictureProfil'
import { Bio } from '@/components/About/Bio'
import { CV } from '../About/CV'

export const AboutLayout = () => {
  return (
    <div className="h-full flex flex-col items-center text-gray-primary">
      <ProfilPicture />
      <Bio />
      <CV />
    </div>
  )
}
