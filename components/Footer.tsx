import Link from "next/link"
import React from "react"
import FooterLogo from "@/assets/footer-logo.png"
import Image from "next/image"
function Footer() {
  return (
    <footer className=" py-20 px-4 mx-auto bg-primary flex flex-col justify-center items-center text-white">
      <div className="flex gap-x-12 font-inter text-xs flex-col md:flex-row text-center gap-6">
        <Link href="/about">ABOUT</Link>
        <Link href="/menu">MENU</Link>
        <Link href="/events">EVENT</Link>
        <Link href="/festive">FESTIVE</Link>
        <Link href="/careers">CAREERS</Link>
        <Link href="/reservations">RESERVATIONS</Link>
        <Link href="/blog">BLOG</Link>
      </div>
      <div className="flex md:flex-row justify-between items-center  flex-col gap-10 md:gap-x-24 xl:gap-x-64 py-16">
        <div className="w-60 text-[10px] flex flex-col items-center text-center">
          <p>No. 1-1 (First Floor),</p>
          <p>Jalan Anggerik Vanilla BF 31/BF,</p>
          <p>Kota Kemuning, 40460 Shah Alam,</p>
          <p>Selangor</p>

          <p className="underline underline-offset-2">+6017 489 1189</p>
        </div>
        <div>
          <Link href="/">
            <Image src={FooterLogo} alt="footer-logo" />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <h4 className="font-biro text-4xl text-center">Home is a feeling.</h4>
        </div>
      </div>

      <div className="text-center font-inter text-[10px]">
        <p>
          Made with love and a drop of unicorn blood |{" "}
          <span className="underline underline-offset-2">Privacy</span> |{" "}
          <span className="underline underline-offset-2">Terms</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
