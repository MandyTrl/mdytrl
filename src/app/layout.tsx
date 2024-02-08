import type { Metadata } from 'next'
import './globals.css'
import { soria, generalSans } from '@/utils/fonts'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Cursor from '@/components/Cursor'
import { ScrollTo } from '@/components/ScrollTo'

export const metadata: Metadata = {
  title: 'Mandy Thorel - Portfolio',
  description: 'Generated by create next app'
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
      <body className={`${soria.variable} ${generalSans.variable}`}>
        {/* <ScrollTo scrollTarget={100} /> */}
        <Cursor />
        <Navbar />
        <div className="pt-14 border-b border-solid border-b-gray-secondary">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
