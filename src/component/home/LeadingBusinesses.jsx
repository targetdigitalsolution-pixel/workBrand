import React from "react";
import Slider from "react-slick";
import MainTittle from "../sharedComponents/MainTittle";
import BusinessesCard from "../home/BusinessesCard";
import Nextlogic from "../../assets/images/Nextlogic.webp";
import TV from "../../assets/Icons/TV.svg";
import ByteForge_Company from "../../assets/images/ByteForge_Company.webp";
import AIOrbit_Company from "../../assets/images/AIOrbit_Company.webp";
import NeoWare_Company from "../../assets/images/NeoWare_Company.webp";
import CyberHive_Company from "../../assets/images/CyberHive_Company.webp";
import CodeNova_Comp from "../../assets/images/CodeNova_Comp.webp";
import Marketing_Media from "../../assets/images/Marketing_Media.png";
import Training_Education from "../../assets/Icons/Training_Education.svg";
import e_commerce from "../../assets/Icons/e-commerce.svg";
import bg_blackdottit from "../../assets/images/bg_blackdottit.webp";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { fadeInPlace, zoomIn } from "../../utils/motionVariants";

export default function LeadingBusinesses() {
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute left-0 z-10 p-2 duration-300 -translate-y-1/2 rounded-full shadow bg-custom-primary hover:bg-opacity-80 top-1/2"
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
        className="absolute right-0 z-10 p-2 duration-300 -translate-y-1/2 rounded-full shadow bg-custom-primary hover:bg-opacity-80 top-1/2"
        onClick={onClick}
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>
    );
  };
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      className="py-12 pb-16 bg-no-repeat bg-contain md:px-12 bg-mobile md:bg-desktop leading-businesses-section"
      style={{
        backgroundImage: `url(${bg_blackdottit})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <style jsx>{`
        .leading-businesses-section {
          clip-path: ellipse(85% 50% at 50% 50%);
        }

        @media (max-width: 768px) {
          .leading-businesses-section {
            clip-path: ellipse(150% 50% at 50% 50%);
          }
        }
      `}</style>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInPlace}
      >
        <MainTittle
          title="Trusted by Leading Businesses"
          description="Hear from entrepreneurs who transformed their dreams into reality through our expert guidance"
          colorDesc="white"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={zoomIn}
      >
        <Slider {...settings} className="mt-10 max-container">
          <div className="px-4 pb-8">
            <BusinessesCard
              icon={TV}
              title="Tech & IT"
              items={[
                { icon: Nextlogic, text: "NextLogic Company" },
                { icon: ByteForge_Company, text: "CodeNova Comp." },
                { icon: AIOrbit_Company, text: "CyberHive Company" },
                { icon: NeoWare_Company, text: " NeoWare Company" },
                { icon: CyberHive_Company, text: "AIOrbit Company" },
                { icon: CodeNova_Comp, text: " ByteForge Company" },
              ]}
            />
          </div>

          <div className="px-4">
            <BusinessesCard
              icon={Marketing_Media}
              title="Marketing & Media"
              items={[
                { icon: ByteForge_Company, text: "PixelVibe Studios" },
                { icon: CyberHive_Company, text: "GlowMedia Comp." },
                { icon: AIOrbit_Company, text: "AdShift Company" },
                { icon: NeoWare_Company, text: " Echo Agency" },
                { icon: Nextlogic, text: "Brandfluence Comp." },
                { icon: CodeNova_Comp, text: " ContentCraft" },
              ]}
            />
          </div>

          <div className="px-4">
            <BusinessesCard
              icon={Training_Education}
              title="Training & Education"
              items={[
                { icon: ByteForge_Company, text: "TrainEdge Company" },
                { icon: AIOrbit_Company, text: "CodeLift Company" },
                { icon: NeoWare_Company, text: " EduForward Comp." },
                { icon: CyberHive_Company, text: "TalkPro Company" },
                { icon: CodeNova_Comp, text: " FuturePath Comp." },
                { icon: Nextlogic, text: "SkillRise Academy" },
              ]}
            />
          </div>

          <div className="px-4">
            <BusinessesCard
              icon={e_commerce}
              title="E-commerce"
              items={[
                { icon: ByteForge_Company, text: "Gadgetry Company" },
                { icon: AIOrbit_Company, text: "GreenBox Company" },
                { icon: NeoWare_Company, text: " BakeHouse Comp." },
                { icon: CyberHive_Company, text: "PrintBee Company" },
                { icon: Nextlogic, text: "ShopNest Company" },
                { icon: CodeNova_Comp, text: "Toysify Company" },
              ]}
            />
          </div>
        </Slider>
      </motion.div>
    </section>
  );
}
