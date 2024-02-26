import ProfilPicture from '@/components/About/PictureProfil'
import { Bio } from '@/components/About/Bio'
import { CV } from '../About/CV'

export const AboutLayout = () => {
  return (
    <div className="h-screen text-gray-primary flex">
      <div>
        <Bio />
        <CV />
      </div>

      <ProfilPicture />
    </div>
  )
}
