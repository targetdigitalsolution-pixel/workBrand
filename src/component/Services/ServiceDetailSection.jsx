import React from "react";
import { motion } from "framer-motion";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import LightButton from "../sharedComponents/LightButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import ImageGallery from "../sharedComponents/ImageGallery";
import { leftVariant, rightVariant } from "../../utils/motionVariants";
import { useNavigate } from "react-router-dom";

const ServiceDetailSection = () => {
  const navigate = useNavigate();

  const galleryImages = [
    "/api/placeholder/600/400",
    "/api/placeholder/600/400",
    "/api/placeholder/600/400"
  ];

  return (
    <section className="mb-12 max-container">
      {/* Virtual Office Section */}
      <div className="grid items-center grid-cols-1 mb-16 lg:grid-cols-12">
        <motion.div
          className="flex flex-col justify-center col-span-6 lg:pr-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={leftVariant}
        >
          <h2 className="mb-4 text-3xl font-bold text-center lg:text-left lg:text-5xl text-custom-primary">
            Virtual Office Solutions
          </h2>
          
          <div className="px-4 text-center lg:px-0 lg:text-left">
            <p className="mb-4 text-lg font-semibold leading-relaxed text-gray-600">
              "Your business address in the heart of Cairo's business district"
            </p>
            
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              Establish your business presence with our virtual office services. Get a prestigious business address, professional mail handling, and legal registration support without the overhead of a physical office.
            </p>
            
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              Perfect for startups, freelancers, and remote businesses looking to establish credibility and legal compliance in Egypt.
            </p>
          </div>

          <div className="flex justify-center w-full gap-4 px-4 mt-6 lg:justify-start lg:px-0">
            <div className="w-auto">
              <CustomMainButton
                fullWidth
                text="Get Virtual Office"
                onClick={() => navigate("/coming-soon")}
              />
            </div>
            <div className="w-auto">
              <LightButton
                onClick={() => navigate("/coming-soon")}
                text="Learn More"
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

        <motion.div
          className="col-span-6 mt-8 lg:mt-0"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={rightVariant}
        >
          <ImageGallery gallery={galleryImages} />
        </motion.div>
      </div>

      {/* Private Office Section */}
      <div className="grid items-center grid-cols-1 mb-16 lg:grid-cols-12">
        <motion.div
          className="order-2 col-span-6 lg:order-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={leftVariant}
        >
          <ImageGallery gallery={galleryImages} />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center order-1 col-span-6 lg:order-2 lg:pl-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={rightVariant}
        >
          <h2 className="mb-4 text-3xl font-bold text-center lg:text-left lg:text-5xl text-custom-primary">
            Private Office Spaces
          </h2>
          
          <div className="px-4 mt-8 text-center lg:mt-0 lg:px-0 lg:text-left">
            <p className="mb-4 text-lg font-semibold leading-relaxed text-gray-600">
              "Your dedicated workspace in prime business locations"
            </p>
            
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              Fully furnished private offices equipped with everything you need to run your business efficiently. Located in Mohandessin and Nasr City, our offices provide the perfect environment for productivity and growth.
            </p>
            
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              Enjoy 24/7 access, high-speed internet, premium furniture, and access to meeting rooms and common areas.
            </p>
          </div>

          <div className="flex justify-center w-full gap-4 px-4 mt-6 lg:justify-start lg:px-0">
            <div className="w-auto">
              <CustomMainButton
                fullWidth
                text="Book Private Office"
                onClick={() => navigate("/coming-soon")}
              />
            </div>
            <div className="w-auto">
              <LightButton
                onClick={() => navigate("/coming-soon")}
                text="View Locations"
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
      </div>
    </section>
  );
};

export default ServiceDetailSection;