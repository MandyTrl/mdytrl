import Image from 'next/image'
import { SocialLinks } from './SocialLinks'

export const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="font-rokkitt uppercase text-4xl lg:text-[80px]">Me Cont@cter</p>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center">
        <a href="mailto:thorelmandy@gmail.com">
          <p className="group flex items-center first-line:w-fit py-4 px-6 italic border-[0.5px] border-gray-secondary bg-gray-secondary bg-opacity-5 rounded-full hover:cursor-pointer hover:border-white hover:shadow-footer-btn hover:bg-opacity-20">
            <Image
              src="/assets/icons/arrow-right.svg"
              alt="arrow doodle"
              width={30}
              height={30}
              className="pr-2 w-0 h-0 group-hover:w-8 group-hover:h-4 transition-all ease-in-out duration-300"
            />
            <span>thorelmandy@gmail.com</span>
          </p>
        </a>

        <SocialLinks />
      </div>
    </div>
  )
}
