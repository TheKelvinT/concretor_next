import React from "react";
import HeroImgOne from "@/assets/section1.png";
import HeroImgTwo from "@/assets/section2.png";
import HeroImgThree from "@/assets/section3.png";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
type Props = { content: any };

const IndexDesc = ({ content }: Props) => {
  return (
    <section className="bg-primary max-w-screen flex justify-center py-12 md:py-0 ">
      {/* Desktop */}
      <div className="hidden md:grid grid-col-2 md:grid-col-4 h-[461px] absolute -bottom-14 relative  ">
        <div className="flex md:flex-row align-center flex-col justify-center gap-x-4  px-9">
          <div className=" mr-10 w-full sm:w-[300px] space-y-6 flex flex-col justify-center text-main">
            <h4 className="font-biro">{content.homeSectionTwo.title}</h4>
            <div className="text-xs leading-5">
              <PortableText value={content.homeSectionTwo.description} />
            </div>
          </div>
          <Image
            src={content.homeSectionTwo.Images[0].imageURL}
            height="460"
            width="335"
            alt="food-pic"
          />
          <Image
            src={content.homeSectionTwo.Images[1].imageURL}
            height="460"
            width="335"
            alt="food-pic"
            className="hidden lg:block"
          />
          <Image
            src={content.homeSectionTwo.Images[2].imageURL}
            height="460"
            width="335"
            alt="food-pic"
            className="hidden xl:block"
          />
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-10 items-center">
        <div className=" flex justify-center w-11/12 gap-1.5">
          <div>
            <Image
              src={content.homeSectionTwo.Images[0].imageURL}
              alt="food-pic"
              height="460"
              width="335"
              className="object-cover h-full"
            />
          </div>
          <div className="hidden sm:block">
            <Image
              src={content.homeSectionTwo.Images[1].imageURL}
              alt="food-pic"
              height="460"
              width="335"
              className="object-cover h-full"
            />
          </div>
          <div>
            <Image
              src={content.homeSectionTwo.Images[2].imageURL}
              alt="food-pic"
              height="460"
              width="335"
              className="object-cover h-full"
            />
          </div>
        </div>
        <div className="  w-4/5 space-y-6 flex flex-col justify-center text-main">
          <h4 className="font-biro">{content.homeSectionTwo.title}</h4>
          <div className="text-xs leading-5">
            <PortableText value={content.homeSectionTwo.description} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexDesc;
