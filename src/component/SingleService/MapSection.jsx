import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/motionVariants";

const MapSection = () => {
  return (
    <section className="mb-0">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="w-full h-[400px] md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1234567890!2d31.2000000!3d30.0500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841123456789%3A0xabcdef123456!2sCairo%2C+Egypt!5e0!3m2!1sen!2seg!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="WorkBrand Locations"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
};

export default MapSection;