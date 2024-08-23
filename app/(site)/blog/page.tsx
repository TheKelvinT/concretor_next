"use client"
import React from "react"

import { getBlogHero, getBlogs, getFeaturedBlogs } from "@/sanity/sanity-utils"
type Props = {}

export default async function BlogPosts(props: Props) {
  const blog = await getFeaturedBlogs()
  const blogs = await getBlogs()
  const blogHeroRes = await getBlogHero()
  const blogHeroData = blogHeroRes[0]
  return <div></div>
}
