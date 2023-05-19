import React from "react";
import BlogBg from "@/assets/menubg.png";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { PortableText } from "@portabletext/react";
type Props = { blog: any; blogImage: any };

export default function BlogHero({ blog, blogImage }: Props) {
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };
  return (
    <section>
      <div className="relative min-w-screen h-auto xl:h-screen overflow-hidden ">
        <Image
          src={blogImage.image}
          alt="Blog-hero"
          height="1000"
          width="1000"
          className="object-cover w-full  h-auto "
        />
        <div className="hidden absolute bottom-0 w-screen h-full  text-white px-24 lg:px-36 xl:px-48 xl:py-36 py-12 lg:py-24 sm:flex items-end">
          <div className=" space-y-8  max-w-[480px]">
            <h3 className="text-4xl">{blog.title}</h3>
            <div className="text-xs">
              <PortableText value={blog.summary} />
            </div>
            <p className="text-xs">{formatDate(blog._createdAt)}</p>
            <div>
              <Link href="/menu">
                <Button title="READ MORE" width="bg-white w-40" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
