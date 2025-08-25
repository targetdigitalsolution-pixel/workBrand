import React from "react";
import { motion } from "framer-motion";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import LightButton from "../sharedComponents/LightButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { leftVariant, rightVariant } from "../../utils/motionVariants";
import { useNavigate } from "react-router-dom";

const ServiceHeroDetails = ({ service }) => {
  const navigate = useNavigate();

  return (
    <section className="py-16 mb-12 bg-custom-gradient-dark">
      <div className="max-container">
        <div className="grid items-center grid-cols-1 lg:grid-cols-12">
          {/* Content Section */}
          <motion.div
            className="flex flex-col justify-center col-span-6 lg:pr-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={leftVariant}
          >
            <h2 className="mb-4 text-3xl font-bold text-center lg:text-left lg:text-5xl text-custom-primary">
              {service.title} <br />
              <span className="text-white">{service.subtitle}</span>
            </h2>
            
            <div className="block lg:hidden mb-8">
              <img
                src={service.heroImage}
                alt={service.title}
                className="object-cover w-full h-[400px] rounded-lg shadow-md"
              />
            </div>

            <main className="px-4 text-center lg:text-start xl:px-0 text-white">
              <p className="text-lg leading-relaxed mb-6 font-semibold">
                {service.description}
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                {service.longDescription}
              </p>
            </main>

            <div className="flex justify-center w-full gap-4 px-4 mt-6 lg:justify-start lg:px-0">
              <div className="w-auto">
                <CustomMainButton
                  fullWidth
                  text="Book Now"
                  onClick={() => navigate("/coming-soon")}
                />
              </div>
              <div className="w-auto">
                <LightButton
                  onClick={() => navigate("/coming-soon")}
                  text="Get Quote"
                  TripleArrow={
                    <TripleArrowIcon
                      color="custom-primary"
                      hoverColor="white"
                    />
                  }
                />
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="col-span-6 hidden lg:block"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rightVariant}
          >
            <img
              src={service.heroImage}
              alt={service.title}
              className="object-cover w-full h-[500px] rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroDetails;