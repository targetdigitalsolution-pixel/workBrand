import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainTittle from "../sharedComponents/MainTittle";
import ProductCard from "../home/ProductCard";
import Premium_Notebook from "../../assets/images/Premium_Notebook.webp";
import Showcase_Your_Products_bg from "../../assets/images/Showcase_Your_Products_bg.webp";
import Jumia from "../../assets/images/Jumia.webp";
import Calligraphy_Pen_Set from "../../assets/images/Calligraphy_Pen_Set.webp";
import Ink_Masters from "../../assets/images/Ink_Masters.webp";
import Leather_Journal from "../../assets/images/Leather_Journal.webp";
import Artisan_Designs from "../../assets/images/Artisan_Designs.webp";
import Stainless_Water_Bottle from "../../assets/images/Stainless_Water_Bottle.webp";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { fadeInPlace, fadeInUp } from "../../utils/motionVariants";
import { useNavigate } from "react-router-dom";

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-0 z-10 hidden p-2 duration-300 -translate-y-1/2 rounded-full shadow bg-custom-primary hover:bg-opacity-80 top-1/2 lg:block"
      onClick={onClick}
    >
      <ChevronLeftIcon className="w-6 h-6 text-white" />
    </button>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-0 z-10 hidden block p-2 duration-300 -translate-y-1/2 rounded-full shadow bg-custom-primary hover:bg-opacity-80 top-1/2 lg:block"
      onClick={onClick}
    >
      <ChevronRightIcon className="w-6 h-6 text-white" />
    </button>
  );
};
const ProductSection = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: "0px",
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const products = [
    {
      photo: Premium_Notebook,
      title: "Premium Notebook",
      description:
        "A durable, hardcover notebook with lined pages and an embossed logo, perfect ...",
      authorName: "By Jumia Store",
      avatar: Jumia,
      salary: "30 $",
      reviewCount: 15,
      buttonText: "Add To Cart",
      iconbutton: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      ),
    },
    {
      photo: Calligraphy_Pen_Set,
      title: "Calligraphy Pen Set",
      description:
        "A set of specialized calligraphy pens for elegant writing and artistic designs",
      authorName: "By Ink Masters",
      avatar: Ink_Masters,
      salary: "28$",
      reviewCount: 20,
      buttonText: "Add To Cart",
      iconbutton: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      ),
    },
    {
      photo: Leather_Journal,
      title: "Leather Journal",
      description:
        "A luxurious leather-bound journal with blank pages, ideal for sketching and note-taking",
      authorName: "By Artisan Designs",
      avatar: Artisan_Designs,
      salary: "30$",
      reviewCount: 25,
      buttonText: "Add To Cart",
      iconbutton: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      ),
    },
    {
      photo: Stainless_Water_Bottle,
      title: "Stainless Water Bottle",
      description:
        "A sleek water bottle  bottle  with a secure lid, perfect for staying hydrated on the go",
      authorName: "By Outdoor Gear Co.",
      avatar: Stainless_Water_Bottle,
      salary: "15$",
      reviewCount: 5,
      buttonText: "Add To Cart",
      iconbutton: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      ),
    },
  ];
  const navigate = useNavigate();

  return (
    <section
      className="pt-12 pb-12"
      style={{
        backgroundImage: `url(${Showcase_Your_Products_bg})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <svg
        className="absolute bottom-0 left-0 w-full h-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0,100 Q50,0 100,100 Z" fill="white" />
      </svg> */}
      <div className="mb-12 max-container xl:px-0">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInPlace}
        >
          <MainTittle
            title="Showcase Your Products"
            description="Our clients can display and sell their offerings through our premium digital store — with full support from branding to logistics."
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="relative">
            <Slider {...settings}>
              {products.map((product, index) => (
                <div key={index} className="p-4">
                  <ProductCard
                    {...product}
                    onButtonClick={() => navigate("/coming-soon")}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
