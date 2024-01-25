import type { Metadata } from 'next'
import localFont from '@next/font/local'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const soria = localFont({
  src: [
    {
      path: '../../public/fonts/Soria/soria-font.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-soria'
})

const generalSans = localFont({
  src: [
    {
      path: '../../public/fonts/General Sans/GeneralSans-Extralight.otf',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-Semibold.otf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-LightItalic.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-ExtralightItalic.otf',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-Italic.otf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-MediumItalic.otf',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-SemiboldItalic.otf',
      weight: '600',
      style: 'italic'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-BoldItalic.otf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-general-sans'
})

export const metadata: Metadata = {
  title: 'Portfolio - Mandy Thorel',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${soria.variable} ${generalSans.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
