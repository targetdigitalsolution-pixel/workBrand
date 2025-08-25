import React from "react";
import MainTitle from "../sharedComponents/MainTittle";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { fadeInPlace, fadeInUp } from "../../utils/motionVariants";

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "Virtual Office",
      description: "Professional business address with mail handling and legal registration support.",
      features: [
        "Business address registration",
        "Mail forwarding service",
        "Legal documentation support",
        "Phone answering service"
      ],
      image: "/api/placeholder/400/300",
      buttonText: "Learn More"
    },
    {
      id: 2,
      title: "Private Office",
      description: "Fully equipped private offices in prime locations for focused work and meetings.",
      features: [
        "24/7 secure access",
        "High-speed internet",
        "Premium furniture",
        "Meeting room access"
      ],
      image: "/api/placeholder/400/300",
      buttonText: "Book Now"
    },
    {
      id: 3,
      title: "Meeting Rooms",
      description: "Professional meeting spaces equipped with modern technology for your business needs.",
      features: [
        "Video conferencing setup",
        "Presentation equipment",
        "Flexible booking",
        "Catering services"
      ],
      image: "/api/placeholder/400/300",
      buttonText: "Reserve"
    },
    {
      id: 4,
      title: "Training Rooms",
      description: "Spacious training facilities perfect for workshops, seminars, and corporate events.",
      features: [
        "Flexible seating arrangements",
        "Audio/visual equipment",
        "Whiteboard and projectors",
        "Breakout areas"
      ],
      image: "/api/placeholder/400/300",
      buttonText: "Book Training"
    }
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
          description="Choose from our comprehensive range of business solutions tailored to your needs"
        />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:px-0">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesGrid;