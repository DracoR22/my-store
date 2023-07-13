import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToastProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FashionFusion',
  description: 'The best clothes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider/>
        <ToasterProvider/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
