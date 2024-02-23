import ProfilPicture from './PictureProfil'
import { Bio } from './Bio'

export const AboutSection = () => {
  return (
    <div className="flex items-between">
      <Bio />
      <ProfilPicture />
    </div>
  )
}
