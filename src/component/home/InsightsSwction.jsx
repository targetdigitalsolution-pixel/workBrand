import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainTitle from "../sharedComponents/MainTittle";
import InsightsCard from "../home/InsightsCard";
import Egypt from "../../assets/images/Egypt.webp";
import Works_Best from "../../assets/images/Works_Best.webp";
import Online_Presence from "../../assets/images/Online_Presence.webp";
import { fadeInPlace, fadeInUp } from "../../utils/motionVariants";
import { motion } from "framer-motion";

export default function InsightsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768, // للموبايل
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="my-12 max-container xl:px-0">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInPlace}
      >
        <MainTitle
          title="Business "
          subdescription="Insights"
          description="Expert advice and insights to help — your business"
        />
      </motion.div>
      {/* Grid Desktop */}
      <motion.div
        className="hidden grid-cols-3 gap-8 px-4 py-6 lg:grid md:px-0"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <InsightsCard
          image={Egypt}
          title="5 Essential Steps to Launch Your Startup in Egypt"
        />
        <InsightsCard
          image={Works_Best}
          title="Virtual vs Physical Office: What Works Best?"
        />
        <InsightsCard
          image={Online_Presence}
          title="Building Your Online Presence in 2025"
        />
      </motion.div>
      <motion.div
        className=""
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Carousel Mobile & Tablet*/}
        <div className="lg:hidden">
          <Slider {...settings} className="pb-4">
            <div className="p-4">
              <InsightsCard
                image={Egypt}
                title="5 Essential Steps to Launch Your Startup in Egypt"
              />
            </div>
            <div className="p-4">
              <InsightsCard
                image={Works_Best}
                title="Virtual vs Physical Office: What Works Best?"
              />
            </div>
            <div className="p-4">
              <InsightsCard
                image={Online_Presence}
                title="Building Your Online Presence in 2025"
              />
            </div>
          </Slider>
        </div>
      </motion.div>
    </section>
  );
}
