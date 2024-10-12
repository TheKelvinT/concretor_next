"use client"

import React, {useEffect, useState} from "react"
import Image from "next/image"
import Link from "next/link"
import aboutusbanner from "@/assets/aboutusbanner.jpeg"
import Button from "@/components/Button"
import { useRouter} from "next/navigation"
import services1 from "@/assets/services1.jpg"
import services2 from "@/assets/services2.jpg"
import services3 from "@/assets/services3.jpg"
import services4 from "@/assets/services4.jpg"
import services5 from "@/assets/services5.jpg"
import services6 from "@/assets/services6.jpg"
import services7 from "@/assets/services7.jpg"
import services8 from "@/assets/services8.jpg"
import axios from "axios"

type Props = {}

export default function About(props: Props) {
  const router = useRouter()
  const [data, setData] = useState()

  const onClickContactUs = () => {
    router.push("/contact")
  }

  const fetchData = async () => {
    const res = await axios.get(
      "https://say9s8oc.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22aboutContent%22%5D%20%7B%0A%20%20_id%2C%0A%20%20_createdAt%2C%0A%20%20%22aboutSectionOne%22%3A%20aboutSectionOne%20%7B%0A%20%20%20%20title%2C%0A%20%20%20%20description%5B%5D%7B%0A%20%20%20%20%20%20...%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22imageUrl%22%3A%20banner.asset-%3Eurl%2C%0A%20%20%20%20%22callToActionText%22%3A%20callToAction-%3EbuttonText%0A%20%20%7D%2C%0A%20%20%22aboutSectionTwo%22%3A%20aboutSectionTwo%20%7B%0A%20%20%20%20titleTop%2C%0A%20%20%20%20descriptionTop%5B%5D%7B%0A%20%20%20%20%20%20...%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22imageTopUrl%22%3A%20imageTop.asset-%3Eurl%2C%0A%20%20%20%20titleBottom%2C%0A%20%20%20%20descriptionBottom%5B%5D%7B%0A%20%20%20%20%20%20...%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22imageBottomUrl%22%3A%20imageBottom.asset-%3Eurl%0A%20%20%7D%2C%0A%20%20%22aboutSectionThree%22%3A%20aboutSectionThree%20%7B%0A%20%20%20%20titleLeft%2C%0A%20%20%20%20descriptionLeft%5B%5D%7B%0A%20%20%20%20%20%20...%0A%20%20%20%20%7D%2C%0A%20%20%20%20titleRight%2C%0A%20%20%20%20descriptionRight%5B%5D%7B%0A%20%20%20%20%20%20...%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
    )
      if(res){ 
      setData(res.data.result[0])
    }
    console.log(res.data.result)
  }

  useEffect(() => {
    if (!data){
      fetchData()
    }
    console.log(data)
  }, [data])

  return (
    <div>
      <div className="relative">
        <div className="h-[70vh]">
          <img
            src={data?.aboutSectionOne?.imageUrl}
            alt="About Us Banner Image"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 md:px-0">
              <p className="text-5xl md:text-6xl font-merriweather text-[#FF5757] mb-6">
              {data?.aboutSectionOne?.title}
              </p>
              <p className="text-4xl mb-6">{data?.aboutSectionOne?.description?.[0]?.children?.[0]?.text}</p>
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
                {data?.aboutSectionTwo?.titleTop}
              </h2>
              <p>
              {data?.aboutSectionTwo?.descriptionTop?.[0]?.children?.[0]?.text}
              </p>
            </div>
            <div className="md:w-1/2 aspect-[16/9] overflow-hidden  order-1 md:order-2">
              <img
                src={data?.aboutSectionTwo?.imageTopUrl}
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
              {data?.aboutSectionTwo?.titleBottom}
              </h2>
              <p>
                {data?.aboutSectionTwo?.descriptionBottom?.[0]?.children?.[0]?.text}
              </p>
            </div>
            <div className="md:w-1/2 aspect-[16/9] overflow-hidden  order-2 md:order-1">
              <img
                src={data?.aboutSectionTwo?.imageBottomUrl}
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

      <div className="max-w-[1440px] flex flex-col md:flex-row items-center justify-center gap-y-8 md:gap-y-0 md:gap-x-10 mx-4 md:mx-0 mb-16 px-16">
        <div className="md:w-1/2">
          <h2 className="text-[#FF5757] font-bold text-3xl">{data?.aboutSectionThree?.titleLeft}</h2>
          <p>
            {data?.aboutSectionThree?.descriptionLeft?.[0]?.children?.[0]?.text}
          </p>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-[#FF5757] font-bold text-3xl">{data?.aboutSectionThree?.titleRight}</h2>
          <p>
            {data?.aboutSectionThree?.descriptionRight?.[0]?.children?.[0]?.text}
          </p>
        </div>
      </div>
    </div>
  )
}
