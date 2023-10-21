import type { Metadata } from 'next'
import './globals.css'
import inter from '@/font'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Travel App - Hilink',
  description: 'Travel UI/UX App for Camping',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' className='scroll-mt-[72px] pt-[72px] lg:scroll-mt-[98px] lg:pt-[98px]'>
      <body className={`${inter.className}`}>
        <Navbar />
        <main className='relative overflow-hidden'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
