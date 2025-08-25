import React from "react";
import { motion } from "framer-motion";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { leftVariant, rightVariant } from "../../utils/motionVariants";
import { useNavigate } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/24/outline";

const ServiceHeroDetails = ({ service }) => {
  const navigate = useNavigate();

  const keyFeatures = [
    "Legal business registration address",
    "Professional mail handling services",
    "Call forwarding and reception services", 
    "Access to meeting rooms when needed",
    "Business license support",
    "Professional phone number"
  ];

  return (
    <section className="py-16 mb-0 bg-custom-gradient-dark">
      <div className="max-container">
        <div className="grid items-center grid-cols-1 lg:grid-cols-12">
          {/* Image Section */}
          <motion.div
            className="order-2 col-span-6 lg:order-1"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={leftVariant}
          >
            <img
              src={service.heroImage}
              alt={service.title}
              className="object-cover w-full h-[500px] rounded-lg shadow-md"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="flex flex-col justify-center order-1 col-span-6 lg:order-2 lg:pl-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rightVariant}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-custom-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h2 className="text-3xl font-bold text-custom-primary lg:text-5xl">
                {service.title}
              </h2>
            </div>
            
            <div className="block lg:hidden mb-8">
              <img
                src={service.heroImage}
                alt={service.title}
                className="object-cover w-full h-[400px] rounded-lg shadow-md"
              />
            </div>

            <main className="px-4 text-center lg:text-start xl:px-0 text-white lg:px-0">
              <p className="text-lg leading-relaxed mb-8">
                {service.longDescription}
              </p>
              
              <ul className="space-y-4 mb-8">
                {keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-custom-primary flex-shrink-0" />
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </main>

            <div className="flex justify-center w-full px-4 mt-6 lg:justify-start lg:px-0">
              <div className="w-auto">
                <CustomMainButton
                  text="Get Started"
                  TripleArrow={<TripleArrowIcon color="white" />}
                  onClick={() => navigate("/coming-soon")}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroDetails;