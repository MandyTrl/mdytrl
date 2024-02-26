import ProfilPicture from '@/components/PictureProfil'
import { Bio } from '@/components/Bio'

export const AboutLayout = () => {
  return (
    <div className="h-screen text-gray-primary flex">
      <Bio />
      <ProfilPicture />
    </div>
  )
}
