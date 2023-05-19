import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";
import AboutImg from "@/assets/team2.png";

type Props = {};

const ToCareerPage = (props: Props) => {
  return (
    <section className="bg-primary flex justify-center  py-16 ">
      <div className="flex flex-col sm:flex-row justify-center w-11/12">
        <div className="sm:hidden max-h-[300px]">
          <Image
            src={AboutImg}
            alt="team-discussion-img"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex items-center justify-center gap-x-8 md:gap-x-16 lg:gap-x-28   ">
          <div className="hidden sm:block h-[325px]  md:w-[485px] basis-1/2">
            <Image
              src={AboutImg}
              alt="team-discussion-img"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex flex-col items-center justify-center  text-center sm:basis-1/2">
            <div className="flex flex-col items-center justify-center mt-16 sm:mt-0 space-y-2   text-main md:max-w-[400px] ">
              <h3 className="font-gothic text-[22px]">The Team Experience</h3>
              <p className="text-xs leading-5 text-sub">
                In the business of people, we believe in treating our own people
                right—before all else. While working with the best-in-class to
                create our incredibly diverse portfolio, The Lo & Behold Group
                is meticulous in grooming the next generation of hospitality
                leaders, through structured and considered programmes.
              </p>
            </div>
            <div className="mt-5 lg:mt-10">
              <Link href="/careers">
                <Button title="JOIN THE TEAM" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToCareerPage;
