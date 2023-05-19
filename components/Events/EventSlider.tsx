import React from "react";
import Button from "@/components/Button";
import MiniCarousel from "@/components/MiniCarousel";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
type Props = { data: any };

function EventSlider({ data }: Props) {
  return (
    <section className=" w-full flex justify-center  md:mb-28  ">
      <div className="flex flex-col md:flex-row justify-center gap-x-10 lg:gap-x-20 w-11/12 md:w-full">
        <div className="my-auto basis-1/3 md:pl-4 order-last md:order-first ">
          <h3 className="py-4">{data.sectionThree.title}</h3>
          <div className="flex flex-col md:max-w-[330px] gap-y-8 text-main">
            <div className="text-xs">
              <PortableText value={data.sectionThree.Sectioncontent} />
            </div>

            <div>
              <Link href={data.sectionThree.callToAction.routes}>
                <Button title={data.sectionThree.callToAction.buttonText} />
              </Link>
            </div>
          </div>
        </div>
        <MiniCarousel data={data} />
      </div>
    </section>
  );
}

export default EventSlider;
