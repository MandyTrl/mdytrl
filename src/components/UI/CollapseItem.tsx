'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { ExperienceType } from '@/utils/datas/cv'

export type CollapseItemTypeProps = {
  datas: ExperienceType[]
}

export const CollapseItem = ({ datas }: CollapseItemTypeProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleClick = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return datas.map((el: ExperienceType, idx: number) => {
    const isProfessionalExperience = 'job' in el

    return (
      <div
        key={idx}
        className={clsx(
          openIndex === idx && 'bg-slate-100',
          isProfessionalExperience && 'hover:cursor-pointer',
          'group flex flex-col justify-between px-2 py-3 duration-300 hover:bg-slate-100'
        )}
      >
        <div
          className="flex flex-col lg:flex-row items-center lg:justify-between"
          onClick={() => isProfessionalExperience && handleClick(idx)}
        >
          <div id="year" className="flex lg:items-center lg:w-1/4">
            <Image
              src="/assets/icons/list.svg"
              alt="dérouler cette ligne du CV"
              width={18}
              height={18}
              className={clsx(
                openIndex === idx && isProfessionalExperience && 'rotate-45',
                isProfessionalExperience && 'group-active:rotate-45',
                'mr-1 lg:mr-3 w-3 lg:w-[18px] duration-500'
              )}
            />
            <p className="font-rokkitt text-sm lg:text-base">{el.year}</p>
          </div>

          <div className="text-center lg:text-right">
            <div
              id="title"
              className={clsx(
                openIndex === idx && 'text-gray-primary font-semibold group-hover:bg-transparent',
                'transition duration-500 lg:px-2 py-[1px] rounded-md'
              )}
            >
              {isProfessionalExperience ? (
                <p>
                  <span
                    className={clsx(
                      openIndex === idx && 'opacity-100',
                      'opacity-0 group-hover:opacity-100 duration-300'
                    )}
                  >
                    ✨{' '}
                  </span>
                  {el.job}
                </p>
              ) : typeof el.certification === 'string' ? (
                <p>
                  <span className="opacity-0 group-hover:opacity-100 duration-300">✨ </span>
                  {el.certification}
                </p>
              ) : (
                el.certification.map((line, idx) => (
                  <p key={idx}>
                    <span className="opacity-0 group-hover:opacity-100 duration-300">✨ </span>
                    {line}
                  </p>
                ))
              )}
            </div>

            <p className="font-rokkitt tracking-widest text-sm mr-2">
              {isProfessionalExperience ? el.company : el.school}
            </p>
          </div>
        </div>

        {isProfessionalExperience && (
          <div
            id="details"
            className={clsx(
              openIndex === idx ? 'max-h-90' : 'max-h-0 overflow-hidden',
              'duration-300 px-1 lg:pl-[44px]'
            )}
          >
            <p id="description" className="py-2 text-justify lg:text-left">
              {el.description}
            </p>

            {el.tasks &&
              el.tasks.map((task: string, idx: number) => (
                <p id="task" key={idx} className="py-1 pl-2 lg:pl-4 text-sm">
                  ∙ {task}
                </p>
              ))}
          </div>
        )}
      </div>
    )
  })
}
