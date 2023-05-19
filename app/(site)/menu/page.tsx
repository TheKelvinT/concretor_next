"use client";
import React from "react";
import SpecialMenu from "@/components/Menu/SpecialMenu";
import MenuCTA from "@/components/Menu/MenuCTA";
import ImageShowcase from "@/components/Menu/ImageShowcase";
import MenuOption from "@/components/Menu/MenuOption";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import MenuHero from "@/assets/MenuHero.png";
import {
  getMenuSectionOne,
  getMenus,
  getSpecialMenu,
} from "@/sanity/sanity-utils";

type Props = {};

export default async function Menu(props: Props) {
  const sectionOne = await getMenuSectionOne();
  const data = sectionOne[0];
  const menus = await getMenus();

  const specialM = await getSpecialMenu();
  const special = specialM[0];

  return (
    <div>
      <div className="-mt-[120px] min-w-screen h-[315px] lg:h-auto ">
        <Image
          src={data.banner}
          width={2000}
          height={1000}
          alt="hero-banner"
          className="object-cover w-full h-full"
        />
      </div>
      <MenuCTA data={data} />
      <ImageShowcase data={data} />
      <MenuOption menus={menus} />
      <SpecialMenu special={special} />
      <ContactSection />
    </div>
  );
}
