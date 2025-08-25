import React from "react";
import MainTitle from "../sharedComponents/MainTittle";
import { motion } from "framer-motion";
import { fadeInPlace, fadeInUp } from "../../utils/motionVariants";
import {
  BuildingOfficeIcon,
  ClockIcon,
  WifiIcon,
  ShieldCheckIcon,
  PhoneIcon,
  DocumentTextIcon,
  UsersIcon,
  CameraIcon
} from "@heroicons/react/24/outline";

const ServiceFeatures = () => {
  const features = [
    {
      icon: <BuildingOfficeIcon className="w-12 h-12 text-custom-primary" />,
      title: "Prime Locations",
      description: "Strategic addresses in Mohandessin and Nasr City business districts"
    },
    {
      icon: <ClockIcon className="w-12 h-12 text-custom-primary" />,
      title: "24/7 Access",
      description: "Round-the-clock access to your workspace with secure entry systems"
    },
    {
      icon: <WifiIcon className="w-12 h-12 text-custom-primary" />,
      title: "High-Speed Internet",
      description: "Reliable fiber internet connection for seamless business operations"
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-custom-primary" />,
      title: "Security & Privacy",
      description: "Advanced security systems and private workspaces for confidential work"
    },
    {
      icon: <PhoneIcon className="w-12 h-12 text-custom-primary" />,
      title: "Reception Services",
      description: "Professional reception and call handling services for your business"
    },
    {
      icon: <DocumentTextIcon className="w-12 h-12 text-custom-primary" />,
      title: "Legal Support",
      description: "Company registration and legal documentation assistance"
    },
    {
      icon: <UsersIcon className="w-12 h-12 text-custom-primary" />,
      title: "Meeting Facilities",
      description: "Access to fully equipped meeting and conference rooms"
    },
    {
      icon: <CameraIcon className="w-12 h-12 text-custom-primary" />,
      title: "Media Services",
      description: "Professional photography and video production facilities"
    }
  ];

  return (
    <section className="py-16 mb-12 max-container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInPlace}
      >
        <MainTitle
          title="Why Choose"
          subdescription="WorkBrand"
          description="We're Your One-Stop Platform for empowering entrepreneurs, startups, and business leaders"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-4 md:px-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 bg-custom-gradient-card hover:bg-custom-gradient-dark"
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-200">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="px-4 lg:px-0">
          <p className="mb-4 text-lg font-semibold leading-relaxed text-gray-600">
            From launching an idea to scaling your business — we support every step
          </p>
          
          <p className="mb-4 text-lg leading-relaxed text-gray-600">
            <span className="font-bold">Office Spaces | Consulting & Training | Media & Studio Services</span>
          </p>
          
          <p className="text-lg leading-relaxed text-gray-600">
            Our spaces aren't just offices — they're full business ecosystems built for growth and action. We simplify the tough parts so you can focus on making an impact.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceFeatures;