'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { ProfessionalExperiencesType, SchoolExperiencesType } from '@/utils/datas/cv'

export type CollapseItemTypeProps = {
  datas: SchoolExperiencesType[] | ProfessionalExperiencesType[]
}

export const CollapseItem = ({ datas }: CollapseItemTypeProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return datas.map((el: SchoolExperiencesType | ProfessionalExperiencesType, idx: number) => {
    const isProfessionalExperience = typeof el === ProfessionalExperiencesType

    return (
      <div
        key={idx}
        className={clsx(
          openIndex === idx && 'bg-slate-100',
          'group flex flex-col justify-between px-2 py-3 hover:cursor-pointer'
        )}
      >
        <div className="flex items-center justify-between" onClick={() => handleClick(idx)}>
          <div id="year" className="flex items-center w-1/4">
            <Image
              src="/assets/icons/list.svg"
              alt="dérouler cette ligne du CV"
              width={18}
              height={18}
              className={clsx(openIndex === idx && 'rotate-45', 'mr-3 duration-500 group-active:rotate-45')}
            />
            <p className="font-rokkitt">{el.year}</p>
          </div>

          <div className="text-right">
            <p
              id="title"
              className={clsx(
                openIndex === idx && 'text-gray-primary font-semibold group-hover:bg-transparent',
                'transition duration-500 group-hover:bg-yel-primary px-2 py-[1px] rounded-md'
              )}
            >
              {el.job || el.certification}
            </p>

            <p className="font-rokkitt tracking-widest text-sm">{el.company || el.school}</p>
          </div>
        </div>

        <div
          id="details"
          className={clsx(
            openIndex === idx && el.description ? 'max-h-60' : 'max-h-0 overflow-hidden',
            'duration-300 pl-[44px]'
          )}
        >
          <p className="py-2">{el.description}</p>
          {el.tasks &&
            el.tasks.map((task: string, idx: number) => (
              <p key={idx} className="py-1 pl-4 text-sm">
                ∙ {task}
              </p>
            ))}
        </div>
      </div>
    )
  })
}
