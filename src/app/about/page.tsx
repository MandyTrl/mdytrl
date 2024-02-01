import ProfilPicture from '@/components/PictureProfil'

export default function About() {
  return (
    <main className="flex flex-col h-screen font-generalSans mt-40">
      <h2 className="text-6xl font-bold">Moi c&apos;est Mandy,</h2>

      <div className="text-gray-primary">
        <p className="text-m mb-4 my-[2px]">
          <span className="font-soria tracking-wide uppercase">Mandy Thorel </span>dans mon quotidien,
          <span className="font-soria tracking-wide uppercase"> Didy </span>
          pour la famille, ou encore <span className="font-soria tracking-wide uppercase"> Humaine </span>par mes chats.
        </p>

        <div className="flex items-between">
          <ProfilPicture />
          <p className="w-2/4 ml-6">
            Après une belle expérience dans le service client où l’adage est :{' '}
            <span className="text-xl tracking-wide">
              “{' '}
              <span className="italic underline underline-offset-4 decoration-yel-primary">
                À chaque problème, sa solution
              </span>{' '}
              ”
            </span>
            ,<br></br> j’ai voulu renouer avec ma créativité en la mêlant à ma vie professionnelle. <br></br>
            <br></br>C’est donc naturellement qu’en 2022 je me suis reconvertie dans le développement.
          </p>
        </div>
      </div>
    </main>
  )
}
