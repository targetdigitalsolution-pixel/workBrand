import React from "react";
import MainTitle from "../sharedComponents/MainTittle";
import ServicesHeroCard from "./ServicesHeroCard";
import { motion } from "framer-motion";
import { fadeInPlace, fadeInUp } from "../../utils/motionVariants";
import office_space from "../../assets/images/office_space.webp";
import bussiness_development from "../../assets/images/bussiness_development.webp";
import media_service from "../../assets/images/media_service.webp";
import website_creation from "../../assets/images/website_creation.webp";
import Training_program from "../../assets/images/Training_program.webp";
import Ecommerce_store from "../../assets/images/Ecommerce_store.webp";

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      img: office_space,
      title: "Office Spaces Solutions",
      description: "Virtual and Private Offices, Training and Meeting Rooms, Integrated work environment",
      buttonText: "Book a Space",
    },
    {
      id: 2,
      img: bussiness_development,
      title: "Business development consulting",
      description: "Our experts are available to develop your business and drive your organizations success",
      buttonText: "Get a Consultation",
    },
    {
      id: 3,
      img: media_service,
      title: "Media Services",
      description: "Our motto: Make it Real. We bring your media ideas to life—from concept to full successful campaigns",
      buttonText: "Boost Your Brand",
    },
    {
      id: 4,
      img: website_creation,
      title: "Website Creation",
      description: "Custom-built, innovative, and responsive websites that effectively represent your business",
      buttonText: "Create Your Site",
    },
    {
      id: 5,
      img: Training_program,
      title: "Training Programs",
      description: "Programs for every business enthusiast—from admin prep to business development and more",
      buttonText: "Explore Training",
    },
    {
      id: 6,
      img: Ecommerce_store,
      title: "ECommerce Store Solutions",
      description: "Launch, sell, and manage your products through your own store",
      buttonText: "Launch My Store",
    },
  ];

  return (
    <section className="mb-12 max-container xl:px-0">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInPlace}
      >
        <MainTitle
          title="Our Core"
          subdescription="Services"
          description="Comprehensive solutions designed to accelerate your business growth"
        />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:px-0">
          {services.map((service) => (
            <ServicesHeroCard key={service.id} service={service} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesGrid;