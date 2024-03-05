import type { Metadata } from 'next'
import './globals.css'
import { rokkitt, generalSans } from '@/utils/fonts'
import { Navbar } from '@/components/Navigation/Navbar'
import { Footer } from '@/components/Footer/Footer'
import { PreLoader } from '@/components/PreLoader'

export const metadata: Metadata = {
  title: 'Mandy Thorel - Portfolio',
  description: 'Développeuse fullstack, voici mes derniers projets réalisés'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/assets/logomdytrl.svg" sizes="88px" />
      </head>
      <body className={`${rokkitt.variable} ${generalSans.variable}`}>
        {/* <PreLoader /> */}
        <Navbar />
        <div className="w-full pt-14 px-4 lg:px-96">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
