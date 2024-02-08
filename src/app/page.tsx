import { LocalTime } from '@/components/LocalTime'

export default function Home() {
  return (
    <main className="mx-96 flex flex-col h-screen font-generalSans">
      <div className="font-bold text-8xl mt-60">
        Développeuse <br></br> Fullstack
      </div>
      <LocalTime />
    </main>
  )
}
