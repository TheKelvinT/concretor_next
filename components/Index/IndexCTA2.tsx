import React from "react";
import Image from "next/image";
import HomeMenu from "@/assets/section4.png";
import HomeEvent from "@/assets/section 5.png";
import HomeMenuMobile from "@/assets/navigation1.png";
import Link from "next/link";
import Button from "../Button";
import { PortableText } from "@portabletext/react";

type Props = { card: any };

const IndexCTA2 = ({ card }: Props) => {
  return (
    <section className=" flex flex-col items-center gap-32 mt-48  ">
      {/* Desktop */}
      {card.map((content, index) => (
        <div
          key={index}
          className="hidden md:flex justify-center md:h-[585px]  lg:gap-32  w-11/12 lg:w-4/5  gap-10  "
        >
          <div className={` ${index % 2 === 1 ? "order-2" : ""} `}>
            <Image
              src={content.image}
              width="468"
              height="585"
              alt="food-pic"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className={` ${
              index % 2 === 1 ? "order-1" : ""
            } flex justify-center items-center    md:w-[320px]  `}
          >
            <div className="space-y-10 text-main text-start ">
              <h3>{content.title}</h3>
              <div className="text-xs leading-5">
                <PortableText value={content.description} />
              </div>
              <div className="mt-10">
                <Link href={content.callToAction.routes}>
                  <Button title={content.callToAction.buttonText} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Tablet */}
      {card.map((content, index) => (
        <div
          key={index}
          className="hidden sm:flex md:hidden justify-center gap-8 w-11/12 "
        >
          <div
            className={` ${
              index % 2 === 1 ? "order-2" : ""
            } w-full h-[350px] basis-5/12 `}
          >
            <Image
              src={content.image}
              alt="food-pic"
              width="468"
              height="585"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className={` ${
              index % 2 === 1 ? "order-1" : ""
            } flex justify-center items-center basis-7/12 `}
          >
            <div className="space-y-6 text-main text-start ">
              <h3>{content.title}</h3>
              <div className="text-xs leading-5">
                <PortableText value={content.description} />
              </div>
              <div className="mt-10">
                <Link href={content.callToAction.routes}>
                  <Button title={content.callToAction.buttonText} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Mobile */}
      {card.map((content, index) => (
        <div
          key={index}
          className="flex sm:hidden flex-col justify-center gap-4 w-11/12 "
        >
          <div className=" h-[320px] w-full">
            <Image
              src={content.image}
              alt="food-pic"
              width="468"
              height="585"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className={` ${
              index % 2 === 1 ? "order-1" : ""
            } flex justify-center items-center    md:w-[320px]  `}
          >
            <div className="space-y-6 text-main text-start ">
              <h3>{content.title}</h3>
              <div className="text-xs leading-5">
                <PortableText value={content.description} />
              </div>
              <div className="mt-10">
                <Link href={content.callToAction.routes}>
                  <Button title={content.callToAction.buttonText} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default IndexCTA2;
