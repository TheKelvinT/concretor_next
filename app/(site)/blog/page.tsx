"use client"
import React, {useState} from "react"
import { blogPosts } from '../../data';
import Card from "@/components/Card"

// type Props = {
//   blogPosts:Array<{
//     title: string;
//     summary: string;
//     image_url: string;
//   }>;
// }

export default function BlogPosts() {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPostsperPage = 5;

  const totalPages = Math.ceil(blogPosts.length/maxPostsperPage);

  //To get current posts for the current page
  const indexOfLastPost = currentPage * maxPostsperPage;
  const indexOfFirstPost = indexOfLastPost - maxPostsperPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
      {currentPosts.map((post, index) => (
        <div key = {index} className = "mb-7">
          <Card 
            data = {post}
          />
        </div>
      ))}

      <div className="flex items-center space-x-2 mt-5">
        {/* Previous Page Button */}
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 ${
            currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          &lt;
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-4 py-2 text-black border rounded ${
              currentPage === number ? "bg-blue-300 border-blue-500" : ""
            }`}
          >
            {number}
          </button>
        ))}

        {/* Next Page Button */}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 ${
            currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          &gt;
        </button>
      </div>

    </div>
  )

  

  
}
