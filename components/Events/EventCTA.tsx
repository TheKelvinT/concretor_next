import React from "react";
import Button from "@/components/Button";
import Link from "next/link";
type Props = { data: any };

const EventCTA = ({ data }: Props) => {
  return (
    <section className="w-screen flex flex-col justify-center items-center py-20">
      <div className="text-center  flex flex-col items-center space-y-4 pb-8 text-main max-w-[665px] w-4/5">
        <h3 className="pb-4 max-w-[200px]">{data.sectionOne.title}</h3>
        <p className="text-xs leading-5 text-sub max-w-[650px]">
          {data.sectionOne.desc}
        </p>
      </div>
      <div className=" flex justify-center gap-x-6">
        <Link href={data.sectionOne.callToAction.routes}>
          <Button title={data.sectionOne.callToAction.buttonText} />
        </Link>
      </div>
    </section>
  );
};

export default EventCTA;
