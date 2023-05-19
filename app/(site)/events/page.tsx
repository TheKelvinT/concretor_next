"use client";
import React from "react";
import EventCTA from "@/components/Events/EventCTA";
import EventDesc from "@/components/Events/EventDesc";
import EventSlider from "@/components/Events/EventSlider";
import Gallery from "@/components/Events/Gallery";
import Image from "next/image";
import EventHero from "@/assets/eventhero.png";
import { getEvents } from "@/sanity/sanity-utils";

type Props = {};

export default async function Events(props: Props) {
  const EventData = await getEvents();
  const data = EventData[0];

  return (
    <div>
      <div className="-mt-[120px] min-w-screen ">
        <Image
          src={data.banner.image}
          height="1000"
          width="2000"
          alt="hero-banner"
          className="object-cover w-screen h-auto"
        />
      </div>

      <EventCTA data={data} />
      <EventDesc data={data} />
      <EventSlider data={data} />
      <Gallery />
    </div>
  );
}
