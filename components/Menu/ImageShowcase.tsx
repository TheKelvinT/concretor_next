import React from "react";
import Image from "next/image";
import MenuOne from "@/assets/menu1.png";
import MenuTwo from "@/assets/menu2.png";
import MenuThree from "@/assets/menu3.png";
type Props = { data: any };

function ImageShowcase({ data }: Props) {
  return (
    <section className="mx-auto">
      <div className="flex justify-center gap-x-1 sm:gap-x-2 ">
        {data.images.map((url, index) => (
          <div key={index} className="h-[240px] sm:h-auto">
            <Image
              src={url}
              alt="menu-img"
              width="444"
              height="566"
              className="object-cover h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImageShowcase;
