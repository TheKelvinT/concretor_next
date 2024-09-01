import Link from "next/link"
import React from "react"
import FooterLogo from "@/assets/footer-logo.png"
import Image from "next/image"
import Button from "./Button"
function Footer() {

  return (
    <footer className="bg-primary flex flex-col justify-center text-white items-center">
      <div className="footer-container max-w-[1440px] flex flex-col items-center text-center md:text-left md:flex-row md:items-start order-1 md:order-1">
        <div className = "mb-8 md:mb-0">
          <h2 className="text-[32px] font-merriweather font-bold">CONCRETOR</h2>
          <p className = "text-xl font-merriweather text-black">Engineering and Laboratories SDN BHD</p>
          <p className = "text-black">202201044579 (1490276-W)</p>
          <p className = "text-black">CIDB No. 0120230221-SL114191</p>
          <p className = "text-black">SPAN No. SPAN/EKS/(PT)/800-2B/2/23/133</p>
        </div>

        <div className = "mb-8 md:mb-0 order-4 md:order-2">
          <p className="font-bold">Links</p>
          <div className="flex flex-col text-[14px] ">
            <br />
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className = "mb-8 md:mb-0 order-3 md:order-3">
          <p className="font-bold">Follow us</p>
        </div>

        <div className = "mb-8 md:mb-0 order-2 md:order-4">
          <p className="font-bold">Contact us</p>
          <br />
          <p>63, Jalan TPP 1/1, Taman</p>
          <p>Perindustrian Puchong, </p>
          <p>47100 Puchong, Selangor</p>
          <br />
          <p>+6012 234 4444</p>
        </div>
        <hr className="md:hidden border-white mt-2 w-full order-5" />
      </div>

      <div className="text-center font-monstserrat pb-7 order-6 md:order-6">
        <p>2024 CONCRETOR Engineering and Laboratories Sdn Bhd © All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
