import type { Metadata } from 'next'
import { Roboto, Roboto_Slab } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

const roboto = Roboto_Slab({
  subsets: ['latin'],
  weight: ['200', '400', '500', '700'],
  variable: '--font-roboto-slab'
})

export const metadata: Metadata = {
  title: 'EduZenEra',
  description: 'A platform where the brain sharps the skill',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.variable}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
