import { ReactNode } from 'react'
import './globals.css'
import { 
  Roboto_Flex as roboto, 
  Bai_Jamjuree as baijamjuree 

} from 'next/font/google'

const Roboto = roboto({ subsets: ['latin'],variable: '--font-roboto' })
const baiJamJuree = baijamjuree({
  subsets: ['latin'], 
  weight:'700',
  variable: '--font-bai-jamjuree'
})


export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma capsula do tempo feita com React, Next.js, TailwindCss e TypeScript'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${Roboto.variable} ${baiJamJuree.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}
