import Image from 'next/image'

export const Bio = () => {
  return (
    <div className="flex flex-col h-fit mb-20 w-full">
      <div className="flex items-start">
        <h2 className="text-6xl mb-6 text-primary mr-4">À propos</h2>
        <Image src="/assets/icons/arrow-up-right.svg" alt="" width={30} height={30} />
      </div>

      <div id="bio_txt">
        <div>
          Hello, moi c&apos;est Mandy, et après une belle expérience dans le service client où l’adage est :{' '}
          <p className="italic text-lg text-center my-1">&quot;À chaque problème, sa solution&quot;,</p>
          j’ai voulu renouer avec ma créativité en la mêlant à ma vie professionnelle. J&apos;aime donner vie aux idées,
          les mettre sur papier ou sur PC. Le code est pour moi comme de l&apos;artisanat numérique où s&apos;allie
          logique et créativité.
        </div>

        <div className="flex items-center mt-2">
          <Image alt="" src="/assets/icons/smile.svg" width={32} height={32} />
          <p className="ml-2">
            C’est donc naturellement qu’en 2022 je me suis reconvertie dans le développement où je m&apos;épanouis
            actuellement.
          </p>
        </div>
      </div>
    </div>
  )
}
