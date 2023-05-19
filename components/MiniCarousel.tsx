import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import MiniOne from "@/assets/mini1.png";
import MiniTwo from "@/assets/mini2.png";
import MiniThree from "@/assets/mini3.png";
import MiniFour from "@/assets/mini4.png";
import MiniFive from "@/assets/mini5.png";
import MiniSix from "@/assets/mini6.png";
import MiniSeven from "@/assets/mini7.png";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper";
import { fromJSON } from "postcss";

SwiperCore.use([Autoplay, Pagination]);

type Props = { data: any };
function MiniCarousel({ data }: Props) {
  const swiperRef = useRef(null);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
        speed={1000}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {data.sectionThree.carousel.map(
          (image: any, index: React.Key | null | undefined) => (
            <SwiperSlide key={index}>
              <Image
                src={image.image}
                height="825"
                width="2000"
                alt="slider-img"
                className="object-cover h-full w-full"
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
}

export default MiniCarousel;
