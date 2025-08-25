import React from "react";
import { motion } from "framer-motion";
import MainTitle from "../sharedComponents/MainTittle";
import { CheckIcon } from "@heroicons/react/24/outline";
import { fadeInPlace, fadeInUp } from "../../utils/motionVariants";

const ServiceFeaturesList = ({ features }) => {
  return (
    <section className="py-16 mb-12 max-container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInPlace}
      >
        <MainTitle
          title="What's"
          subdescription="Included"
          description="Everything you need to get started with our professional services"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:px-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl shadow-md bg-custom-gradient-card hover:shadow-lg transition-all duration-300 group hover:bg-custom-gradient-dark"
            >
              <CheckIcon className="w-6 h-6 text-custom-primary flex-shrink-0 mt-1 transition-colors duration-300 group-hover:text-white" />
              <p className="text-gray-700 text-lg leading-relaxed transition-colors duration-300 group-hover:text-white">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceFeaturesList;