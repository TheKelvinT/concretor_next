import axios from "axios"
import BlogPosts from "@/components/BlogPosts"
const maxPostsPerPage = 5

async function fetchBlogs() {
  const res = await axios.get(
    "https://say9s8oc.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22blog%22%5D%20%7C%20order(_updatedAt%20desc)%20%7B%0A%20%20title%2C%0A%20%20%22slug%22%3A%20slug.current%2C%0A%20%20tags%2C%0A%20%20%22image%22%3A%20%7B%0A%20%20%20%20%22url%22%3A%20image.asset-%3Eurl%2C%0A%20%20%20%20%22alt%22%3A%20image.alt%0A%20%20%7D%2C%0A%20%20summary%5B%5D%20%7B%0A%20%20%20%20...%20%2F%2F%20returns%20all%20the%20blocks%20inside%20the%20summary%20array%0A%20%20%7D%2C%0A%20%20content%5B%5D%20%7B%0A%20%20%20%20...%2C%0A%20%20%20%20_type%20%3D%3D%20%22image%22%20%3D%3E%20%7B%0A%20%20%20%20%20%20%22url%22%3A%20asset-%3Eurl%2C%0A%20%20%20%20%20%20%22alt%22%3A%20alt%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A"
  )
  return res.data.result // Return the blog posts
}

export default async function BlogPostsPage() {
  const blogPostsData = await fetchBlogs() // Fetch blog posts on the server

  return (
    <div className="flex flex-col items-center py-16">
      <h2 className="font-bold mb-16">Featured Blogs</h2>
      <BlogPosts blogPosts={blogPostsData} maxPostsPerPage={maxPostsPerPage} />
    </div>
  )
}
