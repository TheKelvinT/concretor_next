"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import aboutusbanner from "@/assets/aboutusbanner.jpeg"
import Button from "@/components/Button"
import { useRouter } from "next/navigation"
import services1 from "@/assets/services1.jpg"
import services2 from "@/assets/services2.jpg"
import services3 from "@/assets/services3.jpg"
import services4 from "@/assets/services4.jpg"
import services5 from "@/assets/services5.jpg"
import services6 from "@/assets/services6.jpg"
import services7 from "@/assets/services7.jpg"
import services8 from "@/assets/services8.jpg"

type Props = {}

export default async function About(props: Props) {
  const router = useRouter()

  const onClickContactUs = () => {
    router.push("/contact")
  }

  return (
    <div>
      <div className="relative">
        <div className="h-[70vh]">
          <Image
            src={aboutusbanner}
            alt="About Us Banner Image"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 md:px-0">
              <p className="text-5xl md:text-6xl font-merriweather text-[#FF5757] mb-12">
                CONCRETOR
              </p>
              <p className="text-4xl">Your building and </p>
              <p className="text-4xl mb-12">infrastructure contractor</p>
              <Button title={"Contact Us"} onClick={onClickContactUs} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-4 md:mx-16 my-16">
        <div className="w-full flex justify-center ">
          <div className="max-w-[1440px] flex flex-col md:flex-row items-center justify-center pb-12 md:gap-12">
            <div className="md:w-1/2  order-2 md:order-1">
              <h2 className="text-[#FF5757] font-bold mb-4 mt-2">
                Licensed Contractor
              </h2>
              <p>
                With our experienced personnel and as a licensed contractor by
                CIDB and SPAN, we are equipped to deliver exceptional building
                and infrastructure solutions. From small to medium projects, our
                professional team is committed to excellence, ensuring a
                seamless journey from concept to completion
              </p>
            </div>
            <div className="md:w-1/2 aspect-[16/9] overflow-hidden  order-1 md:order-2">
              <Image
                src={aboutusbanner}
                alt="About Us Banner Image"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center ">
          <div className="max-w-[1440px] flex flex-col md:flex-row items-center justify-center pb-12 md:gap-12">
            <div className="md:w-1/2   order-1 md:order-2">
              <h2 className="text-[#FF5757] font-bold mb-4 mt-2">
                Quality & Durability
              </h2>
              <p>
                At CONCRETOR, we also take a principled approach to structural
                repair, prioritizing quality and durability. Our team of experts
                uses proven methods and techniques to effectively control and
                extend the service life of your building by minimizing the
                development of defects in the structure.
              </p>
            </div>
            <div className="md:w-1/2 aspect-[16/9] overflow-hidden  order-2 md:order-1">
              <Image
                src={aboutusbanner}
                alt="About Us Banner Image"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        id="services"
        className="flex flex-col justify-center items-center px-5 pb-16 md:px-16 w-full max-w-[1440px] mx-auto"
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
          Need expert solutions for your next project? Let's discuss.
        </p>
        <Button title={"Contact Us"} onClick={onClickContactUs} />
      </div>

      <div className="max-w-[1440px] flex flex-col md:flex-row  items-center justify-center gap-y-8 md:gap-y-0 md:gap-x-10 mx-4 md:mx-0 mb-16 ">
        <div className="md:w-1/2">
          <h2 className="text-[#FF5757] font-bold text-3xl">Our Vision</h2>
          <p>
            To be a company recognised as an expert of constructing, repair
            engineering and testing in all reinforced concrete related along
            constructions.
          </p>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-[#FF5757] font-bold text-3xl">Our Mission</h2>
          <p>
            To lengthen lifespan of reinforced concrete through our services to
            meet the condition of projects by combination of experience and
            innovation.
          </p>
        </div>
      </div>
    </div>
  )
}
