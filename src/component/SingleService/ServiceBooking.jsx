import React from "react";
import { motion } from "framer-motion";
import MainTitle from "../sharedComponents/MainTittle";
import UnderLineForm from "../sharedComponents/UnderLineForm";
import { fadeInPlace, fadeInUp } from "../../utils/motionVariants";

const ServiceBooking = ({ serviceTitle }) => {
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
            title="Book Your"
            subdescription={serviceTitle}
            description="Ready to get started? Fill out the form below and we'll get back to you within 24 hours"
            colorDesc="white"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="px-4 lg:px-0">
            <div className="bg-white rounded-2xl shadow-lg">
              <UnderLineForm />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceBooking;