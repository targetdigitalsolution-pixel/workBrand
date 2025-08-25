import React from "react";
import MainTittle from "../sharedComponents/MainTittle"; 
import CardLocation from '../home/CardLocation';
import Nacersity from '../../assets/images/Nacersity.webp';
import Almohandsin from '../../assets/images/Almohandsin.webp';
import carveLeft from '../../assets/images/carveLeft.webp';
import carveRight from '../../assets/images/carveRight.webp';
import { fadeInPlace, fadeInUp } from "../../utils/motionVariants";
import { motion } from "framer-motion";

const LocationSection = () => {

  return (
    <section className="px-4 mb-12 md:mb-0 xl:px-0 max-container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInPlace}
      >
        <MainTittle
          title="Our Office Locations"
          description="Flexible, modern offices where Cairo works, connects, and thrives"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 gap-6 pt-5 lg:gap-10 md:grid-cols-2 lg:grid-cols-12 md:p-0">
          <div className="flex justify-center lg:col-span-6 ">
            <CardLocation
              image={Almohandsin}
              title="Mohandessin Branch"
              description="Located in the heart of Mohandessin — steps away from banks, services, and right in front of the metro station..."
              location="Giza, Egypt"
              buttonText="Explore Mohandessin Offices"
              imageBG={carveRight}
            />
          </div>

          <div className="flex justify-center lg:col-span-6">
            <CardLocation
              image={Nacersity}
              title="Nasr City Branch"
              description="Ideally located in vibrant Nasr City — close to all essential services. The perfect choice for launching your business or working ..."
              location="Cairo, Egypt"
              buttonText="Explore Nasr City Offices"
              imageBG={carveLeft}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LocationSection;
