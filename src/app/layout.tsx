import { Header } from '@/components/Header/Header'
import '@/styles/global.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Providers from './providers'

const mainFont = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TTAKKONG',
  description: '자신에게 딱 맞는 스터디를 매칭받다, 딱콩!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
      </head>
      <body className={mainFont.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
