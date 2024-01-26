import { LocalTime } from '@/components/LocalTime'
import { Stacks } from '@/components/Stacks'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col h-screen font-generalSans">
      {/* <div className="text-darkPrimary font-bold text-8xl mt-60">
        Hello, <br></br>moi c'est <span className="text-yellowPrimary">Mandy</span>
      </div> */}
      <div className="font-bold text-8xl mt-60">
        Développeuse <br></br> Fullstack
      </div>
      <LocalTime />
      <Stacks />
    </main>
  )
}
