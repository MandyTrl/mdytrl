import Image from 'next/image'
import { links, linkType } from '@/utils/datas/links.ts'

export const SocialLinks = () => {
  return (
    <div className="mx-1 flex">
      {links.map((el: linkType) => {
        return (
          <div
            key={el.name}
            className="mx-1 p-4 border-[0.5px] bg-gray-secondary bg-opacity-5 border-gray-secondary hover:cursor-pointer hover:border-white hover:bg-opacity-20 trans-border-radius ease-in-out duration-300"
          >
            <a href={el.link}>
              <Image src={el.logo} alt={`logo_${el.name}`} width={25} height={25} className="fill-gray-secondary" />
            </a>
          </div>
        )
      })}
    </div>
  )
}
