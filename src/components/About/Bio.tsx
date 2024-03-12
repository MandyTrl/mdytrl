import Image from 'next/image'

export const Bio = () => {
  return (
    <div className="flex flex-col h-fit mb-20 w-full">
      <div id="bio_txt" className="text-2xl">
        <div>
          <p>
            Après une belle expérience dans le service client où l’adage est :
            <span className="text-black"> À chaque problème, sa solution</span>, j’ai voulu renouer avec ma créativité
            en la mêlant à ma vie professionnelle.
          </p>
          <p>
            J&apos;aime donner vie aux idées, les mettre sur papier ou sur PC. Le code est pour moi comme de
            l&apos;artisanat numérique où s&apos;allie logique et créativité.
          </p>
        </div>

        <p className="mt-8">
          C’est donc naturellement qu’en 2022 je me suis reconvertie dans le développement où je m&apos;épanouis
          actuellement.
        </p>
      </div>
    </div>
  )
}
