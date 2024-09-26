"use client"
import React, { useEffect } from "react"

import {
  getBlogHero,
  getBlogs,
  getFeaturedBlogs,
  fetchBlogPost,
} from "@/sanity/sanity-utils"
type Props = {}

export default async function BlogPosts(props: Props) {
  useEffect(() => {
    fetchBlogPost()
  }, [])
  return <div>blog</div>
}
