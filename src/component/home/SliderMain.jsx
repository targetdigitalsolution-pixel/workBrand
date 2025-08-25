import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider_img__1 from "../../assets/images/slider_img_-1.webp";
import slider_img_1 from "../../assets/images/slider_img_1.webp";
import slider_img_2 from "../../assets/images/slider_img_2.webp";
import slider_img_3 from "../../assets/images/slider_img_3.webp";
import slider_img_4 from "../../assets/images/slider_img_4.webp";
import left_side_image from "../../assets/images/left_side_image.webp";
import right_side_image from "../../assets/images/right_side_image.webp";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  containerVariants,
  imageVariants,
  variantsCenter,
  variantsLeft,
  variantsRight,
} from "../../utils/motionVariants";

const slides = [
  {
    id: "hero",
    type: "hero",
    title: "Transform Your \n Vision Into \n",
    subtitle: "Digital Reality",
    description:
      "Empowering entrepreneurs with cutting-edge solutions. From idea to execution, we're your digital transformation partner.",
    button: "Discover Our Solutions",
    link: "/solutions",
    position: "center",
    theme: "gradient",
  },
  {
    image: slider_img_1,
    title: "Start Your Business \n Journey with Your \n",
    subtitle: "Smart Office",
    description:
      "Choose your plan and start from anywhere. Transform your entrepreneurial dreams into reality.",
    button: "Start Now",
    link: "/coming-soon",
    position: "left",
  },
  {
    image: slider_img_2,
    title: "Expert Guidance \n At Every Step ",
    description:
      "From legal setup to business growth, our consultants help you move with confidence. ",
    button: "Book a Consultation ",
    link: "/coming-soon",
    position: "right",
  },
  {
    image: slider_img_3,
    title: "Your Website \n Ready in ",
    subtitle: "One Click",
    description:
      "Pick from smart blocks or let AI build it for you. No coding skills required.",
    button: "Try It Now",
    link: "/coming-soon",
    position: "left",
  },
  {
    image: slider_img_4,
    title: "Digital Services \n That Empower \n Your Business",
    description:
      "Launch faster, look sharper, and grow smarter with AI-powered digital tools tailored for entrepreneurs.",
    button: "Explore Digital Tools",
    link: "/coming-soon",
    position: "right",
  },
];

