import React from "react";
import TeamPhoto from "@/assets/team-photo.png";
import Image from "next/image";
type Props = {};

const AboutDesc = (props: Props) => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-11/12 h-[210px] sm:h-auto">
        <Image
          src={TeamPhoto}
          alt="hero-banner"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-center space-y-3 py-16 md:py-24 text-main max-w-[665px] w-11/12">
        <h3 className="font-gothic text-xl">Award & Accolades</h3>
        <p className="text-xs leading-5 text-sub">
          We&apos;ve been fortunate to have gained recognition for every aspect
          of our Hospitality—every grain of rice, every tile on our roof. For
          this, we are thankful; our achievements remind us never to stray from
          the path of Bold Ideas and Intentional Hospitality.
        </p>
      </div>
    </section>
  );
};

export default AboutDesc;
