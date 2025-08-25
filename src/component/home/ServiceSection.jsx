import React from "react";
import MainTitle from "../sharedComponents/MainTittle";
import CardService from "../home/CardService";
import office_space from "../../assets/images/office_space.webp";
import bussiness_development from "../../assets/images/bussiness_development.webp";
import media_service from "../../assets/images/media_service.webp";
import website_creation from "../../assets/images/website_creation.webp";
import Training_program from "../../assets/images/Training_program.webp";
import Ecommerce_store from "../../assets/images/Ecommerce_store.webp";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fadeInPlace, fadeInUp } from "../../utils/motionVariants";

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      img: office_space,
      title: "Office Spaces Solutions",
      description:
        "Virtual and Private Offices, Training and Meeting Rooms,Integrated work environment",
      buttonText: "Book a Space",
    },
    {
      id: 2,
      img: bussiness_development,
      title: "Business development consulting",
      description:
        "Our experts are available to develop your business and drive your organizations success",
      buttonText: "Get a Consultation",
    },
    {
      id: 3,
      img: media_service,
      title: "Media Services",
      description:
        "Our motto: Make it Real. We bring your media ideas to life—from concept to full successful campaigns",
      buttonText: "Boost Your Brand",
    },
    {
      id: 4,
      img: website_creation,
      title: "Website Creation",
      description:
        "Custom-built, innovative, and responsive websites that effectively represent your business .",
      buttonText: "Create Your Site",
    },
    {
      id: 5,
      img: Training_program,
      title: "Training Programs",
      description:
        "Programs for every business enthusiast—from admin prep to business development and more",
      buttonText: "Explore Training",
    },
    {
      id: 6,
      img: Ecommerce_store,
      title: "ECommerce Store Solutions",
      description:
        "Launch, sell, and manage your products through your own store.",
      buttonText: "Launch My Store",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <section className="mb-12 xl:px-0 max-container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInPlace}
      >
        <MainTitle
          title="Our Core Services"
          description="Comprehensive solutions designed to accelerate your business growth"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="hidden mb-4 md:block">
          <CardService data={services} />
        </div>

        <div className="block md:hidden">
          <Slider {...sliderSettings}>
            {services.map((service) => (
              <div key={service.id} className="p-4 mb-4">
                <CardService data={[service]} />
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
