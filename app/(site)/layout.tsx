"use client"

import "../globals.css"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import Navbar from "@/components/Navbar"
import { useRouter, usePathname } from "next/navigation"
import Footer from "@/components/Footer"
import { useEffect } from "react"

// const inter = Inter({ subsets: ["latin"] })
// const biro = localFont({
//   src: [
//     {
//       path: "../../public/fonts/BiroScriptPlus.ttf",
//       weight: "400",
//     },
//   ],
//   variable: "--font-biro",
// })

// const gothic = localFont({
//   src: [
//     {
//       path: "../../public/fonts/CenturyGothic.ttf",
//       weight: "400",
//     },
//     {
//       path: "../../public/fonts/gothic.ttf",
//       weight: "700",
//     },
//   ],
//   variable: "--font-gothic",
// })

// export const metadata = {
//   title: "Nota Cafe",
//   description: "Nota Cafe | Home is a Feeling",
// }

// ScrollToTop component
function ScrollToTop() {
  const pathname = usePathname();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  return (
    <html lang="en">
      <body
        className="font-montserrat"
      >
        <ScrollToTop />
        <Navbar />

        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
