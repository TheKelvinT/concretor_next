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
    </div>
  )

  

  
}
