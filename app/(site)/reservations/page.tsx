"use client";
import React from "react";
import Link from "next/link";
import ReservationDesc from "@/components/Reservations/ReservationDesc";
import Faq from "@/components/Reservations/Faq";
import Image from "next/image";
import ReservationBg from "@/assets/reservation-bg.png";
import ContactSection from "@/components/ContactSection";
import { getFaqs, getReservations } from "@/sanity/sanity-utils";
type Props = {};

export default async function Reservations(props: Props) {
  const res = await getReservations();
  const data = res[0];
  const faq = await getFaqs();
  return (
    <>
      <div className="relative  h-auto xl:h-screen overflow-hidden">
        <Image
          src={data.banner}
          height="1000"
          width="1000"
          alt="reservation-hero"
          className="object-cover w-full h-auto "
        />
      </div>
      <ReservationDesc data={data} />
      <ContactSection />
      <Faq faq={faq} />
    </>
  );
}
