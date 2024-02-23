import Image from 'next/image'
import { CodedWith } from './CodedWith'
import { Contact } from './Contact'
import { Copyright } from './Copyright'
export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between h-[800px] px-10 font-generalSans bg-gray-primary rounded-tl-[200px] text-white shadow-footer">
      <div className="self-center">
        <Contact />
      </div>

      <div className="w-full">
        <Copyright />
        <CodedWith />
      </div>
    </footer>
  )
}
