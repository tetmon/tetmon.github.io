import type { Metadata } from 'next'
import { Inter, Work_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] })

const workSans = Work_Sans({
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Force multiplier for business owners | EdgeSet',
  description: 'Force multiplier for business owners',
  // TODO: separate this out through runtime env
  // robots: {
  //   follow: false,
  //   index: false
  // }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${workSans.variable}`}>
      <body className={inter.className}>
        {children}
        <script defer data-api="https://analytics.tetmon.com/api/event" src="/assets/plausible.js"></script>
      </body>
    </html>
  )
}
