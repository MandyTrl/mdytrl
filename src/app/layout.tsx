import type { Metadata } from 'next'
import Image from 'next/image'
import './globals.css'
import { rokkitt, generalSans } from '@/utils/fonts'
import { Navbar } from '@/components/Navigation/Navbar'
import { Footer } from '@/components/Footer/Footer'

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
        <link rel="icon" href="/assets/logomdytrl.svg" />
      </head>
      <body
        className={`${rokkitt.variable} ${generalSans.variable} lg:min-h-screen lg:max-h-screen flex flex-col relative`}
      >
        <Navbar />
        <main className="bg-white w-[calc(100%-80)] overflow-y-auto mx-4 lg:mx-80 flex flex-grow justify-center font-generalSans border-l-[0.8px] border-r-[0.8px] border-primary">
          {children}
        </main>
        <div className="absolute hidden lg:flex lg:bottom-28 bg-transparent w-full justify-between">
          <div className="flex items-center ml-8 px-2 uppercase animate-bounce font-rokkitt bg-white border-[0.5px] border-primary">
            <Image src="/assets/icons/arrow-right.svg" alt="" width={10} height={10} className="rotate-90 mr-1" />
            <p className="text-xs">Me contacter </p>
          </div>
          <div className="flex flex-col items-end pr-4">
            <p className="text-sm">©Mandy Thorel</p>
            <p className="text-[10px]">last update : march 2024</p>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
