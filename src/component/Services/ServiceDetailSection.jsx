import React from "react";
import { motion } from "framer-motion";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import LightButton from "../sharedComponents/LightButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import ImageGallery from "../sharedComponents/ImageGallery";
import { leftVariant, rightVariant } from "../../utils/motionVariants";
import { useNavigate } from "react-router-dom";
import Business_Development_Consulting from "../../assets/images/Business_Development_Consulting.webp";
import Training_Programs from "../../assets/images/Training_Programs.webp";
import gallery_WhyChooseUS_img1 from "../../assets/images/gallery_WhyChooseUS_img1.webp";
import gallery_WhyChooseUS_img2 from "../../assets/images/gallery_WhyChooseUS_img2.webp";
import gallery_WhyChooseUS_img3 from "../../assets/images/gallery_WhyChooseUS_img3.webp";

const ServiceDetailSection = () => {
  const navigate = useNavigate();

  const galleryImages = [
    gallery_WhyChooseUS_img1,
    gallery_WhyChooseUS_img2,
    gallery_WhyChooseUS_img3
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

      {/* Business Development Consulting Section */}
      <div className="grid items-center grid-cols-1 mb-16 lg:grid-cols-12">
        <motion.div
          className="order-2 col-span-6 lg:order-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={leftVariant}
        >
          <div className="w-full h-[500px] overflow-hidden rounded-lg">
            <img
              src={Business_Development_Consulting}
              alt="Business Development Consulting"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center order-1 col-span-6 lg:order-2 lg:pl-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={rightVariant}
        >
          <h2 className="mb-4 text-3xl font-bold text-center lg:text-left lg:text-5xl text-custom-primary">
            Business Development Consulting
          </h2>
          
          <div className="px-4 mt-8 text-center lg:mt-0 lg:px-0 lg:text-left">
            <p className="mb-4 text-lg font-semibold leading-relaxed text-gray-600">
              "True role models don't seek the spotlight... and rarely stand in it."
            </p>
            
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              Before being a consultant, <span className="font-bold">Dr. Tarek Tantawi</span> is a true role model and source of inspiration — and for that, we extend our sincere gratitude.
            </p>
            
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              With nearly <span className="font-bold">26 years of experience in business development and corporate</span> restructuring, he has empowered thousands of companies across the globe toward success and sustainability.
            </p>
          </div>

          <div className="flex justify-center w-full gap-4 px-4 mt-6 lg:justify-start lg:px-0">
            <div className="w-auto">
              <CustomMainButton
                fullWidth
                text="Book a Consultation"
                onClick={() => navigate("/coming-soon")}
              />
            </div>
            <div className="w-auto">
              <LightButton
                onClick={() => navigate("/coming-soon")}
                text="About Dr. Tarek"
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

      {/* Media Services Section */}
      <div className="grid items-center grid-cols-1 mb-16 lg:grid-cols-12">
        <motion.div
          className="flex flex-col justify-center col-span-6 lg:pr-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={leftVariant}
        >
          <h2 className="mb-4 text-3xl font-bold text-center lg:text-left lg:text-5xl text-custom-primary">
            Media Services
          </h2>
          
          <div className="px-4 text-center lg:px-0 lg:text-left">
            <p className="mb-4 text-lg font-semibold leading-relaxed text-gray-600">
              "Make it Real - From concept to full successful campaigns"
            </p>
            
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              Our media services bring your brand's vision to life through professional photography, video production, animation, and creative development. We handle everything from concept to execution.
            </p>
            
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              Whether you need content creation, brand campaigns, or media coverage, our team delivers results that make an impact.
            </p>
          </div>

          <div className="flex justify-center w-full gap-4 px-4 mt-6 lg:justify-start lg:px-0">
            <div className="w-auto">
              <CustomMainButton
                fullWidth
                text="Boost Your Brand"
                onClick={() => navigate("/coming-soon")}
              />
            </div>
            <div className="w-auto">
              <LightButton
                onClick={() => navigate("/coming-soon")}
                text="View Portfolio"
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

      {/* Training Programs Section */}
      <div className="grid items-center grid-cols-1 mb-16 lg:grid-cols-12">
        <motion.div
          className="order-2 col-span-6 lg:order-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={leftVariant}
        >
          <div className="w-full h-[500px] overflow-hidden rounded-lg">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/ta67viXZuiU?autoplay=1&si=QOsrcmlR9cQOojRS"
              title="Training Programs"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[500px] shadow-md"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center order-1 col-span-6 lg:order-2 lg:pl-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={rightVariant}
        >
          <h2 className="mb-4 text-3xl font-bold text-center lg:text-left lg:text-5xl text-custom-primary">
            Training Programs
          </h2>
          
          <div className="px-4 mt-8 text-center lg:mt-0 lg:px-0 lg:text-left">
            <p className="mb-4 text-lg font-semibold leading-relaxed text-gray-600">
              "Interested or specialized in business? Then our programs are built for you."
            </p>
            
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              From administrative preparation to executive development, and through key areas like marketing, HR, strategic planning, and business development — we've got it all covered.
            </p>
            
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              We also dive into trending topics like AI power in business and presentation design mastery. Whether you're navigating challenges or aiming for scalable growth, you're in the right hands.
            </p>
          </div>

          <div className="flex justify-center w-full gap-4 px-4 mt-6 lg:justify-start lg:px-0">
            <div className="w-auto">
              <CustomMainButton
                fullWidth
                text="Explore Training Tracks"
                onClick={() => navigate("/coming-soon")}
              />
            </div>
            <div className="w-auto">
              <LightButton
                onClick={() => navigate("/coming-soon")}
                text="Book a Training Room"
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