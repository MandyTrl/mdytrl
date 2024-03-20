import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { stackType, stacks } from '@/utils/datas/stacks'

export const Stacks = () => {
  const stacksWithUniqueIds = stacks.map((stack) => ({ ...stack, id: uuidv4() }))

  return (
    <div className="relative w-fit lg:h-[650px] max-h-[840px] overflow-hidden no-scrollbar border-primary mr-8">
      <div>
        <div className="animate-scrolling h-fit">
          {stacksWithUniqueIds.map((stack: stackType) => {
            return (
              <div key={`${stack.name}_${stack.id}`} className="p-4 my-2 flex flex-col justify-around items-center">
                <Image src={stack.logo} alt={`logo_${stack.name}`} width={40} height={40} className="opacity-90" />
                <p className="text-sm mt-4 text-gray-primary">{stack.name}</p>
              </div>
            )
          })}
        </div>
        <div className="animate-scrolling h-fit" aria-hidden={true}>
          {stacksWithUniqueIds.map((stack: stackType) => {
            return (
              <div key={`${stack.id}_${stack.name}`} className="p-4 my-2 flex flex-col justify-around items-center">
                <Image src={stack.logo} alt={`logo_${stack.name}`} width={40} height={40} className="opacity-90" />
                <p className="text-sm mt-4 text-gray-primary">{stack.name}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="gradient-overlay absolute top-0 left-0 w-full h-full fade-stacks-cards"></div>
    </div>
  )
}
