import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CreateWebsiteImg_1 from "../../assets/images/CreateWebsiteImg_1.webp";
import CreateWebsiteImg_2 from "../../assets/images/CreateWebsiteImg_2.webp";
import CreateWebsiteImg_3 from "../../assets/images/CreateWebsiteImg_3.webp";

import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";

export default function CustomSliderCreateWebsite() {
  const swiperRef = useRef(null);

  return (
    <div className="Slider-Create-Website xl:ps-[5rem] overflow-x-auto hide-scrollbar">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => {
          if (swiperRef.current) {
            swiperRef.current.autoplay.stop();
            swiperRef.current.autoplay.start();
          }
        }}
        className="mySwiper"
      >
        <style jsx>{`
          .Slider-Create-Website .swiper-3d .swiper-slide-shadow {
            background: transparent !important;
          }
          .Slider-Create-Website .swiper-slide {
            padding: 0.75rem;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }

          .hide-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>

        <SwiperSlide>
          <div className="relative lg:w-[350px]">
            <img
              className="relative xl:max-h-[350px] border-8 rounded-[3rem] border-white shadow-md"
              src={CreateWebsiteImg_1}
              alt="image"
            />

            <span className="absolute text-lg font-bold text-white -translate-x-1/2 left-1/2 bottom-6 whitespace-nowrap">
              Launch Instantly
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative lg:w-[350px]">
            <img
              className="relative xl:max-h-[350px] border-8 rounded-[3rem] border-white shadow-md"
              src={CreateWebsiteImg_2}
              alt="image"
            />
            <span className="absolute text-lg font-bold text-white -translate-x-1/2 left-1/2 bottom-6 whitespace-nowrap">
              Choose Your Website Style
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative lg:w-[350px]">
            <img
              className="relative xl:max-h-[350px] border-8 rounded-[3rem] border-white shadow-md"
              src={CreateWebsiteImg_3}
              alt="image"
            />
            <span className="absolute text-lg font-bold text-white -translate-x-1/2 left-1/2 bottom-6 whitespace-nowrap">
              Tell Us About Your Business
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
