"use client"
import React from "react"

import BlogDesc from "@/components/Blog/BlogDesc"
import BlogHero from "@/components/Blog/BlogHero"
import Blogs from "@/components/Blog/BlogPosts"
import { getBlogHero, getBlogs, getFeaturedBlogs } from "@/sanity/sanity-utils"
type Props = {}

export default async function BlogPosts(props: Props) {
  const blog = await getFeaturedBlogs()
  const blogs = await getBlogs()
  const blogHeroRes = await getBlogHero()
  const blogHeroData = blogHeroRes[0]
  return (
    <div>
      <BlogHero blog={blog} blogImage={blogHeroData} />
      <BlogDesc blogData={blogHeroData} />
      <Blogs blogs={blogs} />
    </div>
  )
}
