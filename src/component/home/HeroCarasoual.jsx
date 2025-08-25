import React from "react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import MainTittle from "../sharedComponents/MainTittle";
import bghero from "../../assets/images/bg-herocarasoual.webp";
import bg_hero1 from "../../assets/images/bg_hero1.webp";
import bg_hero2 from "../../assets/images/bg_hero2.webp";
import bg_hero3 from "../../assets/images/bg_hero3.webp";
import bg_hero4 from "../../assets/images/bg_hero4.webp";
import bg_hero5 from "../../assets/images/bg_hero5.webp";
import bg_hero6 from "../../assets/images/bg_hero6.webp";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { motion } from "framer-motion";
import { fadeInUp, fadeInPlace } from "../../utils/motionVariants";
import { useNavigate } from "react-router-dom";

const HeroCarousel = () => {
  const slides = [
    {
      image: bg_hero1,
      title: "Your Office, Reimagined",
      description:
        "Flexibility starts at your desk Rent your private office or coworking space in a professional environment designed to help you focus and grow.",
      buttonText: "Book Your Space",
      link: "coming-soon",
    },
    {
      image: bg_hero2,
      title: "Legal Documents",
      description:
        "We handle all your legal paperwork, licenses, and documentation — so you’re fully compliant and good to go.",
      buttonText: "Get Legal Support",
      link: "coming-soon",
    },
    {
      image: bg_hero3,
      title: "Financial Consulting",
      description:
        "Expert financial consultations for cash flow, budgeting, and business stability — tailored to your model.",
      buttonText: "Schedule a Finance Session",
      link: "coming-soon",
    },
    {
      image: bg_hero4,
      title: "Branding & Marketing",
      description:
        "From your name and logo to your first campaign — we craft your identity and launch your voice to the market.",
      buttonText: "Build Your Brand",
      link: "coming-soon",
    },
    {
      image: bg_hero5,
      title: "Sell on Our Store",
      description:
        "Feature your products on our digital store and reach thousands of clients through our platform.",
      buttonText: "Feature Your Products",
      link: "coming-soon",
    },
    {
      image: bg_hero6,
      title: "Business Networking",
      description:
        "We introduce you to top entrepreneurs and serious business players — build valuable partnerships and grow.",
      buttonText: "Join Our Network",
      link: "coming-soon",
    },
  ];

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute z-10 -translate-y-1/2 right-5 top-1/2"
    >
      <ChevronRightIcon className="hidden w-12 h-12 text-white transition hover:text-custom-primary md:block" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute z-10 -translate-y-1/2 left-5 top-1/2"
    >
      <ChevronLeftIcon className="hidden w-12 h-12 text-white transition hover:text-custom-primary md:block" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "15%",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  };
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full py-24 mb-12 text-center bg-center bg-no-repeat hero-section"
      style={{
        backgroundImage: `url(${bghero})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <style jsx>{`
        .hero-section {
          clip-path: ellipse(100% 50% at 50% 50%);
        }

        @media (max-width: 768px) {
          .hero-section {
            clip-path: ellipse(150% 50% at 50% 50%);
          }
        }
        .hero-section .slick-dots {
          margin-top: 2rem;
        }
        .slick-slide .bg-black {
          transition: all 1.5s ease-in-out;
        }

        .slick-slide.slick-active .bg-black {
          background: transparent;
          // z-index:0;
        }
        .hero-section .overlay {
          opacity: 1;
          visibility: visible;
          transition: opacity 1.5s ease-in-out, visibility 1.5s ease-in-out;
        }

        .hero-section .slick-active .overlay {
          opacity: 0;
          visibility: hidden;
        }
      `}</style>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInPlace}
      >
        <MainTittle
          title="Everything You Need, In One Place"
          description="All-In-One Hub For Office Spaces, Business Consultations, Media,
        Training Programs, Websites, ECommerce, Innovation, And Success"
          colorDesc="white"
        />
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="relative mt-10 ">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="">
                <div className="relative w-full md:w-[90%] rounded-[50px]  shadow-md-black ">
                  <div className="absolute inset-0 z-10 bg-black bg-opacity-70 rounded-[50px] lg:px-0 overlay lg:mx-0 mx-4"></div>
                  <div className="relative w-full">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full rounded-[50px] object-cover lg:max-h-[400px] max-h-[275px] min-h-[275px] lg:px-0 px-4"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 rounded-[50px] bg-black/30 lg:mx-0 mx-4"></div>
                  </div>

                  <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col justify-center p-12 md:text-left text-center h-[300px] md:translate-x-16 translate-x-0">
                    <h3 className="text-xl font-medium text-white md:text-2xl lg:text-4xl">
                      {slide.title}
                    </h3>
                    <p className="w-full my-2 text-sm text-gray-200 md:text-base md:w-1/2 ">
                      {slide.description}
                    </p>
                    <div className="flex justify-center w-full my-2 md:justify-start">
                      {/* <CustomMainButton text={slide.buttonText} /> */}
                      <button
                        className="relative inline-flex items-center justify-center gap-2 px-6 py-2 overflow-hidden font-semibold text-black transition duration-300 rounded-md group"
                        onClick={() => navigate("/coming-soon")}
                      >
                        <span className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 bg-custom-gradient-yellow group-hover:opacity-0"></span>

                        <span className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 bg-custom-gradient-white group-hover:opacity-100"></span>

                        <span className="relative z-10 flex items-center gap-2">
                          <span className="">{slide.buttonText}</span>
                          <TripleArrowIcon
                            color={"black"}
                            className="transition-colors duration-300 group-hover:text-black"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroCarousel;
