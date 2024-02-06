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
        {/* <Script id="my-script">
          {`
          (function(w, d, s, u) {
            w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
            var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
            j.async = true; j.src = 'https://chat.tetmon.com/livechat/rocketchat-livechat.min.js?_=201903270000';
            h.parentNode.insertBefore(j, h);
          })(window, document, 'script', 'https://chat.tetmon.com/livechat');
          `}
        </Script> */}
      </body>
    </html>
  )
}
