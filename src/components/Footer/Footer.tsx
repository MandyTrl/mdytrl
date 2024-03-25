import { Contact } from './Contact'

export const Footer = () => {
  return (
    <footer className="font-generalSans w-full min-h-[60px] lg:min-h-[85px] bg-white flex flex-col lg:flex-row items-center justify-between pt-3 pb-2 lg:pt-0 lg:pb-0 px-4 border-t-[0.5px] border-primary">
      <Contact />

      <div className="w-full lg:w-fit pl-2 hidden lg:flex flex-col items-end">
        <p className="text-sm">©Mandy Thorel</p>
        <p className="text-[10px]">last update : march 2024</p>
      </div>
    </footer>
  )
}
