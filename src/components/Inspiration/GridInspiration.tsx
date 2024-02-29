import Image from 'next/image'
import { inspiration } from '@/utils/datas/inspiration'

export const GridInsipiration = () => {
  return (
    <div className="grid gap-1 grid-flow-col grid-rows-2 my-1">
      {inspiration.map((el, idx: number) => {
        return (
          <div key={idx} className="group hover:cursor-crosshair">
            <div>
              <Image
                src={el.img as string}
                alt={`cover ${el.title} ${el.owner}`}
                width={144}
                height={144}
                className="object-cover w-36 h-36 duration-300 opacity-20 hover:opacity-100"
              />
            </div>

            {/* <div className="flex max-w-0 max-h-0 duration-300 group-hover:max-h-60 group-hover:max-w-full bg-white">
              <Image src={el.img} alt={`cover ${el.title} - ${el.owner}`} width={144} height={0} className="" />
              <div className="flex">
                <div className="flex">
                  <p>{el.title}</p>
                  <p>{el.owner}</p>
                </div>
                <p>{el.description}</p>
              </div>
            </div> */}
          </div>
        )
      })}
    </div>
  )
}
