import React from "react";
import MenuSpecial from "@/assets/menuspecial.png";
import Image from "next/image";
import Button from "@/components/Button";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
type Props = { special: any };

const SpecialMenu = ({ special }: Props) => {
  return (
    <section className="bg-primary mx-auto  ">
      <div className="sm:hidden">
        <Image
          src={MenuSpecial}
          alt="menu-img"
          className="h-full object-cover"
        />
      </div>
      <div className="flex justify-center gap-12 lg:gap-28 xl:gap-40 h-[400px]  xl:h-auto">
        <div className="my-auto sm:pl-4 sm:basis-1/2 md:basis-1/3 flex justify-center w-11/12 ">
          <div className="flex flex-col items-center text-center max-w-[400px]  sm:w-auto sm:max-w-[330px] gap-y-5">
            <div className="text-main">
              <h3 className="text-4xl ">{special.intro}</h3>
              <h4 className="text-5xl font-biro">{special.title}</h4>
            </div>
            <div className="font-gothic text-xs">
              <p>{special.date}</p>
              <p>{special.time}</p>
            </div>
            <div className="text-xs py-2">
              <PortableText value={special.description} />
            </div>
            <div>
              <Link href={special.callToAction.routes}>
                <Button title={special.callToAction.buttonText} />
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden sm:block basis-1/2 md:basis-2/3">
          <Image
            src={special.image}
            width="847"
            height="447"
            alt="menu-img"
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
