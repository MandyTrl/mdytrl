import Image from 'next/image'
import { SocialLinks } from './SocialLinks'

export const Contact = () => {
  return (
    <div className="w-fit flex items-center justify-center md:justify-end">
      <a href="mailto:thorelmandy@gmail.com">
        <p className="group flex items-center first-line:w-fit py-2 pl-3 pr-4 italic border-[0.5px] border-gray-primary bg-gray-secondary bg-opacity-5 rounded-full hover:cursor-pointer hover:border-primary hover:shadow-footer-btn hover:bg-opacity-20">
          <Image
            src="/assets/icons/send.svg"
            alt=""
            width={30}
            height={30}
            className="pr-2 w-0 h-0 group-hover:w-6 group-hover:h-6 transition-all ease-in-out duration-300"
          />
          <span>thorelmandy@gmail.com</span>
        </p>
      </a>

      <SocialLinks />
    </div>
  )
}
