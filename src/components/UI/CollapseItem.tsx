'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { ExperienceType } from '@/utils/datas/cv'

export type CollapseItemTypeProps = {
  datas: ExperienceType[]
  isProfessionalExperience: boolean
}

export const CollapseItem = ({ datas, isProfessionalExperience }: CollapseItemTypeProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const categoryStyle = 'italic normal-case font-rokkitt font-extralight border-b-[0.5px] border-primary'

  const handleClick = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="w-full grid grid-cols-9 gap-x-2 uppercase">
      <div className="col-span-5">
        <p className={categoryStyle}>{isProfessionalExperience ? '( Poste )' : '( Diplôme )'}</p>
        {datas.map((el: ExperienceType, idx: number) => {
          const isProfessionalExperience = 'job' in el
          return (
            <div key={idx} className="my-2" onClick={() => isProfessionalExperience && handleClick(idx)}>
              <p> {isProfessionalExperience ? el.job : el.certification}</p>
              {isProfessionalExperience && (
                <div
                  id="details"
                  className={clsx(
                    openIndex === idx ? 'max-h-[20rem]' : 'max-h-0',
                    'duration-300 ease-in-out px-1 lg:px-3 overflow-hidden normal-case text-sm'
                  )}
                >
                  <p id="description" className="py-2 text-justify lg:text-left">
                    {el.description}
                  </p>

                  {el.tasks &&
                    el.tasks.map((task: string, idx: number) => (
                      <p id="task" key={idx} className="py-1 pl-2 lg:pl-4">
                        ∙ {task}
                      </p>
                    ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="col-span-3">
        <p className={categoryStyle}>{isProfessionalExperience ? '( Entreprise )' : '( École) '}</p>
        {datas.map((el: ExperienceType, idx: number) => {
          const isProfessionalExperience = 'job' in el
          return (
            <div key={idx} className="my-2">
              {isProfessionalExperience ? el.company : el.school}
            </div>
          )
        })}
      </div>

      <div className="col-span-1 text-right">
        <p className={categoryStyle}>( Période )</p>
        {datas.map((el: ExperienceType, idx: number) => {
          return (
            <div key={idx} className="my-2">
              {el.year}
            </div>
          )
        })}
      </div>
    </div>
  )
}
