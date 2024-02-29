import Image from 'next/image'

export const Bio = () => {
  return (
    <div className="flex flex-col h-fit mb-20 w-3/5">
      <div className="flex items-center">
        <h2 className="text-6xl mb-6 text-primary mr-4">À propos</h2>
        <Image src="/assets/icons/arrow-up-right.svg" alt="" width={30} height={30} />
      </div>

      <div id="bio_txt">
        <div>
          Après une belle expérience dans le service client où l’adage est :{' '}
          <p className="italic text-lg text-center my-1">&quot;À chaque problème, sa solution&quot;,</p>
          j’ai voulu renouer avec ma créativité en la mêlant à ma vie professionnelle.
        </div>
        <p className="mt-8">
          J&apos;aime donne text-rightr vie aux idées, les mettre sur papier ou sur PC. Le code est pour moi comme de
          l&apos;artisanat numérique où s&apos;allie logique et créativité.
        </p>
        <div className="flex items-center justify-center mt-8">
          <Image alt="" src="/assets/icons/smile.svg" width={25} height={25} />
          <p className="ml-5">
            C’est donc naturellement qu’en 2022 je me suis reconvertie dans le développement où je m&apos;épanouis
            actuellement.
          </p>
        </div>
      </div>
    </div>
  )
}
