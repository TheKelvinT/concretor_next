import React from "react";
import Button from "@/components/Button";
import MenuFour from "@/assets/menu4.png";
import MenuThree from "@/assets/menu3.png";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

type Props = { menus: any };

const MenuOption = ({ menus }: Props) => {
  return (
    <section className="py-20 flex justify-center ">
      <div className=" flex justify-center w-11/12 md:gap-x-12 xl:gap-40">
        <div className="max-w-[430px] space-y-28 py-4 md:basis-1/2">
          {menus.map((menu, index) => (
            <div key={menu._id} className="space-y-8">
              <div className="flex flex-col items-center gap-y-1">
                <h3 className="">{menu.title}</h3>
                <div className="font-gothic text-xs">{menu.time}</div>
              </div>
              <div className="flex justify-center text-center text-xs">
                <PortableText value={menu.description} />
              </div>
              <div className="text-center">
                <Button title={menu.callToAction.buttonText} />
              </div>
            </div>
          ))}
          {/* <div className="space-y-8">
            <div className="flex flex-col items-center gap-y-1">
              <h3 className="">Seasonal Off Menu</h3>
              <p className="font-gothic text-xs">
                From 12 February to 28 February 2023
              </p>
              <p className="font-gothic text-xs">Serving from 6pm - 9pm</p>
            </div>
            <div className="flex justify-center text-center text-xs">
              <p>
                Since our humble beginnings in 2005, The Lo & Behold Group has
                been quietly pushing the boundaries of Singapore’s lifestyle and
                hospitality landscape.
              </p>
            </div>
            <div className="text-center">
              <Button title="ALL DAY MENU" />
            </div>
          </div> */}
        </div>
        <div className="hidden md:block">
          <Image
            src={MenuThree}
            alt="menu-img"
            className="object-cover h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default MenuOption;
