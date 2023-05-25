import './globals.css'
import { Open_Sans } from 'next/font/google'

const sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Keep',
  description: 'Google Keep Clone by Muhammad Ebad Arshad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sans.className}>{children}</body>
    </html>
  )
}
