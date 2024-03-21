import Image from 'next/image'
import { links, linkType } from '@/utils/datas/links.ts'

export const SocialLinks = () => {
  return (
    <div className="h-full mx-1 flex">
      {links.map((el: linkType) => {
        return (
          <div
            key={el.name}
            className="mx-1 p-[11px] lg:p-4 border-[0.5px] bg-gray-secondary bg-opacity-5 border-gray-primary hover:cursor-pointer hover:border-primary hover:shadow-footer-btn  hover:bg-opacity-20 rounded-full ease-in-out duration-300"
          >
            <a href={el.link}>
              <Image
                src={el.logo}
                alt={`contact_link_mandy_thorel_on_${el.name}`}
                width={24}
                height={24}
                className="w-5 h-5 lg:w-6 lg:h-6"
              />
            </a>
          </div>
        )
      })}
    </div>
  )
}
