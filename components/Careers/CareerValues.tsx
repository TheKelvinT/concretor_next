import React from "react";
import Image from "next/image";
import ValueOne from "@/assets/value1.png";
import ValueTwo from "@/assets/value2.png";
import ValueThree from "@/assets/value3.png";
type Props = { values: any };

const CareerValues = ({ values }: Props) => {
  return (
    <div id="values" className="bg-primary flex flex-col items-center py-16">
      <div className="text-center space-y-4 pb-10 text-main w-11/12 max-w-[665px]">
        <h3 className="pb-4">Our Values</h3>
        <p className="text-xs leading-5 text-sub">
          We believe that Hospitality does not happen by accident, but with
          consideration. On our mission to make our city more lovable through
          bold ideas and intentional hospitality, we take great care to hold our
          people to the highest standards—whether in terms of our concepts or in
          the way we conduct ourselves. {" "}
        </p>
        <p className="text-[10px]">
          View our <span className="underline">Playbook</span>
        </p>
      </div>
      <div className="place-items-center gap-x-8 grid grid-cols-1 gap-y-4 md:gap-y-16 md:grid-cols-2 lg:grid-cols-3 col-span-1 w-11/12">
        {values.map((value, idx: React.Key | null | undefined) => (
          // eslint-disable-next-line react/jsx-key
          <div key={idx} className="flex flex-col">
            <Image
              src={value.image}
              alt={value.alt}
              width="315"
              height="315"
              className="object-cover"
            />
            <div className="max-w-[315px] flex-col flex mt-8 gap-y-3">
              <h5 className="font-gothic text-base text-main">{value.value}</h5>
              <p className=" text-xs pb-4 text-dark">{value.valueDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerValues;
