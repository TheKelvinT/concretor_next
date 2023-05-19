"use client";
import Image from "next/image";

import IndexCTA from "@/components/Index/IndexCTA";
import MainCarousel from "@/components/MainCarousel";
import IndexDesc from "@/components/Index/IndexDesc";
import IndexCTA2 from "@/components/Index/IndexCTA2";
import IndexNavigation from "@/components/Index/IndexNavigation";
import ContactSection from "@/components/ContactSection";
import {
  getCardSection,
  getCarousel,
  getHomeContent,
  getHomeNavigation,
} from "@/sanity/sanity-utils";

export default async function Home() {
  const HomeContent = await getHomeContent();
  const content = HomeContent[0];
  const image = await getCarousel();
  const images = image[0];
  const card = await getCardSection();
  const navigation = await getHomeNavigation();

  return (
    <div className="">
      <MainCarousel images={images} />
      <IndexCTA content={content} />
      <IndexDesc content={content} />
      <IndexCTA2 card={card} />
      <section className="min-w-screen md:h-auto md:mt-48 mt-24 ">
        <Image
          src={content.homeMidBanner.bannerURL}
          width={2000}
          height={1000}
          alt="banner"
          className="object-cover w-full"
        />
      </section>
      <IndexNavigation navigation={navigation} />
      <ContactSection />
    </div>
  );
}
