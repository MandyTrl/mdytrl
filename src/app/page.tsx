import { LocalTime } from '@/components/LocalTime'

export default function Home() {
  return (
    <main className="mx-96 h-screen flex flex-col font-generalSans">
      <div className="font-bold text-8xl mt-60">
        Développeuse <br></br> Fullstack
      </div>
      <LocalTime />
    </main>
  )
}
