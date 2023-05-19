import React from "react";
import BlogOne from "@/assets/blog1.png";
import BlogTwo from "@/assets/blog2.png";
import BlogThree from "@/assets/blog3.png";
import BlogFour from "@/assets/blog4.png";
import Image from "next/image";
import Button from "@/components/Button";
import { PortableText } from "@portabletext/react";

type Props = { blogs: any };

export default function BlogPosts({ blogs }: Props) {
  return (
    <section className=" flex justify-center px-4 pb-60">
      <div className="  gap-x-8 grid grid-cols-1 gap-y-16 md:grid-cols-2 col-span-1">
        {blogs.map((blog) => (
          // eslint-disable-next-line react/jsx-key
          <div
            key={blog._id}
            className="flex flex-col flex-auto max-w-[489px] "
          >
            <div className="max-w-[489px] max-h-[368px] overflow-hidden ">
              <Image
                src={blog.image}
                alt={blog.title}
                width="489"
                height="368"
                className="object-cover "
              />
            </div>
            <div className=" flex-col  flex-auto flex mt-8 gap-y-4">
              <h5 className="underline underline-offset-4 text-base text-main">
                {blog.title}
              </h5>
              <div className=" flex flex-col flex-auto text-xs text-dark ">
                <PortableText value={blog.summary} />
              </div>

              <div className="py-4">
                <Button title="READ MORE" width="w-44" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
