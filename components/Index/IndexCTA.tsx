import React from "react";
import Button from "@/components/Button";
import Link from "next/link";
import BlackLogo from "@/assets/nota-logo-black.png";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
type Props = { content: any };

const IndexCTA = ({ content }: Props) => {
  return (
    <section className=" flex justify-center py-20">
      <div className=" w-4/5 md:w-2/5  flex flex-col justify-center items-center">
        <div className="pb-6">
          <Image
            src={content.homeSectionOne.Logo}
            width="251"
            height="71"
            alt="nota-logo"
          />
        </div>
        <div className="text-center space-y-4 text-main">
          <h3>{content.homeSectionOne.title}</h3>
          <div className="text-xs leading-5">
            <PortableText value={content.homeSectionOne.description} />
          </div>
        </div>
        <Link
          href={content.homeSectionOne.callToAction.routes}
          className="mt-10"
        >
          <Button title={content.homeSectionOne.callToAction.buttonText} />
        </Link>
      </div>
    </section>
  );
};

export default IndexCTA;
