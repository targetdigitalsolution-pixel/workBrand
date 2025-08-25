import React from "react";
import { motion } from "framer-motion";
import MainTitle from "../sharedComponents/MainTittle";
import ImageGallery from "../sharedComponents/ImageGallery";
import { fadeInPlace, fadeInUp } from "../../utils/motionVariants";

const ServiceGallery = ({ gallery, title }) => {
  return (
    <section className="py-16 mb-12 bg-custom-gradient-card">
      <div className="max-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInPlace}
        >
          <MainTitle
            title="Gallery"
            subdescription="& Workspace"
            description={`Take a look at our ${title.toLowerCase()} facilities and workspace environment`}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="px-4 lg:px-0">
            <ImageGallery gallery={gallery} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceGallery;