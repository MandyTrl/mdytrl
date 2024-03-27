import type { Metadata } from 'next'
import './globals.css'
import { rokkitt, generalSans } from '@/utils/fonts'
import { Navbar } from '@/components/Navigation/Navbar'
import { Footer } from '@/components/Footer/Footer'
import { EncartLayout } from '@/components/Layouts/EncartLayout'

export const metadata: Metadata = {
  title: 'Mandy Thorel - Portfolio',
  description: 'Développeuse full stack, voici mes derniers projets réalisés'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="x/assets/logomdytrl.svg" />
      </head>
      <body
        className={`${rokkitt.variable} ${generalSans.variable} md:min-h-screen md:max-h-screen flex flex-col relative`}
      >
        <Navbar />
        <main className="bg-white w-[calc(100%-80)] overflow-y-auto mx-4 md:mx-6 lg:mx-[20rem] flex flex-grow justify-center font-generalSans text-sm border-l-[0.8px] border-r-[0.8px] border-primary">
          {children}
        </main>
        <EncartLayout />
        <Footer />
      </body>
    </html>
  )
}
