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
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 px-5">
          <div className="text-white text-center">
            <h2 className="font-bold drop-shadow-md">
              Transforming Spaces with <br /> Expert Renovation Solutions
            </h2>
            <p className="text-base">
              CONCRETOR is your trusted partner for all your renovation and
              construction needs. With <br /> our expertise and attention to
              detail, we deliver exceptional results that exceed <br />
              expectations.
            </p>
            <div className="flex flex-col gap-4 md:flex-row justify-center mt-4">
              <Button title={"Contact Us"} onClick={onClickContactUs} />
              <Button
                title={"Learn More"}
                styleType="white"
                onClick={onClickContactUs}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-5 py-16 md:px-16 flex justify-center ">
        <div className="max-w-[1440px] flex gap-10 items-center justify-center">
          <div className="md:basis-1/2 ">
            <h2 className="font-bold mb-4 text-center md:text-left w-full">
              Solving Construction and Renovation Challenges with Expertise
            </h2>
            <p className="text-center md:text-left w-full">
              At CONCRETOR, we specialize in providing innovative solutions to
              construction and renovation challenges. With our expertise and
              commitment to excellence, we are dedicated to delivering
              high-quality results that exceed our clients&apos; expectations.
              Whether it&apos;s a small renovation project or a large-scale
              construction endeavor, we have the knowledge and skills to tackle
              any challenge. Our unique approach ensures that every project is
              completed efficiently, on time, and within budget.
            </p>

            <div className="flex flex-col gap-4 md:flex-row justify-center mt-4">
              <Button title={"Contact Us"} onClick={onClickContactUs} />
              <Button title={"Learn More"} onClick={onClickContactUs} />
            </div>
          </div>

          <div className="hidden md:block basis-1/2 h-[425px]">
            <Image
              src={construction}
              alt="Construction image"
              className="object-cover rounded-lg h-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-primary flex flex-col md:flex-row h-auto md:h-[347px] items-center justify-center gap-8 md:gap-44 px-5 py-16 md:px-16">
        <div className="flex flex-col items-center">
          <div className="relative w-[150px] h-[150px]">
            <div className="absolute w-[150px] h-[150px] bg-white rounded-full flex items-center justify-center">
              <Image
                src={crane}
                alt="Crane image"
                width={100}
                height={100}
                className="object-cover rounded-full"
              />
            </div>
          </div>

          <div className="text-center text-white mt-4">
            <p className="text-6xl">10+</p>
            <p className="text-base">Years Experience</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-[150px] h-[150px]">
            <div className="absolute w-[150px] h-[150px] bg-white rounded-full flex items-center justify-center">
              <Image
                src={image}
                alt="Hand image"
                width={100}
                height={100}
                className="object-cover rounded-full"
              />
            </div>
          </div>

          <div className="text-center text-white mt-4">
            <p className="text-6xl">20+</p>
            <p className="text-base">Projects Delivered</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-[150px] h-[150px]">
            <div className="absolute w-[150px] h-[150px] bg-white rounded-full flex items-center justify-center">
              <Image
                src={diversity}
                alt="Diversity image"
                width={100}
                height={100}
                className="object-cover rounded-full"
              />
            </div>
          </div>

          <div className="text-center text-white mt-4">
            <p className="text-6xl">26+</p>
            <p className="text-base">Satisfied Customers</p>
          </div>
        </div>
      </div>

      {/* "Our services" section */}
      <div
        id="services"
        className="flex flex-col justify-center items-center px-5 py-16 md:px-16 w-full max-w-[1440px] mx-auto"
      >
        <h2 className="font-bold mb-10">Our Services</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:grid-rows-2 w-full ">
          <div className="relative flex justify-center items-center aspect-[4/3]">
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

          <div className="relative flex justify-center items-center aspect-[4/3]">
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

          <div className="relative flex justify-center items-center aspect-[4/3]">
            <Image
              src={services1}
              alt="Services1 image"
              width={300}
              height={200}
              className="w-full h-full object-cover rounded-[16px]"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 rounded-[16px]">
              <p className="text-white font-bold text-xl">
                Structural Reparing
              </p>
            </div>
          </div>

          <div className="relative flex justify-center items-center aspect-[4/3]">
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

          <div className="relative flex justify-center items-center aspect-[4/3]">
            <Image
              src={services6}
              alt="Services6 image"
              width={300}
              height={200}
              className="w-full h-full object-cover rounded-[16px]"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 rounded-[16px]">
              <p className="text-white font-bold text-xl">
                Building Assessment
              </p>
            </div>
          </div>

          <div className="relative flex justify-center items-center aspect-[4/3]">
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

          <div className="relative flex justify-center items-center aspect-[4/3]">
            <Image
              src={services5}
              alt="Services5 image"
              width={300}
              height={200}
              className="w-full h-full object-cover rounded-[16px]"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 rounded-[16px]">
              <p className="text-white font-bold text-xl text-center">
                Interior and Exterior <br /> Refurbishing
              </p>
            </div>
          </div>

          <div className="relative flex justify-center items-center aspect-[4/3]">
            <Image
              src={services3}
              alt="Services3 image"
              width={300}
              height={200}
              className="w-full h-full object-cover rounded-[16px]"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 rounded-[16px]">
              <p className="text-white font-bold text-xl text-center">
                Design and Build <br /> Contractor
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg mt-10 mb-4 text-center">
          Need expert solutions for your next project? Let&apos;s discuss.
        </p>
        <Button title={"Contact Us"} onClick={onClickContactUs} />
      </div>

      {/* Latest Articles section */}

      <div className="flex flex-col justify-center items-center px-5 py-16 md:px-16 ">
        <h2 className="font-bold mb-10 text-center">Latest Articles</h2>
        <div className="flex gap-12 justify-center flex-wrap">
          <div className="max-w-[400px]">
            <div>
              <Image
                src={heroimg}
                alt="hero image"
                height={300}
                className="mb-2.5 object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-row gap-x-7 mb-2.5 text-[#038885]">
              <p>Innovation</p>
              <p>Project Management</p>
            </div>
            <div className="">
              <p className="text-2xl font-bold mb-7">
                Experience the Difference <br /> with CONCRETOR , you will
                <br /> not regret it
              </p>
              <p className="mb-4">
                At CONCRETOR, we pride ourselves on delivering quality
                craftsmanship, completing projects on time, and ensuring
                customer satisfaction. With our <br />
                expertise and dedication, we guarantee exception...
              </p>
            </div>
            <a href="" className="text-[#038885]">
              Read More
            </a>
          </div>

          <div className="max-w-[400px]">
            <div>
              <Image
                src={heroimg}
                alt="hero image"
                height={300}
                className="mb-2.5 object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-row gap-x-7 mb-2.5 text-[#038885]">
              <p>Innovation</p>
              <p>Project Management</p>
            </div>
            <div className="">
              <p className="text-2xl font-bold mb-7">
                Experience the Difference <br /> with CONCRETOR , you will
                <br /> not regret it
              </p>
              <p className="mb-4">
                At CONCRETOR, we pride ourselves on delivering quality
                craftsmanship, completing projects on time, and ensuring
                customer satisfaction. With our <br />
                expertise and dedication, we guarantee exception...
              </p>
            </div>
            <a href="" className="text-[#038885]">
              Read More
            </a>
          </div>

          <div className="max-w-[400px]">
            <div>
              <Image
                src={heroimg}
                alt="hero image"
                height={300}
                className="mb-2.5 object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-row gap-x-7 mb-2.5 text-[#038885]">
              <p>Innovation</p>
              <p>Project Management</p>
            </div>
            <div className="">
              <p className="text-2xl font-bold mb-7">
                Experience the Difference <br /> with CONCRETOR , you will
                <br /> not regret it
              </p>
              <p className="mb-4">
                At CONCRETOR, we pride ourselves on delivering quality
                craftsmanship, completing projects on time, and ensuring
                customer satisfaction. With our <br />
                expertise and dedication, we guarantee exception...
              </p>
            </div>
            <a href="" className="text-[#038885]">
              Read More
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#EAE7E7] flex flex-col md:flex-row w-full h-[254px] md:h-[164px] items-center justify-center gap-y-4 md:gap-x-24 px-5 md:px-16">
        <p className="text-lg font-bold text-center">
          Need expert solutions for your next project?
        </p>
        <Button title={"Contact Us"} onClick={onClickContactUs} />
      </div>
    </div>
  )
}
