export const Bio = () => {
  return (
    <div className="flex flex-col w-2/6 h-fit mr-10 mt-[30px] border border-t-transparent border-r-transparent border-b-transparent pl-4 border-[0.5] border-gray-primary">
      <h2 className="text-6xl mb-6 text-primary">À propos</h2>

      <div className="text-justify">
        Après une belle expérience dans le service client où l’adage est :{' '}
        <span className="italic underline underline-offset-4 decoration-yel-primary">
          &quot; À chaque problème, sa solution &quot;,
        </span>
        <p> j’ai voulu renouer avec ma créativité en la mêlant à ma vie professionnelle.</p>
        <p className="mt-6">
          J&apos;aime donner vie aux idées, les mettre sur papier ou sur PC. Le code est pour moi comme de
          l&apos;artisanat numérique où s&apos;allie logique et créativité.
        </p>
        <p className="mt-6">
          C’est donc naturellement qu’en 2022 je me suis reconvertie dans le développement où je m&apos;épanouis
          actuellement.
        </p>
      </div>
    </div>
  )
}
