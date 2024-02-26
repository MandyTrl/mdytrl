import { LocalTime } from '@/components/LocalTime'
import { TechnicalSkillsLayout } from '@/components/layouts/TechnicalSkillsLayout'

export default function Home() {
  return (
    <main className="flex flex-col font-generalSans">
      <section id="home" className="h-screen">
        <div className="font-bold text-8xl mt-60">
          Développeuse <br></br> Fullstack
        </div>
        <LocalTime />
      </section>

      <section id="projects" className="flex flex-col h-screen">
        <div className="text-6xl mb-12">Projets</div>
        <TechnicalSkillsLayout />
      </section>
    </main>
  )
}
