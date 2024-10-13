import React from "react"
import { PortableText } from "@portabletext/react"
import urlBuilder from "@sanity/image-url"
import { useRouter } from "next/navigation"
// Define the types for the Card props
interface CardProps {
  data: {
    title: string
    slug: string
    summary: string
    image_url: string
    tag: string
  },
  // router: any
}

const Card: React.FC<CardProps> = ({ data}) => {
  const router = useRouter()
  console.log(data)

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
    router.push(`/blog/${data.slug.current}`)
    console.log("hi")
  }

  return (
    <div
      className="flex flex-row h-[303px] w-[1028px] border border-white bg-white py-4 px-4 rounded-lg"
      style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.25)" }}
    >
      <img
        className="w-1/3 h-auto rounded-lg object-cover"
        src={data.image_url}
        alt={data.title}
      />
      <div className="w-2/3 pl-7 mt-6">
        <div className="flex flex-row gap-7 text-[#038885] mb-6">
          <p>Innovation </p>
          <p>Project Management</p>
        </div>
        <div className="font-bold text-[#01302F] text-2xl mb-6" onClick={handleBlogRedirect}>
          {data.title}
        </div>
        <p className="text-[#383838]">
          <PortableText
            value={data?.summary}
            onMissingComponent={false}
            components={serializer}
          />
        </p>
      </div>
    </div>
  )
}

export default Card
