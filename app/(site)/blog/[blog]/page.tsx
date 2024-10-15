"use client"

import { useState, useEffect } from "react"
import { PortableText } from "@portabletext/react"
// import { BlogPostModel, SingleBlogModel } from "@/types/Blog";
// import useLoadingStore from "@/store/loadingStore";
// import Loading from "@/components/Loading";
// import DescContainer from "@/components/StyleComponents/DescContainer";
import {
  MailOutlined,
  WhatsAppOutlined,
  ShareAltOutlined,
  FacebookFilled,
  LinkedinFilled,
} from "@ant-design/icons"
import Card from "@/components/Card"
import FacebookIcon from "../assets/facebook.svg"
import InstagramIcon from "../assets/instagram-icon.svg"
import LinkedinIcon from "../assets/linkedin-icon.svg"
import urlBuilder from "@sanity/image-url"
// import "./styles/SingleBlogStyles.scss";
import CustomImage from "@/components/CustomImage"
// import { fetchBlogPost, fetchSingleBlog } from "@/utils/request";
import Button from "@/components/Button"
import { Popover } from "antd"
import axios from "axios"
import { useParams } from "next/navigation"
import DescContainer from "@/components/DescContainer"
import { IBlogPost } from "@/types/Blogs"
import Link from "next/link"
import { useRouter } from "next/navigation"

const SingleBlog = () => {
  // const loading = useLoadingStore((state: any) => state.loading);
  // const setLoading = useLoadingStore((state: any) => state.setLoading);
  const [postData, setPostData] = useState<any>()
  const [blogs, setBlogs] = useState<any>(null)
  const [visible, setVisible] = useState(false)
  const [shuffledBlogs, setShuffledBlogs] = useState<any>([])
  const [allPosts, setAllPosts] = useState<any>([])
  const router = useRouter()
  const { blog } = useParams()

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://say9s8oc.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22blog%22%5D%20%7C%20order(_updatedAt%20desc)%20%7B%0A%20%20title%2C%0A%20%20%22slug%22%3A%20slug.current%2C%0A%20%20tags%2C%0A%20%20%22image%22%3A%20%7B%0A%20%20%20%20%22url%22%3A%20image.asset-%3Eurl%2C%0A%20%20%20%20%22alt%22%3A%20image.alt%0A%20%20%7D%2C%0A%20%20summary%5B%5D%20%7B%0A%20%20%20%20...%20%2F%2F%20returns%20all%20the%20blocks%20inside%20the%20summary%20array%0A%20%20%7D%2C%0A%20%20content%5B%5D%20%7B%0A%20%20%20%20...%2C%0A%20%20%20%20_type%20%3D%3D%20%22image%22%20%3D%3E%20%7B%0A%20%20%20%20%20%20%22url%22%3A%20asset-%3Eurl%2C%0A%20%20%20%20%20%20%22alt%22%3A%20alt%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A"
      )
      setAllPosts(response)
      const matchedBlog = response.data.result.find(
        (post: any) => post.slug === blog
      )

      if (matchedBlog) {
        setBlogs(blogs)
      } else {
        console.log("Blog not found")
      }
      setPostData(matchedBlog)
    } catch (error) {
      console.error("Error fetching carousel images:", error)
    } finally {
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  useEffect(() => {
    if (postData) {
      const filteredBlogs = allPosts.data.result.filter(
        (blog: any) => blog.slug !== postData.slug
      )

      const shuffledBlogs = shuffleArray(filteredBlogs)
      setShuffledBlogs(shuffledBlogs)
    }
  }, [postData])
  //Logic for recommend blogs

  //Filtered blog

  const shuffleArray = (array: any[]) => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  const url = window.location.href
  const title = postData?.title
  const FacebookShareUrl = `http://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`
  const WhatsappShareUrl = `https://api.whatsapp.com/send?text=${url}`
  const LinkedShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`

  const onLinkClick = (data: string) => {
    if (data == "fb") {
      router.push(FacebookShareUrl)
    } else if ((data = "li")) {
      router.push(LinkedShareUrl)
    } else {
      router.push(WhatsappShareUrl)
    }
  }

  const handleCopyLink = () => {
    const currentURL = window.location.href
    navigator.clipboard
      .writeText(currentURL)
      .then(() => {
        setVisible(true)
        setTimeout(() => {
          setVisible(false) // Hide the Popover after 5 seconds
        }, 5000)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const createdAt = postData?._createdAt
    ? new Date(postData._createdAt)
    : undefined
  const formattedDate = createdAt?.toLocaleDateString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

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
    <div>
      <div className="relative single-blog">
        <div className=" mx-auto max-w-[1920px] h-[60vh] overflow-hidden z-0">
          {postData && (
            <CustomImage Imgsrc={postData?.image.url} alt="Blog-hero" />
          )}
        </div>
        <div className="flex flex-col">
          <div className=" w-11/12 lg:w-3/5  -mt-40 mb-12 md:-mt-64 mx-auto bg-white border border-main rounded-t-lg overflow-hidden relative z-10 max-w-[900px]">
            <div className="p-6 pb-28 md:pb-40 pt-16 md:pt-24 sm:px-12 lg:px-24 ">
              <div className="text-[36px] max-w-[650px] mx-auto font-marcellus pb-8 text-center break-words text-main ">
                {postData?.title}
              </div>
              <div className="text-center font-marcellus text-sm mb-12">
                {formattedDate}
              </div>
              <DescContainer>
                <PortableText
                  value={postData?.content}
                  onMissingComponent={false}
                  components={serializer}
                />
              </DescContainer>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center h-32 text-center bg-white md:px-12 px-2 mx-auto -mt-28 z-30">
            <div className="font-marcellus text-2xl ">Share This Article</div>
            <div className="my-4 flex justify-center items-center gap-6 sm:gap-x-12">
              <a href={FacebookShareUrl} target="_blank">
                <FacebookFilled className="text-3xl text-primary cursor-pointer" />
              </a>
              <a href={LinkedShareUrl} target="_blank">
                <LinkedinFilled className="text-3xl text-primary cursor-pointer" />
              </a>
              <Popover content="Link copied!" open={visible} trigger="click">
                <ShareAltOutlined
                  className="text-3xl text-primary cursor-pointer"
                  onClick={handleCopyLink}
                />
              </Popover>
              <a href={WhatsappShareUrl} target="_blank">
                <WhatsAppOutlined className="text-3xl text-primary cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col mx-auto gap-y-12 items-center justify-center w-11/12 lg:w-4/5  my-16 max-w-[1200px] ">
            {shuffledBlogs.length === 0 ? (
              ""
            ) : (
              <div className="font-marcellus text-2xl">
                More Articles Like This
              </div>
            )}

            {shuffledBlogs.slice(0, 2).map((blog: any, index: number) => (
              <Card data={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
