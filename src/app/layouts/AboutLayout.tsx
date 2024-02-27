import { Bio } from '@/components/About/Bio'
import ProfilPicture from '@/components/About/PictureProfil'

export const AboutLayout = () => {
  return (
    <div className="h-screen text-gray-primary flex">
      <Bio />
      <ProfilPicture />
    </div>
  )
}
