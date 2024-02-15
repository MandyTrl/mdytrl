import ProfilPicture from './PictureProfil'
import { Inspiration } from './Inspiration'

export const AboutSection = () => {
  return (
    <div>
      <div className="text-gray-primary flex items-between">
        <ProfilPicture />

        <div className="flex flex-col w-2/4 ml-6 mt-[13px]">
          <h2 className="text-6xl font-bold mb-6 text-primary">Hey !</h2>

          <div>
            Après une belle expérience dans le service client où l’adage est :{' '}
            <span className="text-lg tracking-wide mt-6">
              “{' '}
              <span className="italic underline underline-offset-4 decoration-yel-primary">
                À chaque problème, sa solution
              </span>{' '}
              ”
            </span>
            , <p> j’ai voulu renouer avec ma créativité en la mêlant à ma vie professionnelle.</p>
            <p className="mt-6">
              J&apos;aime donner vie aux idées, les mettre sur papier ou sur PC. Le code est comme de l&apos;artisanat
              numérique où je peux allier logique et créativité.
            </p>
            <p className="mt-6">
              C’est donc naturellement qu’en 2022 je me suis reconvertie dans le développement où je m&apos;épanouis
              actuellement.
            </p>
          </div>
          <Inspiration />
        </div>
      </div>
    </div>
  )
}
