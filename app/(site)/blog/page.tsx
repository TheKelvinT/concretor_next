"use client"
import React, { useEffect, useState } from "react"
import { blogPosts } from "../../data"
import Card from "@/components/Card"
import axios from "axios"

// type Props = {
//   blogPosts:Array<{
//     title: string;
//     summary: string;
//     image_url: string;
//   }>;
// }

export default function BlogPosts() {
  const [currentPage, setCurrentPage] = useState(1)
  const [blogPosts, setBlogPosts] = useState([])
  const maxPostsperPage = 5

  const totalPages = Math.ceil(blogPosts.length / maxPostsperPage)

  //To get current posts for the current page
  const indexOfLastPost = currentPage * maxPostsperPage
  const indexOfFirstPost = indexOfLastPost - maxPostsperPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const fetchPosts = async () => {
    const res = await axios.get(
      "https://say9s8oc.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22blog%22%5D%7B%0A%20%20title%2C%0A%20%20%20%20slug%2C%0A%20%20summary%0A%7D"
    )

    setBlogPosts(res.data.result)
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  //To handle previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  //To handle next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className="flex flex-col items-center">
      {blogPosts.map((post, index) => (
        <div key={index} className="mb-7">
          <Card data={post} />
        </div>
      ))}
    </div>
  )
}
