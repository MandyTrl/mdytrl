import { Stacks } from '@/components/Stacks'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center font-generalSans">
      <div className="text-red-900">Hello World</div>
      <Stacks />
    </main>
  )
}
