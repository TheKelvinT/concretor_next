"use client"

import Link from "next/link"
import axios from "axios"
import Image from "next/image"
import heroimg from "@/assets/hero-img.png"
import construction from "@/assets/construction.png"
import { useRouter } from "next/navigation"
import Button from "@/components/Button"
import crane from "@/assets/crane.png"
import image from "@/assets/image.png"
import diversity from "@/assets/diversity.png"
import services1 from "@/assets/services1.jpg"
import services2 from "@/assets/services2.jpg"
import services3 from "@/assets/services3.jpg"
import services4 from "@/assets/services4.jpg"
import services5 from "@/assets/services5.jpg"
import services6 from "@/assets/services6.jpg"
import services7 from "@/assets/services7.jpg"
import services8 from "@/assets/services8.jpg"

export default function Home() {
  const router = useRouter()

  const onClickContactUs = () => {
    router.push("/contact")
  }

  return (
    <div>
      <div className="relative">
        <div className="h-[70vh]">
          <Image
            src={heroimg}
            alt="Hero image"
            className="object-cover h-full"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="text-white text-center">
            <h2 className="font-bold">
              Transforming Spaces with <br /> Expert Renovation Solutions
            </h2>
            <p className="text-base">
              CONCRETOR is your trusted partner for all your renovation and
              construction needs. With <br /> our expertise and attention to
              detail, we deliver exceptional results that exceed <br />{" "}
              expectations.
            </p>
            <div className="gap-4 flex justify-center  mt-4">
              <Button title={"Contact Us"} onClick={onClickContactUs} />
              <Button title={"Contact Us"} onClick={onClickContactUs} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-2 md:items-center py-16 px-16">
        <div className="flex flex-col justify-center items-center md:items-start">
          <h2 className="font-bold mb-4 text-center md:text-left">
            Solving Construction and <br /> Renovation Challenges with <br />{" "}
            Expertise
          </h2>
          <p className="text-center md:text-left">
            At CONCRETOR, we specialize in providing innovative solutions to
            <br /> construction and renovation challenges. With our expertise
            and
            <br /> commitment to excellence, we are dedicated to delivering
            high-
            <br /> quality results that exceed our clients' expectations.
            Whether it's a
            <br /> small renovation project or a large-scale construction
            endeavor, we
            <br /> have the knowledge and skills to tackle any challenge. Our
            unique
            <br /> approach ensures that every project is completed efficiently,
            on time,
            <br /> and within budget.
          </p>
        </div>

        <div className="flex justify-center hidden md:block">
          <Image
            src={construction}
            alt="Construction image"
            className="w-[689px] h-[430px] rounded-lg"
          />
        </div>
      </div>

      <div className = "bg-primary flex flex-col items-center justify-center md:flex-row  h-[347px] max-w-[1440px] gap-44 py-16 px-16">
        <div className = "flex flex-col items-center">
            <div className = "relative w-[150px] h-[150px]">
                <div className = "absolute w-[150px] h-[150px] bg-white rounded-full flex items-center justify-center">
                    <Image
                        src = {crane}
                        alt = "Crane image"
                        width = {100}
                        height = {100}
                        className = "object-cover rounded-full"
                    />
                </div>
            </div>

            <div className = "text-center text-white mt-4">
                <p className = "text-6xl">10+</p>
                <p className = "text-base">Years Experience</p>
            </div>
            
        </div>

        <div className = "flex flex-col items-center">
            <div className = "relative w-[150px] h-[150px]">
                <div className = "absolute w-[150px] h-[150px] bg-white rounded-full flex items-center justify-center">
                    <Image
                        src = {image}
                        alt = "Crane image"
                        width = {100}
                        height = {100}
                        className = "object-cover rounded-full"
                    />
                </div>
            </div>

            <div className = "text-center text-white mt-4">
                <p className = "text-6xl">20+</p>
                <p className = "text-base">Projects Delivered</p>
            </div>
        </div>

        <div className = "flex flex-col items-center">
            <div className = "relative w-[150px] h-[150px]">
                <div className = "absolute w-[150px] h-[150px] bg-white rounded-full flex items-center justify-center">
                    <Image
                        src = {diversity}
                        alt = "Crane image"
                        width = {100}
                        height = {100}
                        className = "object-cover rounded-full"
                    />
                </div>
            </div>

            <div className = "text-center text-white mt-4">
                <p className = "text-6xl">26+</p>
                <p className = "text-base">Satisfied Customers</p>
            </div>
        </div>
      </div>

      {/* "Our services" section */}
      <div className = "flex flex-col justify-center items-center py-16 px-16">

        <h2 className = "font-bold mb-10">Our Services</h2>

        <div className = "grid grid-cols-4 grid-rows-2 gap-8">
            <div className = "relative flex justify-center items-center">
                <Image
                    src={services7}
                    alt="Services7 image"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover rounded-[16px]"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 rounded-[16px]">
                    <p className="text-white font-bold text-xl">General Renovation</p>
                </div>
            </div>

            <div className = "relative flex justify-center items-center">
                <Image
                    src={services2}
                    alt="Services2 image"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover rounded-[16px]"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 rounded-[16px]">
                    <p className="text-white font-bold text-xl">Civil Engineering</p>
                </div>
            </div>

            <div className = "relative flex justify-center items-center">
                <Image
                    src={services1}
                    alt="Services1 image"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover rounded-[16px]"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 rounded-[16px]">
                    <p className="text-white font-bold text-xl">Structural Reparing</p>
                </div>
            </div>

            <div className = "relative flex justify-center items-center">
                <Image
                    src={services8}
                    alt="Services8 image"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover rounded-[16px]"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 rounded-[16px]">
                    <p className="text-white font-bold text-xl">Waterproofing</p>
                </div>
            </div>

            <div className = "relative flex justify-center items-center">
                <Image
                    src={services6}
                    alt="Services6 image"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover rounded-[16px]"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 rounded-[16px]">
                    <p className="text-white font-bold text-xl">Building Assessment</p>
                </div>
            </div>

            <div className = "relative flex justify-center items-center">
                <Image
                    src={services4}
                    alt="Services4 image"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover rounded-[16px]"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 rounded-[16px]">
                    <p className="text-white font-bold text-xl">Project Management</p>
                </div>
            </div>

            <div className = "relative flex justify-center items-center">
                <Image
                    src={services5}
                    alt="Services5 image"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover rounded-[16px]"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 rounded-[16px]">
                    <p className="text-white font-bold text-xl text-center">Interior and Exterior <br/> Refurbishing</p>
                </div>
            </div>

            <div className = "relative flex justify-center items-center">
                <Image
                    src={services3}
                    alt="Services3 image"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover rounded-[16px]"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 rounded-[16px]">
                    <p className="text-white font-bold text-xl text-center">Design and Build <br/> Contractor</p>
                </div>
            </div>
        </div>

        <p className = "text-lg mt-10">Need expert solutions for your next project? Let's discuss.</p>

      </div>
    </div>
  )
}
