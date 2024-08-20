"use client"

import "../globals.css"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useRouter } from "next/navigation"
const inter = Inter({ subsets: ["latin"] })
const biro = localFont({
  src: [
    {
      path: "../../public/fonts/BiroScriptPlus.ttf",
      weight: "400",
    },
  ],
  variable: "--font-biro",
})

const gothic = localFont({
  src: [
    {
      path: "../../public/fonts/CenturyGothic.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/gothic.ttf",
      weight: "700",
    },
  ],
  variable: "--font-gothic",
})

// export const metadata = {
//   title: "Nota Cafe",
//   description: "Nota Cafe | Home is a Feeling",
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${biro.variable} ${gothic.variable}`}
      >
        <Navbar />

        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
