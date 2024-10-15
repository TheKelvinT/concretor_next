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
import { useState, useEffect } from "react"
import { IHomePageContent } from "@/types/Home"
import { Spin } from "antd"
import { IBlogPost } from "@/types/Blogs"
import DescContainer from "@/components/DescContainer"
import { PortableText } from "@portabletext/react"
import urlBuilder from "@sanity/image-url"

export default function Home() {
  const router = useRouter()
  const [data, setData] = useState<IHomePageContent>()
  const [blogPosts, setBlogPosts] = useState<IBlogPost[]>([])
  const [loading, setLoading] = useState(false)

  const onClickContactUs = () => {
    if (data) {
      if (data.homeSectionOne?.callToActionLeft?.routes) {
        router.push(data.homeSectionOne.callToActionLeft.routes)
      } else if (data.homeSectionTwo?.callToActionLeft?.routes) {
        router.push(data.homeSectionTwo.callToActionLeft.routes)
      } else {
        router.push("#") // Fallback in case routes are undefined
      }
    }
  }

  // const onClickContactUs = () => {
  //   if (data) {
  //     router.push(data.homeSectionOne.callToActionLeft.routes)
  //   }
  // }

  // const onClickAbout = () => {
  //   if (data) {
  //     router.push(data.homeSectionOne.callToActionRight.routes)
  //   }
  // }

  const onClickAbout = () => {
    if (data) {
      if (data.homeSectionOne) {
        router.push(data.homeSectionOne.callToActionRight.routes)
      } else if (data.homeSectionTwo) {
        router.push(data.homeSectionTwo.callToActionRight.routes)
      }
    }
  }

  const onClickBlog = (data: IBlogPost) => {
    router.push(`/blog/${data.slug}`)
  }
  const fetchData = async () => {
    const res = await axios.get(
      "https://say9s8oc.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22homeContent%22%5D%7B%0A%20%20%22homeSectionOne%22%3A%20homeSectionOne%7B%0A%20%20%20%20%22image%22%3A%20banner.asset-%3Eurl%2C%0A%20%20%20%20title%2C%0A%20%20%20%20description%2C%0A%20%20%20%20%20%20callToActionLeft%20-%3E%20%7B%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%20%20%20%0A%20%20%20%20%20callToActionRight%20-%3E%20%7B%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%20%20%22homeSectionTwo%22%3A%20homeSectionTwo%7B%0A%20%20%20%20%22image%22%3A%20image.asset-%3Eurl%2C%0A%20%20%20%20title%2C%0A%20%20%20%20description%2C%0A%20%20%20%20%20callToActionLeft%20-%3E%20%7B%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%20%20%20%0A%20%20%20%20%20callToActionRight%20-%3E%20%7B%0A%20%20%20%20%20%20buttonText%2C%0A%20%20%20%20%20%20routes%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%20%20%22homeSectionThree%22%3A%20homeSectionThree%7B%0A%20%20%20%20%22imageLeft%22%3A%20imageleft.asset-%3Eurl%2C%0A%20%20%20%20titleLeft%2C%0A%20%20%20%20descriptionLeft%2C%0A%20%20%20%20%22imageMiddle%22%3A%20imageMiddle.asset-%3Eurl%2C%0A%20%20%20%20titleMiddle%2C%0A%20%20%20%20descriptionMiddle%2C%0A%20%20%20%20%22imageRight%22%3A%20imageRight.asset-%3Eurl%2C%0A%20%20%20%20titleRight%2C%0A%20%20%20%20descriptionRight%0A%20%20%7D%0A%7D"
    )
    if (res) {
      console.log(res.data.result[0])
      setData(res.data.result[0])
      setLoading(false)
    }
  }

  const fetchBlogs = async () => {
    const res = await axios.get(
      "https://say9s8oc.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22blog%22%5D%20%7C%20order(_updatedAt%20desc)%20%7B%0A%20%20title%2C%0A%20%20%22slug%22%3A%20slug.current%2C%0A%20%20tags%2C%0A%20%20%22image%22%3A%20%7B%0A%20%20%20%20%22url%22%3A%20image.asset-%3Eurl%2C%0A%20%20%20%20%22alt%22%3A%20image.alt%0A%20%20%7D%2C%0A%20%20summary%5B%5D%20%7B%0A%20%20%20%20...%20%2F%2F%20returns%20all%20the%20blocks%20inside%20the%20summary%20array%0A%20%20%7D%2C%0A%20%20content%5B%5D%20%7B%0A%20%20%20%20...%2C%0A%20%20%20%20_type%20%3D%3D%20%22image%22%20%3D%3E%20%7B%0A%20%20%20%20%20%20%22url%22%3A%20asset-%3Eurl%2C%0A%20%20%20%20%20%20%22alt%22%3A%20alt%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A"
    )
    if (res) {
      const firstThreeItems = res.data.result.slice(0, 3)
      setBlogPosts(firstThreeItems)
      setLoading(false)
    }
    console.log(res.data.result)
  }

  useEffect(() => {
    if (!data) {
      setLoading(true)
      fetchData()
      fetchBlogs()
    }
    console.log(data)
  }, [data])

  const urlFor = (source: any) =>
    urlBuilder({ projectId: "say9s8oc", dataset: "production" }).image(source)

  const serializer = {
    types: {
      image: (props: { value: { asset?: any; alt?: string } }) => {
        if (!props.value || !props.value.asset) {
          return null // Return null or a placeholder image if the source is undefined or doesn't have the expected properties
        }

        const { asset, alt } = props.value
        return (
          <figure>
            <img src={urlFor(asset)?.width(1200).url()} alt={alt} />
          </figure>
        )
      },
    },
  }
  return (
    <>
      {data ? (
        <div>
          <div className="relative">
            {data && (
              <div className="h-[70vh]">
                <img
                  src={data?.homeSectionOne?.image}
                  alt="Hero image"
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 px-5">
              <div className="text-white text-center">
                <h2 className="font-bold drop-shadow-md">
                  {data?.homeSectionOne?.title}
                </h2>
                <p className="text-base">
                  {data?.homeSectionOne?.description?.[0]?.children?.[0]?.text}
                </p>
                <div className="flex flex-col gap-4 md:flex-row justify-center mt-4">
                  {data && (
                    <Button
                      title={
                        data?.homeSectionOne?.callToActionLeft?.buttonText || ""
                      }
                      onClick={onClickContactUs}
                    />
                  )}
                  {data && (
                    <Button
                      title={
                        data?.homeSectionOne?.callToActionRight?.buttonText ||
                        ""
                      }
                      styleType="white"
                      onClick={onClickAbout}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-5 py-16 md:px-16 flex justify-center ">
            <div className="max-w-[1440px] flex gap-10 items-center justify-center">
              <div className="md:basis-1/2 ">
                <h2 className="font-bold mb-4 text-center md:text-left w-full">
                  {data?.homeSectionTwo?.title}
                </h2>
                <p className="text-center md:text-left w-full">
                  {data?.homeSectionTwo?.description?.[0]?.children?.[0]?.text}
                </p>

                <div className="flex flex-col gap-4 md:flex-row justify-center md:justify-start mt-4">
                  {data && (
                    <Button
                      title={
                        data?.homeSectionTwo?.callToActionLeft?.buttonText || ""
                      }
                      onClick={onClickContactUs}
                    />
                  )}
                  {data && (
                    <Button
                      title={
                        data?.homeSectionTwo?.callToActionRight?.buttonText ||
                        ""
                      }
                      styleType="white"
                      onClick={onClickAbout}
                    />
                  )}
                </div>
              </div>

              <div className="hidden md:block basis-1/2 h-[425px]">
                <img
                  src={data?.homeSectionTwo?.image}
                  alt="Construction image"
                  className="object-cover rounded-lg h-full"
                />
              </div>
            </div>
          </div>

          <div className="bg-primary flex flex-col md:flex-row h-auto md:h-[347px] items-center justify-center gap-8 md:gap-44 px-5 py-16 md:px-16">
            <div className="flex flex-col items-center">
              <div className="relative w-[150px] h-[150px] bg-white rounded-full flex items-center justify-center">
                <div className=" w-[100px] h-[100px] ">
                  <img
                    src={data?.homeSectionThree?.imageLeft}
                    alt="Crane image"
                    className="object-fit"
                  />
                </div>
              </div>

              <div className="text-center text-white mt-4">
                <p className="text-4xl">{data?.homeSectionThree?.titleLeft}</p>
                <p className="text-base">
                  {data?.homeSectionThree?.descriptionLeft}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-[150px] h-[150px] bg-white rounded-full flex items-center justify-center">
                <div className=" w-[100px] h-[100px] ">
                  <img
                    src={data?.homeSectionThree?.imageMiddle}
                    alt="Crane image"
                    className="object-fit"
                  />
                </div>
              </div>

              <div className="text-center text-white mt-4">
                <p className="text-4xl">
                  {data?.homeSectionThree?.titleMiddle}
                </p>
                <p className="text-base">
                  {data?.homeSectionThree?.descriptionMiddle}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-[150px] h-[150px] bg-white rounded-full flex items-center justify-center">
                <div className=" w-[100px] h-[100px] ">
                  <img
                    src={data?.homeSectionThree?.imageRight}
                    alt="Crane image"
                    className="object-fit"
                  />
                </div>
              </div>

              <div className="text-center text-white mt-4">
                <p className="text-4xl">{data?.homeSectionThree?.titleRight}</p>
                <p className="text-base">
                  {data?.homeSectionThree?.descriptionRight}
                </p>
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
                  <p className="text-white font-bold text-xl">
                    General Renovation
                  </p>
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
                  <p className="text-white font-bold text-xl">
                    Civil Engineering
                  </p>
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
                  <p className="text-white font-bold text-xl">
                    Project Management
                  </p>
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
              {blogPosts.map((post, index) => (
                <div className="max-w-[400px]">
                  <div className="h-[300px] mt-2.5">
                    <img
                      src={post.image.url}
                      className="mb-2.5 object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-row gap-x-7 mb-2.5 mt-2.5 text-[#038885]">
                    {post.tags && post.tags.map((tag) => <p>{tag}</p>)}
                  </div>
                  <div
                    className="text-2xl font-bold mb-5 cursor-pointer"
                    onClick={() => onClickBlog(post)}
                  >
                    {post.title}
                  </div>

                  <DescContainer>
                    <div className="truncate-text h-20">
                      <PortableText
                        value={post?.content ?? []}
                        onMissingComponent={false}
                        components={serializer}
                      />
                    </div>
                  </DescContainer>

                  <div
                    className="text-[#038885] mt-2 cursor-pointer"
                    onClick={() => onClickBlog(post)}
                  >
                    Read More
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#EAE7E7] flex flex-col md:flex-row w-full h-[254px] md:h-[164px] items-center justify-center gap-y-4 md:gap-x-24 px-5 md:px-16">
            <p className="text-lg font-bold text-center">
              Need expert solutions for your next project?
            </p>
            <Button title={"Contact Us"} onClick={onClickContactUs} />
          </div>
        </div>
      ) : (
        <Spin spinning={loading} fullscreen />
      )}
    </>
  )
}
