import React, { useState } from "react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import MainTitle from "./MainTittle";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-20 p-3 -translate-y-1/2 rounded-full shadow-md right-5 top-1/2 bg-white/25 hover:bg-white/50"
  >
    <ChevronRightIcon className="w-6 h-6 text-white" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-20 p-3 -translate-y-1/2 rounded-full shadow-md left-5 top-1/2 bg-white/25 hover:bg-white/50"
  >
    <ChevronLeftIcon className="w-6 h-6 text-white" />
  </button>
);

const ImageGallery = ({ gallery }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderSettings = {
    dots: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    pauseOnHover: true,
  };

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = (e) => {
    if (e.target.tagName === "IMG") return;
    setLightboxOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider-container image-gallery">
      <style>{`
      .image-gallery .slick-dots {
        position:absolute !important;
        top: 91% !important
      }
    `}</style>
      <Slider {...sliderSettings}>
        {gallery.map((img, index) => (
          <div key={index} onClick={() => handleOpenLightbox(index)}>
            <img
              src={img}
              alt={`gallery-img-${index}`}
              className="w-full h-[500px] object-cover  cursor-zoom-in"
            />
          </div>
        ))}
      </Slider>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black bg-opacity-90"
          onClick={handleCloseLightbox}
        >
          <div className="relative w-full  bg-white py-12 max-w-[80vw] flex  flex-col items-center justify-center">
            <MainTitle title="View Gallery" />
            <img
              src={gallery[currentIndex]}
              alt={`zoomed-img-${currentIndex}`}
              className="max-h-[80vh] max-w-[80vw] rounded-lg object-contain"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-0 p-3 rounded-full bg-custom-primary"
            >
              <ChevronLeftIcon className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-0 p-3 rounded-full bg-custom-primary"
            >
              <ChevronRightIcon className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots */}
          {/* <div className="flex gap-2 mt-4">
            {gallery.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  idx === currentIndex ? "bg-custom-primary" : "bg-gray-500"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
              ></span>
            ))}
          </div> */}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
