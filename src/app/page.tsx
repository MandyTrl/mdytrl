import { LocalTime } from '@/components/LocalTime'
import { TechnicalSkillsLayout } from './layouts/TechnicalSkillsLayout'
import { AboutLayout } from './layouts/AboutLayout'

export default function Home() {
  return (
    <main className="flex flex-col font-generalSans">
      <div id="home" className="h-screen">
        <div className="font-bold text-8xl mt-60">
          Développeuse <br></br> Fullstack
        </div>
        <LocalTime />
      </div>

      <section id="projects" className="flex flex-col h-screen">
        <div className="text-6xl font-bold mb-12">Projets</div>
        <TechnicalSkillsLayout />
      </section>

      <section id="about" className="mb-20">
        <AboutLayout />
      </section>
    </main>
  )
}
