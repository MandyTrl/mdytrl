/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next'
import { ProjectsList } from '@/components/ProjectsList'
import { MagneticBtn } from '@/components/UI/MagneticBtn'

export const metadata: Metadata = {
  title: 'Mandy Thorel - Projets',
  description: 'Sélection de projets développés et les stacks techniques utilisées'
}

export default function Projects() {
  return (
    <section id="projects" className="w-full px-4 lg:px-24">
      <div>
        <div className="flex items-center justify-center lg:justify-start pt-10 lg:py-20 pb-10 lg:mb-14 mb-6">
          <div className="relative h-28 lg:h-36 w-28 lg:w-36 overflow-hidden rounded-full">
            <img
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjU2d2xmNGNtdWVoYnAwMHM1cHdoczZzYTBhc3FwOHg5aGh0NnZvYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VbnUQpnihPSIgIXuZv/giphy.gif"
              alt=""
              className="absolute top-0 w-fit"
            />
          </div>

          <h1 className="lg:text-8xl text-5xl text-primary pl-2">Projets</h1>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center">
          <ProjectsList />
        </div>
      </div>

      <div className="relative lg:py-[10rem] hidden lg:block">
        <hr className="separator" />
        <MagneticBtn title="À propos" />
      </div>
    </section>
  )
}
