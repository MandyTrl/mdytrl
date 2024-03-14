import { CodedWith } from './CodedWith'
import { Contact } from './Contact'

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-around h-[880px] px-10 font-generalSans bg-gray-primary lg:rounded-tl-[200px] text-white shadow-footer">
      <Contact />
      <CodedWith />
    </footer>
  )
}
