export const Footer = () => {
  return (
    <footer className="[&>*]:px-4 flex justify-between p-6 font-generalSans">
      <div>
        <p className="text-gray-primary uppercase text-xs font-semibold font-soria">coded with</p>

        <div className="flex items-center pl-4 border-l border-l-yel-primary">
          <div className="Sheldon text-xs">
            <p> ≽^•˕•^≼ </p>
            <p className="text-[10px] text-center italic text-gray-primary">Sheldon</p>
          </div>
          <span className="text-primaryrounded-full text-xs mx-2">+</span>
          <div className="Papaille text-xs">
            <p> ≽^◕⩊◕^≼ </p>
            <p className="text-[10px] text-center italic text-gray-primary">Papaille</p>
          </div>
          <span className="text-primaryrounded-full text-xs mx-2">+</span> ❤
          <span className="text-primaryrounded-full text-xs mx-2">+</span> <span className="text-2xl">⛾</span>
        </div>
      </div>

      <div>
        <p className="text-gray-primary uppercase text-xs font-semibold font-soria">last update</p>
        <p className="border-l border-l-yel-primary pl-2">jan. 2024</p>
      </div>
    </footer>
  )
}
