import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import hero1 from "@/assets/Hero-carousel-1.png";
import hero2 from "@/assets/Hero-carousel-2.png";
import hero3 from "@/assets/Hero-carousel-3.png";
import hero4 from "@/assets/Hero-carousel-4.png";
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
type Props = { images: any };
function MainCarousel({ images }: Props) {
  const swiperRef = useRef(null);
  // const carouselStyle = {
  //   "--swiper-pagination-color": "rgba(255,255,255,0.7)",
  //   "--swiper-pagination-bullet-size": "10px",
  //   "--swiper-pagination-bullet-inactive-color": "rgba(255,255,255,0.7)",
  //   "--swiper-theme-color": "rgba(255,255,255,0.7)",
  //   "--swiper-navigation-size": "44px",
  // }as any;

  return (
    <>
      <Swiper
        ref={swiperRef}
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        speed={1500}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper min-w-screen h-screen absolute -mt-[96px]"
      >
        {images &&
          images.carousel &&
          images.carousel.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.imageURL}
                height="1509"
                width="2000"
                alt={`hero${index + 1}`}
                className="h-screen w-screen object-cover"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default MainCarousel;
