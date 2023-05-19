import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import PrivateEventOne from "@/assets/private-event-1.png";
import MiniCarousel from "../MiniCarousel";
import Link from "next/link";

type Props = { data: any };

const EventDesc = ({ data }: Props) => {
  return (
    <section className=" w-full flex justify-center mb-28  ">
      <div className="flex flex-col md:flex-row justify-center gap-x-10 lg:gap-x-20 w-11/12 md:w-full">
        <div className="basis-2/3">
          <Image
            src={data.sectionTwo.image}
            width="948"
            height="574"
            alt="menu-img"
            className="min-h-full object-cover"
          />
        </div>
        <div className="my-auto basis-1/3 md:pr-4 ">
          <h3 className="py-4">{data.sectionTwo.title}</h3>
          <div className="flex flex-col md:max-w-[330px] gap-y-8 text-main">
            <div className="text-xs">
              <p>
                We’re always on the lookout for good people, no matter your
                specialism or title. Send us an open application and we’ll reach
                out when the opportunity arises.
              </p>
            </div>
            <div className=" text-xs">
              <p>CAPACITY</p>
              <ul className="list-disc pl-5">
                <li>Seated: 50 - 60 guests</li>
                <li>Cocktail: 60 - 70 guests</li>
              </ul>
            </div>
            <div className=" text-xs">
              <p>INCLUSIONS</p>
              <ul className="list-disc pl-5">
                <li>Customised menu</li>
                <li>1,500 sq ft of space</li>
                <li>Unlimited use of high speed wifi connection</li>
                <li>Dedicated team to host your guests</li>
              </ul>
            </div>
            <div>
              <Link href={data.sectionTwo.callToAction.routes}>
                <Button title={data.sectionTwo.callToAction.buttonText} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDesc;
