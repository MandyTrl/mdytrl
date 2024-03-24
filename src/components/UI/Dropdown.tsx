'use client'
import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { inspirationsType } from '@/utils/datas/inspirations'

type DropdownPropsType = {
  datas: inspirationsType[]
  title: string
  setValueOnParent: (value: string) => void
}

const Dropdown = ({ datas, title, setValueOnParent }: DropdownPropsType) => {
  const [value, setValue] = useState<string>(title)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleOnClick = (value: inspirationsType) => {
    setValue(value.label)
    setValueOnParent(value.img)
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div className="flex flex-col justify-center items-center m-3 text-lg font-rokkitt">
      <div
        className="flex items-center justify-between w-[420px] hover:cursor-pointer px-3 py-2 text-gray-primary hover:text-primary border-[0.5px] border-primary duration-300"
        onClick={handleOpen}
      >
        <p>{value}</p>
        <Image
          alt="compte mapstr"
          src={!isOpen ? '/assets/icons/arrow-single-down.svg' : '/assets/icons/arrow-single-up.svg'}
          width={15}
          height={0}
          priority
          className="mx-1 mb-1"
        />
      </div>

      <ul
        id="list-items"
        className={clsx(
          isOpen ? 'max-h-44 overflow-scroll border-[0.5px] border-primary' : 'max-h-0 overflow-hidden',
          'z-50 w-[420px] mt-1  ease-in-out duration-150'
        )}
      >
        {datas.map((el: inspirationsType, idx: number) => {
          return (
            <li
              key={idx}
              id="item"
              className="py-1 p-2 text-gray-primary hover:text-primary hover:cursor-pointer hover:bg-yel-secondary"
              onClick={() => handleOnClick(el)}
            >
              {el.label}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Dropdown
