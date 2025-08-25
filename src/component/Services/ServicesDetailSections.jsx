import React from "react";
import { motion } from "framer-motion";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import LightButton from "../sharedComponents/LightButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { leftVariant, rightVariant } from "../../utils/motionVariants";
import { useNavigate } from "react-router-dom";

// Import images
import virtualOfficeImg from "../../assets/images/Premium_Notebook.webp";
import privateOfficeImg from "../../assets/images/Calligraphy_Pen_Set.webp";
import meetingRoomsImg from "../../assets/images/Leather_Journal.webp";
import trainingRoomsImg from "../../assets/images/Training_Programs.webp";

const ServicesDetailSections = () => {
  const navigate = useNavigate();

  const servicesData = [
    {
      id: 1,
      title: "Virtual Office",
      subtitle: "Solutions",
      description: "Work remotely while maintaining a prestigious business address and professional presence in Cairo's prime locations.",
      features: [
        "Legal business registration address",
        "Professional mail handling services", 
        "Call forwarding and reception services",
        "Access to meeting rooms when needed"
      ],
      image: virtualOfficeImg,
      buttonText: "Get Virtual Office",
      secondButtonText: "Learn More",
      backgroundColor: "bg-custom-gradient-dark",
      textColor: "text-white",
      layout: "left" // image on left, content on right
    },
    {
      id: 2,
      title: "Private Office",
      subtitle: "Spaces",
      description: "Fully equipped private offices in premium locations, designed for productivity and professional growth.",
      features: [
        "Fully furnished private workspace",
        "High-speed internet and utilities included",
        "24/7 secure access to your office",
        "Professional business address"
      ],
      image: privateOfficeImg,
      buttonText: "Book Private Office",
      secondButtonText: "View Locations",
      backgroundColor: "bg-custom-gradient-dark",
      textColor: "text-white",
      layout: "right" // content on left, image on right
    },
    {
      id: 3,
      title: "Meeting Rooms",
      subtitle: "& Conference Facilities",
      description: "Professional meeting spaces equipped with modern technology for presentations, client meetings, and team collaborations.",
      features: [
        "State-of-the-art presentation equipment",
        "High-speed WiFi and video conferencing",
        "Flexible booking by hour or day",
        "Professional reception services"
      ],
      image: meetingRoomsImg,
      buttonText: "Book Meeting Room",
      secondButtonText: "View Facilities",
      backgroundColor: "bg-custom-gradient-bg",
      textColor: "text-black",
      layout: "left" // image on left, content on right
    },
    {
      id: 4,
      title: "Training Rooms",
      subtitle: "& Workshop Spaces",
      description: "Spacious training facilities perfect for workshops, seminars, and corporate training programs with all necessary amenities.",
      features: [
        "Flexible seating arrangements",
        "Audio-visual equipment included",
        "Catering services available",
        "Parking facilities for attendees"
      ],
      image: trainingRoomsImg,
      buttonText: "Book Training Room",
      secondButtonText: "View Packages",
      backgroundColor: "bg-custom-gradient-bg", 
      textColor: "text-black",
      layout: "right" // content on left, image on right
    }
  ];

  return (
    <section className="mb-12">
      {servicesData.map((service, index) => (
        <div key={service.id} className={`${service.backgroundColor} py-16 mb-0`}>
          <div className="max-container">
            <div className="grid items-center grid-cols-1 lg:grid-cols-12">
              {/* Content Section */}
              <motion.div
                className={`flex flex-col justify-center col-span-6 lg:m-0 ${
                  service.layout === "left" 
                    ? "lg:pl-[50px] lg:order-2 order-1" 
                    : "lg:pr-[50px] lg:order-1 order-1"
                }`}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={service.layout === "left" ? leftVariant : rightVariant}
              >
                <h2 className={`flex justify-center pb-2 mb-4 text-3xl font-bold text-center lg:text-left lg:text-5xl bg-custom-gradient-orange bg-clip-text text-transparent`}>
                  {service.title} <br />
                  <span className={`${service.textColor}`}>{service.subtitle}</span>
                </h2>
                
                <div className={`block lg:hidden mb-8`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-[400px] rounded-lg shadow-md"
                  />
                </div>

                <main className={`px-4 text-center lg:text-start xl:px-0 ${service.textColor}`}>
                  <p className="text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-custom-primary rounded-full flex-shrink-0"></div>
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </main>

                <div className="flex justify-center w-full gap-4 px-4 mt-5 lg:justify-start lg:px-0">
                  <div className="w-auto">
                    <CustomMainButton
                      fullWidth
                      text={service.buttonText}
                      onClick={() => navigate("/coming-soon")}
                    />
                  </div>
                  <div className="w-auto">
                    <LightButton
                      onClick={() => navigate("/coming-soon")}
                      text={service.secondButtonText}
                      TripleArrow={
                        <TripleArrowIcon
                          color={"custom-primary"}
                          hoverColor={"white"}
                        />
                      }
                    />
                  </div>
                </div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                className={`col-span-6 hidden lg:block ${
                  service.layout === "left" 
                    ? "lg:order-1" 
                    : "lg:order-2"
                }`}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={service.layout === "left" ? rightVariant : leftVariant}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-[500px] rounded-lg shadow-md"
                />
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesDetailSections;