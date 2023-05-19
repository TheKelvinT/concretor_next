import React from "react";
import Image from "next/image";
import CareerCollageOne from "@/assets/career1.png";
import CareerCollageTwo from "@/assets/career2.png";
import CareerCollageThree from "@/assets/career3.png";
import CareerCollageFour from "@/assets/career4.png";
import CareerCollageFive from "@/assets/career5.png";
import CareerCollageSix from "@/assets/career6.png";
import CareerCollageSeven from "@/assets/career7.png";
import CareerCollageEight from "@/assets/career8.png";
import CareerCollageNine from "@/assets/career9.png";
type Props = {};

const CareerCollage = (props: Props) => {
  return (
    <section className="mx-auto">
      <div className="flex justify-center gap-1.5 ">
        <div className="flex flex-col gap-2">
          <div className="flex gap-x-1.5 ">
            <div>
              <Image
                src={CareerCollageOne}
                alt="career-img"
                className="object-cover"
              />
            </div>

            <div>
              <Image
                src={CareerCollageTwo}
                alt="career-img"
                className="object-cover"
              />
            </div>

            <div>
              <Image
                src={CareerCollageThree}
                alt="career-img"
                className="object-cover"
              />
            </div>

            <div>
              <Image
                src={CareerCollageFour}
                alt="career-img"
                className="object-cover "
              />
            </div>
          </div>
          <div className="flex gap-x-1.5 h-full w-full">
            <div>
              <Image
                src={CareerCollageFive}
                alt="career-img"
                className="object-cover"
              />
            </div>
            <div>
              <Image
                src={CareerCollageSix}
                alt="career-img"
                className="object-cover"
              />
            </div>
            <div>
              <Image
                src={CareerCollageSeven}
                alt="career-img"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="hidden sm:flex flex-col gap-y-1.5">
          <div>
            <Image
              src={CareerCollageEight}
              alt="career-img"
              className="object-cover"
            />
          </div>
          <div>
            <Image
              src={CareerCollageNine}
              alt="career-img"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCollage;
