import Link from "next/link"
import React from "react"
import FooterLogo from "@/assets/footer-logo.png"
import Image from "next/image"
import Button from "./Button"
import { useRouter } from 'next/navigation'
function Footer() {
  const router = useRouter()
  const onClick = () => {
    router.push('/dashboard')
  }
  return (
    <footer className="bg-primary flex flex-col justify-center text-white items-center">
      <div className="footer-container max-w-[1440px]">
        <div>
          <h2 className="text-[32px] font-merriweather font-bold">CONCRETOR</h2>
          <p className = "text-xl font-merriweather text-black">Engineering and Laboratories SDN BHD</p>
          <p>202201044579 (1490276-W)</p>
          <p>CIDB No. 0120230221-SL114191</p>
          <p>SPAN No. SPAN/EKS/(PT)/800-2B/2/23/133</p>
        </div>

        <div>
          <h3 className="text-[14px]  font-bold">Links</h3>
          <div className="flex flex-col text-[14px] ">
            <br />
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-[14px]  font-bold hidden md:block">Follow us</h3>
          <Button title={"ClickMe"} styleType="green" onClick={onClick}/>
        </div>

        <div>
          <h3 className="text-[14px] font-bold">Contact us</h3>
          <br />
          <p>63, Jalan TPP 1/1, Taman</p>
          <p>Perindustrian Puchong, </p>
          <p>47100 Puchong, Selangor</p>
          <br />
          <p>+6012 234 4444</p>
        </div>
      </div>

      <div className="text-center text-[14px] font-monstserrat pb-7">
        <p>2024 CONCRETOR Engineering and Laboratories Sdn Bhd © All Rights Reserved.</p>

      </div>
    </footer>
    // <footer className=" py-20 px-4 mx-auto bg-primary flex flex-col justify-center items-center text-white">
    //   <div className="flex gap-x-12 font-inter text-xs flex-col md:flex-row text-center gap-6">
    //     <Link href="/about">ABOUT</Link>
    //     <Link href="/menu">MENU</Link>
    //     <Link href="/events">EVENT</Link>
    //     <Link href="/festive">FESTIVE</Link>
    //     <Link href="/careers">CAREERS</Link>
    //     <Link href="/reservations">RESERVATIONS</Link>
    //     <Link href="/blog">BLOG</Link>
    //   </div>
    //   <div className="flex md:flex-row justify-between items-center  flex-col gap-10 md:gap-x-24 xl:gap-x-64 py-16">
    //     <div className="w-60 text-[10px] flex flex-col items-center text-center">
    //       <p>No. 1-1 (First Floor),</p>
    //       <p>Jalan Anggerik Vanilla BF 31/BF,</p>
    //       <p>Kota Kemuning, 40460 Shah Alam,</p>
    //       <p>Selangor</p>

    //       <p className="underline underline-offset-2">+6017 489 1189</p>
    //     </div>
    //     <div>
    //       <Link href="/">
    //         <Image src={FooterLogo} alt="footer-logo" />
    //       </Link>
    //     </div>
    //     <div className="flex items-center justify-center">
    //       <h4 className="font-biro text-4xl text-center">Home is a feeling.</h4>
    //     </div>
    //   </div>

    //   <div className="text-center font-inter text-[10px]">
    //     <p>
    //       Made with love and a drop of unicorn blood |{" "}
    //       <span className="underline underline-offset-2">Privacy</span> |{" "}
    //       <span className="underline underline-offset-2">Terms</span>
    //     </p>
    //   </div>
    // </footer>
  )
}

export default Footer
