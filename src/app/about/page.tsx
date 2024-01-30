import ProfilPicture from '@/components/PictureProfil'

export default function About() {
  return (
    <main className="flex flex-col h-screen font-generalSans mt-40">
      <p className="text-6xl font-bold">Moi c'est Mandy,</p>
      <p className="text-m mb-4">
        <span className="font-soria tracking-wider">Mandy Thorel </span>dans mon quotidien,
        <span className="font-soria tracking-wider"> Didy </span>
        pour la famille, ou encore <span className="font-soria tracking-wider"> Humaine </span>par mes chats
      </p>
      <div className="flex items-between">
        <ProfilPicture />
        <p className="w-2/4 ml-6">
          Après une belle expérience dans le service client où l’adage est : “À chaque problème, sa solution”, j’ai
          voulu renouer avec ma créativité en la mêlant à ma vie professionnelle. <br></br>
          <br></br>C’est donc naturellement qu’en 2022 je me suis reconvertie dans le développement 💻 !
        </p>
      </div>
    </main>
  )
}
