import React from "react";
import Image from "next/image";
import BlackLogo from "@/assets/nota-logo-black.png";
import AboutHero from "@/assets/about-hero.png";
import Link from "next/link";
import AboutDesc from "@/components/About/AboutDesc";
import AboutCTA from "@/components/About/AboutCTA";
import ToCareerPage from "@/components/About/ToCareerPage";

type Props = {};

export default async function About(props: Props) {
  return (
    <div>
      <div className="-mt-[120px] w-full max-w-screen h-[315px] lg:h-auto ">
        <Image
          src={AboutHero}
          alt="hero-banner"
          className="object-cover h-full w-full"
        />
      </div>
      <AboutCTA />
      <AboutDesc />
      <ToCareerPage />
    </div>
  );
}
