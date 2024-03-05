import { CodedWith } from './CodedWith'
import { Contact } from './Contact'
import { Copyright } from './Copyright'
export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-around h-[820px] px-10 font-generalSans bg-gray-primary rounded-tl-[200px] text-white shadow-footer">
      <Contact />
      <CodedWith />
    </footer>
  )
}
