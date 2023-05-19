"use client";
import React from "react";
import CareerCollage from "@/components/Careers/CareerCollage";
import CareerCTA from "@/components/Careers/CareerCTA";
import CareerValues from "@/components/Careers/CareerValues";
import OtherOpportunities from "@/components/Careers/OtherOpportunities";
import CareerDesc from "@/components/Careers/CareerDesc";
import Openings from "@/components/Careers/Openings";
import {
  getCareerContent,
  getOpenings,
  getValues,
} from "@/sanity/sanity-utils";
type Props = {};

export default async function Careers(props: Props) {
  const openings = await getOpenings();
  const values = await getValues();
  const careerContent = await getCareerContent();
  const data = careerContent[0];

  return (
    <div>
      <CareerDesc data={data} />
      <CareerCollage />
      <CareerCTA data={data} />
      <Openings openings={openings} />
      <CareerValues values={values} />
      <OtherOpportunities data={data} />
    </div>
  );
}
