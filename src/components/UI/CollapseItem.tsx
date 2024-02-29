'use client'
import clsx from 'clsx'
import { useState } from 'react'
import Image from 'next/image'
export const CollapseItem = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <div className="group flex flex-col justify-between py-3 hover:cursor-pointer" onClick={() => setOpen(!isOpen)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center">
          <Image
            src="/assets/icons/list.svg"
            alt="dérouler cette ligne du CV"
            width={20}
            height={20}
            className={clsx(isOpen && 'rotate-45', 'mr-4 duration-300 group-active:rotate-45')}
          />
          <p
            className={clsx(
              isOpen && 'bg-yel-primary',
              'duration-300 group-hover:bg-yel-primary px-2 py-[1px] rounded-md'
            )}
          >
            Test ligne de CV poste année
          </p>
        </div>

        <p>2023</p>
      </div>

      <div className={clsx(isOpen ? 'max-h-10' : 'max-h-0 overflow-hidden', 'font-rokkitt duration-300')}>
        <p className="py-2 pl-[44px] font-generalSans text-sm">Test collapse description</p>
      </div>
    </div>
  )
}
