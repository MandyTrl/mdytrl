import { TechnicalSkillsLayout } from '@/components/Layouts/TechnicalSkillsLayout'
import { LocalTime } from '@/components/LocalTime'
import { Button } from '@/components/UI/Button'

export default function Home() {
  return (
    <main className="flex flex-col font-generalSans">
      <section id="home" className="h-screen relative">
        <div className="font-bold text-8xl mt-60">
          Développeuse <br></br> Fullstack
        </div>
        <LocalTime />
        <Button title="À propos" />
      </section>

      <section id="projects" className="flex flex-col h-screen">
        <div className="text-6xl mb-12">Projets</div>
        <TechnicalSkillsLayout />
      </section>
    </main>
  )
}
