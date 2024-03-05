import { GridInsipiration } from './GridInspiration'

export const Inspiration = () => {
  return (
    <aside className="flex flex-col items-center h-fit">
      <h2 className="w-full uppercase border-y border-l-transparent border-r-transparent border-solid border-primary py-2 font-rokkitt tracking-[20px] text-4xl text-center">
        Inspirations
      </h2>

      <GridInsipiration />
    </aside>
  )
}
