'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { gsap } from 'gsap'
import { stacks } from '@/utils/datas/stacks'

export const Stacks = () => {
  const pathname = usePathname()

  return (
    <aside className="hidden bg-white border-[0.5px] border-primary w-[19%] mb-6 p-4 font-light">
      <div className="flex items-center mb-2">
        <h5 className="uppercase text-sm mr-2 font-normal">Stacks techniques</h5>
        <Image alt="" src="/assets/icons/keyboard.svg" width={18} height={18} priority />
      </div>
      <div id="stacks-container" className="flex flex-wrap font-rokkitt">
        {stacks.map((stack, idx) => {
          return (
            <p key={idx} className="mx-1">
              {stack.name}
            </p>
          )
        })}
      </div>
    </aside>
  )
}
