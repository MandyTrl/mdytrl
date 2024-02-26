import { Inspiration } from '@/components/Inspiration/Inspiration'
import { AboutLayout } from '@/components/Layouts/AboutLayout'

export default function About() {
  return (
    <main className="flex flex-col h-full items-center justify-between font-generalSans">
      <section id="about" className="mb-20 h-full">
        <AboutLayout />
      </section>

      <section id="inspiration" className="mb-20">
        <Inspiration />
      </section>
    </main>
  )
}
