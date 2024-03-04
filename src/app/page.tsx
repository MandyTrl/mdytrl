import { TechnicalSkillsLayout } from '@/components/Layouts/TechnicalSkillsLayout'
import { LocalTime } from '@/components/LocalTime'
import { MagneticBtn } from '@/components/UI/MagneticBtn'

export default function Home() {
  return (
    <main className="flex flex-col font-generalSans">
      <section id="home" className="h-screen relative">
        <div className="font-bold text-8xl mt-60">
          Développeuse <br></br> Fullstack
        </div>
        <LocalTime />
        <MagneticBtn title="À propos" />
      </section>

      <section id="projects" className="flex flex-col h-screen">
        <div className="text-6xl mb-12">Projets</div>
        <TechnicalSkillsLayout />
      </section>
    </main>
  )
}
