import React from "react";
import { motion } from "framer-motion";
import MainTitle from "../sharedComponents/MainTittle";
import { fadeInPlace, fadeInUp } from "../../utils/motionVariants";
import {
  BuildingOfficeIcon,
  DocumentTextIcon,
  PhoneIcon,
  ClockIcon,
  ShieldCheckIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";

const WhyChooseVirtualOffice = () => {
  const features = [
    {
      icon: <BuildingOfficeIcon className="w-12 h-12 text-custom-primary" />,
      title: "Prestigious Business Address",
      description: "Get a professional business address in Cairo's prime locations for company registration and credibility."
    },
    {
      icon: <DocumentTextIcon className="w-12 h-12 text-custom-primary" />,
      title: "Professional Mail Handling",
      description: "We receive, scan, and forward your business mail efficiently, keeping you connected wherever you are."
    },
    {
      icon: <PhoneIcon className="w-12 h-12 text-custom-primary" />,
      title: "Call Forwarding & Reception",
      description: "Professional call handling and forwarding services to ensure you never miss important business calls."
    },
    {
      icon: <ClockIcon className="w-12 h-12 text-custom-primary" />,
      title: "24/7 Business Support",
      description: "Round-the-clock support for your virtual office needs, ensuring your business runs smoothly."
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-custom-primary" />,
      title: "Legal Compliance Support",
      description: "Complete assistance with business registration, licensing, and legal documentation requirements."
    },
    {
      icon: <MapPinIcon className="w-12 h-12 text-custom-primary" />,
      title: "Access to Meeting Rooms",
      description: "Book professional meeting rooms and conference facilities whenever you need face-to-face meetings."
    }
  ];

  return (
    <section className="py-16 mb-12 bg-custom-gradient-dark">
      <div className="max-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInPlace}
        >
          <MainTitle
            title="Why Choose Our"
            subdescription="Virtual Offices?"
            description="Discover the advantages of our comprehensive virtual office solutions designed for modern businesses"
            colorDesc="white"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseVirtualOffice;