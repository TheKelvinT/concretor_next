"use client"
import { useState } from "react"
import Card from "@/components/Card"
import { RightOutlined, LeftOutlined } from "@ant-design/icons"

const BlogPosts = ({ blogPosts, maxPostsPerPage }: any) => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(blogPosts.length / maxPostsPerPage)

  const indexOfLastPost = currentPage * maxPostsPerPage
  const indexOfFirstPost = indexOfLastPost - maxPostsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

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

  return (
    <div className="flex flex-col items-center">
      {currentPosts.map((post: any, index: number) => (
        <div key={index} className="mb-7 w-screen flex justify-center">
          <Card data={post} />
        </div>
      ))}

      {blogPosts.length > 1 && (
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
                className={`px-4 py-2 text-black ${
                  currentPage === number
                    ? "bg-white border-primary border rounded"
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

export default BlogPosts
