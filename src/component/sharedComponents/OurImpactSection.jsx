import React from "react";
import MainTittle from "./MainTittle";
import ImpactButtonCard from "./ImpactButtonCard";
import { motion } from "framer-motion";
import { fadeInUp, fadeInPlace } from "../../utils/motionVariants";

const OurImpactSection = () => {
  return (
    <section className="px-4 mb-12 max-container xl:px-0">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInPlace}
      >
        <MainTittle
          title="Our Impact"
          description="Key Stats That Show Our Real Growth"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4 md:pt-0">
            <ImpactButtonCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              }
              number={5000}
              description="Project Success"
            />
          </div>

          <div className="col-span-12 md:col-span-4 md:pt-0 ">
            <ImpactButtonCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              }
              number={8}
              description="Years Experience"
            />
          </div>

          <div className="col-span-12 md:col-span-4 md:pt-0">
            <ImpactButtonCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              }
              number={10000}
              description="Happy Clients"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurImpactSection;