export default function SliderMain() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Services data to match the image
  const services = [
    {
      title: "Office Spaces",
      subtitle: "Rentals",
      position: "top-left",
      delay: "300ms",
    },
    {
      title: "Business",
      subtitle: "Consulting",
      position: "top-right",
      delay: "300ms",
    },
    {
      title: "Marketing",
      subtitle: "Services",
      position: "middle-left",
      delay: "300ms",
    },
    {
      title: "Website",
      subtitle: "Creation",
      position: "middle-right",
      delay: "300ms",
    },
    {
      title: "Store",
      subtitle: "Solutions",
      position: "bottom-left",
      delay: "300ms",
    },
    {
      title: "Training",
      subtitle: "Programs",
      position: "bottom-right",
      delay: "300ms",
    },
  ];

  const renderHeroSlide = (slide, index) => {
    return (
      <div className="h-[93vh] min-h-[600px] max-h-[93vh] relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${slider_img__1})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <AnimatePresence mode="wait">
          {activeIndex === index && (
            <motion.div
              key={`hero-slide-${index}`}
              className="w-full max-w-[1200px] mx-auto px-8 relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Services Layout */}
              <div className="relative flex items-center justify-center h-[45%] min-h-[452px]">
                {/* Top Left */}
                <motion.div
                  className="absolute left-0 text-center text-white duration-300 cursor-pointer top-5 hover:text-custom-primary"
                  variants={variantsRight}
                  custom={0.2}
                  layout
                  style={{ willChange: "transform, opacity" }}
                >
                  <h3 className="text-xl font-bold lg:text-3xl">
                    {services[0].title}
                  </h3>
                  <p className="text-xl font-bold lg:text-3xl">
                    {services[0].subtitle}
                  </p>
                </motion.div>

                {/* Top Right */}
                <motion.div
                  className="absolute right-0 text-center text-white duration-300 cursor-pointer top-5 hover:text-custom-primary"
                  variants={variantsLeft}
                  custom={0.2}
                  style={{ willChange: "transform, opacity" }}
                >
                  <h3 className="text-xl font-bold lg:text-3xl">
                    {services[1].title}
                  </h3>
                  <p className="text-xl font-bold lg:text-3xl">
                    {services[1].subtitle}
                  </p>
                </motion.div>

                {/* Middle Left */}
                <motion.div
                  className="absolute md:left-16 text-white transform md:-translate-y-1/2 md:top-[47%] top-[63%] text-center hover:text-custom-primary duration-300 cursor-pointer"
                  variants={variantsRight}
                  custom={0.2}
                  style={{ willChange: "transform, opacity" }}
                >
                  <h3 className="text-xl font-bold lg:text-3xl">
                    {services[2].title}
                  </h3>
                  <p className="text-xl font-bold lg:text-3xl">
                    {services[2].subtitle}
                  </p>
                </motion.div>

                {/* Middle Right */}
                <motion.div
                  className="absolute md:right-16 text-white transform md:-translate-y-1/2 md:top-[47%] top-[23%] text-center hover:text-custom-primary duration-300 cursor-pointer"
                  variants={variantsLeft}
                  custom={0.2}
                  style={{ willChange: "transform, opacity" }}
                >
                  <h3 className="text-xl font-bold lg:text-3xl">
                    {services[3].title}
                  </h3>
                  <p className="text-xl font-bold lg:text-3xl">
                    {services[3].subtitle}
                  </p>
                </motion.div>

                {/* Bottom Left */}
                <motion.div
                  className="absolute left-0 text-center text-white duration-300 cursor-pointer md:bottom-5 bottom-8 hover:text-custom-primary"
                  variants={variantsRight}
                  custom={0.2}
                  style={{ willChange: "transform, opacity" }}
                >
                  <h3 className="text-xl font-bold lg:text-3xl">
                    {services[4].title}
                  </h3>
                  <p className="text-xl font-bold lg:text-3xl">
                    {services[4].subtitle}
                  </p>
                </motion.div>

                {/* Bottom Right */}
                <motion.div
                  className="absolute right-0 text-center text-white duration-300 cursor-pointer md:bottom-5 bottom-8 hover:text-custom-primary"
                  variants={variantsLeft}
                  custom={0.2}
                  style={{ willChange: "transform, opacity" }}
                >
                  <h3 className="text-xl font-bold lg:text-3xl">
                    {services[5].title}
                  </h3>
                  <p className="text-xl font-bold lg:text-3xl">
                    {services[5].subtitle}
                  </p>
                </motion.div>

                {/* Center Section */}
                <div className="z-10 flex items-center justify-center gap-2 text-center text-white duration-300 cursor-pointer hover:text-custom-primary">
                  {/* Left Side Image */}
                  <motion.img
                    src={left_side_image}
                    alt="Left decoration"
                    className="hidden object-contain w-20 h-20 lg:w-80 lg:h-auto lg:block"
                    variants={imageVariants}
                    custom={0.2}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />

                  {/* Center Text */}
                  <h1 className="flex flex-col mb-4 text-center">
                    <motion.span
                      className="text-4xl font-bold text-custom-primary lg:text-5xl"
                      variants={variantsCenter}
                      custom={0.2}
                    >
                      360°
                    </motion.span>
                    <motion.span
                      className="text-2xl text-custom-primary lg:text-3xl"
                      variants={variantsCenter}
                      custom={0.2}
                    >
                      Services
                    </motion.span>
                  </h1>

                  {/* Right Side Image */}
                  <motion.img
                    src={right_side_image}
                    alt="Right decoration"
                    className="hidden object-contain w-20 h-20 lg:w-80 lg:h-auto lg:block"
                    variants={imageVariants}
                    custom={0.2}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const renderRegularSlide = (slide, index) => (
    <div
      className="h-[93vh] min-h-[600px] max-h-[93vh] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
      {showContent && activeIndex === index && (
        <div className="w-[1200px]">
          <div
            className={`w-full text-white lg:px-16 md:px-12 px-8 py-8 transition-all duration-1000 ease-out opacity-0 animate flex ${
              slide.position === "left"
                ? "animate-fade-in-left items-start text-left justify-start"
                : slide.position === "right"
                ? "animate-fade-in-right justify-end"
                : ""
            }`}
          >
            <div className="max-w-[625px]">
              <h2 className="mb-4 text-3xl font-bold md:text-7xl">
                {slide.title.split("\n").map((line, idx) => (
                  <span key={idx} className="">
                    {line}
                    {!(idx === slide.title.split("\n").length - 1) && <br />}
                  </span>
                ))}
                {slide.subtitle && (
                  <span className="inline-block text-custom-yellow">
                    {slide.subtitle}
                  </span>
                )}
              </h2>
              <p className="mb-6 text-lg md:text-xl">{slide.description}</p>
              <button
                className="relative inline-flex items-center justify-center gap-2 px-6 py-2 overflow-hidden font-semibold text-black transition duration-300 rounded-md group"
                onClick={() => navigate(slide.link)}
              >
                <span className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 bg-custom-gradient-yellow group-hover:opacity-0"></span>
                <span className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 bg-custom-gradient-white group-hover:opacity-100"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <span className="">{slide.button}</span>
                  <TripleArrowIcon
                    color={"black"}
                    className="transition-colors duration-300 group-hover:text-black"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="relative mb-12">
      {/* Custom CSS Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          45% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          45% {
            transform: translateY(-30px) rotate(-180deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          45% {
            transform: translateY(-15px);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          45% {
            transform: translateY(-25px) scale(1.1);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 45%;
          }
          45% {
            background-position: 100% 45%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-900 {
          animation-delay: 0.9s;
        }
        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
      `}</style>

      <div className="absolute inset-0 z-10 px-4 pointer-events-none max-container">
        <div className="absolute inset-0 z-10 items-center justify-between hidden px-4 pointer-events-none lg:flex">
          <button
            className="p-3 transition duration-300 rounded-full shadow-md pointer-events-auto bg-white/25 hover:bg-white/50"
            id="custom-prev"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>
          <button
            className="p-3 transition duration-300 rounded-full shadow-md pointer-events-auto bg-white/25 hover:bg-white/50"
            id="custom-next"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <Swiper
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          setActiveIndex(swiper.realIndex);
          setShowContent(true);
        }}
        onSlideChange={(swiper) => {
          setShowContent(false);
          setTimeout(() => {
            setActiveIndex(swiper.realIndex);
            setShowContent(true);
          }, 500);
        }}
        pagination={{ dynamicBullets: true }}
        navigation={{
          nextEl: "#custom-next",
          prevEl: "#custom-prev",
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.type === "hero"
              ? renderHeroSlide(slide, index)
              : renderRegularSlide(slide, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
