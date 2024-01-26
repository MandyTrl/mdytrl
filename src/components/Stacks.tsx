import Image from 'next/image'
import { stackType, stacks } from '@/utils/stacks.ts'

export const Stacks = () => {
  const triplicatedStacks = stacks.concat(stacks, stacks)

  return (
    <aside className="max-h-[450px] w-fit overflow-hidden no-scrollbar relative">
      <div className="animate-scrolling">
        {stacks.map((stack: stackType, index) => {
          return (
            <div
              key={stack.name}
              className="p-4 my-2 flex flex-col justify-around items-center border border-gray-secondary border-solid rounded-lg"
            >
              <Image src={stack.logo} alt={`logo_${stack.name}`} width={40} height={40} />
              <p className="text-sm">{stack.name}</p>
            </div>
          )
        })}
        {triplicatedStacks.map((stack: stackType, index) => {
          return (
            <div
              key={stack.name}
              className="p-4 my-2 flex flex-col justify-around items-center border border-gray-secondary border-solid rounded-lg"
            >
              <Image src={stack.logo} alt={`logo_${stack.name}`} width={40} height={40} />
              <p className="text-sm">{stack.name}</p>
            </div>
          )
        })}
      </div>
      <div className="gradient-overlay absolute top-0 left-0 w-full h-full fade-stacks-cards"></div>
    </aside>
  )
}
