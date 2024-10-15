"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"
import Card from "@/components/Card"
import { Spin } from "antd"
import { RightOutlined, LeftOutlined } from "@ant-design/icons"
export default function BlogPosts() {
  const [currentPage, setCurrentPage] = useState(1)
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const maxPostsPerPage = 5

  // Fetch blog posts
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(
        "https://say9s8oc.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22blog%22%5D%20%7C%20order(_updatedAt%20desc)%20%7B%0A%20%20title%2C%0A%20%20%22slug%22%3A%20slug.current%2C%0A%20%20tags%2C%0A%20%20%22image%22%3A%20%7B%0A%20%20%20%20%22url%22%3A%20image.asset-%3Eurl%2C%0A%20%20%20%20%22alt%22%3A%20image.alt%0A%20%20%7D%2C%0A%20%20summary%5B%5D%20%7B%0A%20%20%20%20...%20%2F%2F%20returns%20all%20the%20blocks%20inside%20the%20summary%20array%0A%20%20%7D%2C%0A%20%20content%5B%5D%20%7B%0A%20%20%20%20...%2C%0A%20%20%20%20_type%20%3D%3D%20%22image%22%20%3D%3E%20%7B%0A%20%20%20%20%20%20%22url%22%3A%20asset-%3Eurl%2C%0A%20%20%20%20%20%20%22alt%22%3A%20alt%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A"
      )
      setBlogPosts(res.data.result)
      setLoading(false)
    } catch (error) {
      console.error("Failed to fetch blog posts", error)
    }
  }

  // Call fetchBlogs when component mounts
  useEffect(() => {
    fetchBlogs()
  }, [])

  // Calculate total pages
  const totalPages = Math.ceil(blogPosts.length / maxPostsPerPage)

  // Get current posts for the current page
  const indexOfLastPost = currentPage * maxPostsPerPage
  const indexOfFirstPost = indexOfLastPost - maxPostsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

  // Pagination functions
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  // Render loading spinner while fetching data
  if (loading) {
    return <Spin spinning={loading} fullscreen />
  }

  return (
    <div className="flex flex-col items-center py-16">
      <h2 className="font-bold mb-16">Featured Blogs</h2>
      {currentPosts.map((post, index) => (
        <div key={index} className="mb-7 w-screen flex justify-center">
          <Card data={post} />
        </div>
      ))}

      {blogPosts.length > 1 && ( // Conditional rendering for pagination
        <div className="flex items-center space-x-2 mt-5">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 text-primary border-none rounded hover:text-primary/75 ${
              currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            <LeftOutlined />
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`px-4 py-2 text-black  ${
                  currentPage === number
                    ? "bg-white border-primary  border rounded"
                    : ""
                }`}
              >
                {number}
              </button>
            )
          )}

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 text-primary border-none rounded hover:text-primary/75 ${
              currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            <RightOutlined />
          </button>
        </div>
      )}
    </div>
  )
}
