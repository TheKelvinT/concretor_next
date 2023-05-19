import React from "react";
import Image from "next/image";
import BlackLogo from "@/assets/nota-logo-black.png";
import Button from "@/components/Button";
import Link from "next/link";

const AboutCTA = () => {
  return (
    <section className=" py-20">
      <div className="flex flex-col justify-center items-center">
        <div className="md:py-16 pb-12">
          <Image src={BlackLogo} alt="logo" />
        </div>
        <div className="font-biro text-[32px] text-center max-w-[470px] w-11/12 space-y-12">
          <p>
            To positively influence the lives of those who step in to NOTA
            through &quot;love without prejudice&quot; hospitality
          </p>
          <p className="text-end max-w-[550px]">People first.</p>
        </div>
        <div className="text-center space-y-4 py-12 text-main max-w-[665px] w-11/12 ">
          <h3 className="pb-4">Where Hospitality is the Art of People</h3>
          <p className="text-xs leading-5 text-sub">
            Since our humble beginnings in 2005, The Lo & Behold Group has been
            quietly pushing the boundaries of Singapore&apos;s lifestyle and
            hospitality landscape.
          </p>
          <p className="text-xs leading-5 text-sub">
            Whether we&apos;re building Singapore&apos;s first rooftop bar from
            ground-up, or ironing out the creases of Asia&apos;s top fine-dining
            restaurant, all that we do comes down to one thing: People.
            We&apos;ve found that when we design for people and create magical
            experiences in the process, we&apos;re able to bring out the best of
            a city. Its people, their purpose and places.
          </p>
        </div>
        <div className="md:mt-10">
          <Link href="/blog">
            <Button title="FOLLOW OUR STORY" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
