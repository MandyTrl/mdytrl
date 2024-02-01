import ProfilPicture from './PictureProfil'
import { ThingsILove } from './ThingsILove'

export const AboutSection = () => {
  return (
    <div>
      <h2 className="text-6xl font-bold">Moi c&apos;est Mandy,</h2>

      <div className="text-gray-primary">
        <p className="text-m mb-4 my-[2px]">
          <span className="font-soria tracking-wide uppercase">Mandy Thorel </span>dans mon quotidien,
          <span className="font-soria tracking-wide uppercase"> Didy </span>
          pour la famille, ou encore
          <span className="font-soria tracking-wide uppercase"> Humaine </span>par mes chats.
        </p>

        <div className="flex items-between">
          <ProfilPicture />

          <div className="flex flex-col w-2/4 ml-6 mt-[13px]">
            <p>
              Après une belle expérience dans le service client où l’adage est :{' '}
              <span className="text-xl tracking-wide">
                “{' '}
                <span className="italic underline underline-offset-4 decoration-yel-primary">
                  À chaque problème, sa solution
                </span>{' '}
                ”
              </span>
              ,<br></br> j’ai voulu renouer avec ma créativité en la mêlant à ma vie professionnelle.
              <br></br>
              <br></br>
              J&apos;aime donner vie aux idées, les mettre sur papier ou sur PC. Je considère le code comme de
              l&apos;artisanat numérique où je peux combiner réflexion et créativité.
              <br></br>
              <br></br>C’est donc naturellement qu’en 2022 je me suis reconvertie dans le développement où je
              m&apos;épanouis actuellement.
            </p>
            <ThingsILove />
          </div>
        </div>
      </div>
    </div>
  )
}
