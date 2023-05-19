import React from "react";
import NavMenu from "@/assets/navigation1.png";
import NavEvent from "@/assets/navigation2.png";
import NavBlog from "@/assets/navigation3.png";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import { nav } from "@/types/Home";

type Props = { navigation: nav[] };

const IndexNavigation = ({ navigation }: Props) => {
  return (
    <section className=" mx-auto flex flex-col justify-center items-center md:w-11/12">
      <div className="flex justify-center py-20">
        <h3 className="text-3xl text-main">Navigation</h3>
      </div>
      <div className=" md:w-auto  grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-x-4 col-span-1 gap-y-12 place-content-center place-items-center ">
        {navigation.map((nav) => (
          // eslint-disable-next-line react/jsx-key
          <div
            key={nav._id}
            className=" flex flex-col items-center justify-center flex-1 w-11/12"
          >
            <div className="">
              <Image
                width="396"
                height="264"
                src={nav.image}
                alt={nav.title}
                className="object-cover "
              />
            </div>
            <div className=" md:w-11/12 flex-col flex justify-center items-center gap-y-8 mt-10 flex-1">
              <h5 className="font-gothic text-2xl text-main">{nav.title}</h5>
              <p className="text-center font-xs pb-4 flex-1 ">
                {nav.description}
              </p>
              <Link href={nav.callToAction.routes}>
                <Button title={nav.callToAction.buttonText} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndexNavigation;
