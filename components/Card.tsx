import React from "react"
import { PortableText } from "@portabletext/react"
import urlBuilder from "@sanity/image-url"
import { useRouter } from "next/navigation"
import { IBlogPost } from "@/types/Blogs"
// Define the types for the Card props
interface CardProps {
  data: IBlogPost
  // router: any
}

const Card: React.FC<CardProps> = ({ data }) => {
  const router = useRouter()

  const urlFor = (source: any) =>
    urlBuilder({ projectId: "9cqbua0r", dataset: "production" }).image(source)

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

  const handleBlogRedirect = () => {
    router.push(`/blog/${data.slug}`)
  }

  return (
    <div
      className="flex flex-col md:flex-row h-auto md:h-[300px] mx-4 md:mx-0 md:w-4/5 max-w-[1028px] border border-white bg-white py-4 px-4 rounded-lg"
      style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.25)" }}
    >
      <img
        className="w-full md:w-1/3 h-auto rounded-lg object-cover min-h-[200px]"
        src={data.image.url}
        alt={data.title}
      />
      <div className="md:w-2/3 md:pl-7 mt-6">
        <div className="flex flex-row gap-7 text-[#038885] mb-4">
          {data.tags &&
            data.tags.map((tag: any, index: number) => (
              <p key={index}>{tag}</p>
            ))}
        </div>
        <div
          className="font-bold text-[#01302F] text-2xl mb-4 cursor-pointer"
          onClick={handleBlogRedirect}
        >
          {data.title}
        </div>
        <p className="text-[#383838] truncate-text-6">
          <PortableText
            value={data?.content}
            onMissingComponent={false}
            components={serializer}
          />
        </p>
      </div>
    </div>
  )
}

export default Card
