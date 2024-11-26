import localFont from 'next/font/local'
import { Inter as GoogleInter, VT323 as GoogleVT323 } from 'next/font/google'

export const DINish = localFont({
  src: [{
    path: 'DINish-Regular.woff2',
    weight: '400',
    style: 'normal',
  },
  {
    path: 'DINish-Bold.woff2',
    weight: '700',
    style: 'normal',
  }]
})

export const VT323 = GoogleVT323({ subsets: ['latin'], weight: ['400'] })
export const Inter = GoogleInter({ subsets: ['latin'], weight: ['400', '500', '600'] })
