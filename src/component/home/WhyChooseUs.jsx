import React from "react";
import { motion } from "framer-motion";
import Business_Development_Consulting from "../../assets/images/Business_Development_Consulting.webp";
import Business_Development_Consulting_carve from "../../assets/images/Business_Development_Consulting_carve.webp";
import Training_Programs from "../../assets/images/Training_Programs.webp";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import LightButton from "../sharedComponents/LightButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import ImageGallery from "../sharedComponents/ImageGallery";
import gallery_WhyChooseUS_img1 from "../../assets/images/gallery_WhyChooseUS_img1.webp";
import gallery_WhyChooseUS_img2 from "../../assets/images/gallery_WhyChooseUS_img2.webp";
import gallery_WhyChooseUS_img3 from "../../assets/images/gallery_WhyChooseUS_img3.webp";
import { leftVariant, rightVariant } from "../../utils/motionVariants";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
  const navigate = useNavigate();

  return (
    <section className="mb-12 max-container ">
      {/* section Business Development Consulting */}
      <div className="grid items-center grid-cols-1 mb-12 lg:grid-cols-12 lg:mb-0">
        <div className="order-2 col-span-6 lg:order-1">
          <img
            src={Business_Development_Consulting_carve}
            alt="Why Choose Us"
            className="object-fill w-full h-[500px] lg:block hidden"
          />
        </div>

        <motion.div
          className="flex flex-col justify-center col-span-6 lg:m-0 lg:px-[50px] lg:order-2 order-1 "
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={leftVariant}
        >
          <h2 className="flex justify-center pb-2 mb-4 text-3xl font-bold text-center text-transparent lg:text-left lg:text-5xl bg-custom-gradient-orange bg-clip-text">
            Business Development Consulting
          </h2>
          <img
            src={Business_Development_Consulting}
            alt="Why Choose Us"
            className="object-cover w-full h-[500px] lg:hidden block"
          />
          <main className="px-4 mt-8 text-center lg:mt-0 xl:px-0 lg:text-start">
            <p className="text-lg leading-relaxed text-gray-600 lg:font-bold">
              "True role models don’t seek the spotlight... and rarely stand in
              it."
            </p>
            <br className="block lg:hidden" />
            <p className="text-lg leading-relaxed text-gray-600">
              Before being a consultant,
              <span className="lg:font-bold"> Dr. Tarek Tantawi </span> is a
              true role model and source of inspiration — and for that, we
              extend our sincere gratitude.
            </p>
            <br className="block lg:hidden" />
            <p className="text-lg leading-relaxed text-gray-600">
              With nearly
              <span className="lg:font-bold">
                {" "}
                26 years of experience in business development and corporate
              </span>{" "}
              restructuring, he has empowered thousands of companies across the
              globe toward success and sustainability.
            </p>
            <br className="block lg:hidden" />
            <p className="text-lg leading-relaxed text-gray-600">
              Whether you're navigating challenges or aiming for scalable
              growth, you're in the right hands.
            </p>
          </main>

          <div className="flex justify-center w-full gap-4 px-4 mt-5 lg:justify-start lg:px-0">
            <div className="w-auto">
              <CustomMainButton
                fullWidth
                text={"Book a Consultation"}
                onClick={() => navigate("/coming-soon")}
              />
            </div>
            <div className="w-auto">
              <LightButton
                onClick={() => navigate("/coming-soon")}
                text="About Dr. Tarek"
                TripleArrow={
                  <TripleArrowIcon
                    color={"custom-primary"}
                    hoverColor={"white"}
                  />
                }
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* training Development Consulting */}

      <div className="grid items-center grid-cols-1 mb-12 lg:grid-cols-12 lg:mb-0">
        <motion.div
          className="flex flex-col justify-center col-span-6 lg:m-0 lg:pe-[50px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={rightVariant}
        >
          <h2 className="flex justify-center pb-2 mb-4 text-3xl font-bold text-center text-transparent lg:justify-start lg:text-left lg:text-5xl bg-custom-gradient-orange bg-clip-text">
            Training Programs
          </h2>
          {/* <img
            src={Training_Programs}
            alt="Why Choose Us"
            className="w-full h-[500px] shadow-md object-cover lg:hidden block"
          /> */}
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/ta67viXZuiU?autoplay=1&si=QOsrcmlR9cQOojRS"
            title="Why Choose Us"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[500px] shadow-md object-cover lg:hidden block"
          />
          <main className="px-4 mt-8 text-center lg:mt-0 xl:px-0 lg:text-start">
            <p className="text-lg leading-relaxed text-gray-600 lg:font-bold">
              Interested or specialized in business?
            </p>
            <br className="block lg:hidden" />
            <p className="text-lg leading-relaxed text-gray-600">
              Then our programs are built for you.
            </p>
            <br className="block lg:hidden" />
            <p className="text-lg leading-relaxed text-gray-600">
              From administrative preparation to executive development, and
              through key areas like marketing, HR, strategic planning, and
              business development weve got it all covered. We also dive into
              trending topics like AI power in business and presentation design
              mastery.
            </p>
            <br className="block lg:hidden" />
            <p className="text-lg leading-relaxed text-gray-600">
              Whether you're navigating challenges or aiming for scalable
              growth, you're in the right hands.
            </p>
          </main>

          <div className="flex justify-center w-full gap-4 px-4 mt-5 lg:justify-start lg:px-0">
            <div className="w-auto">
              <CustomMainButton
                fullWidth
                text={"Explore Training Tracks"}
                onClick={() => navigate("/coming-soon")}
              />
            </div>
            <div className="w-auto">
              <LightButton
                onClick={() => navigate("/coming-soon")}
                text="Book a Training Room"
                TripleArrow={
                  <TripleArrowIcon
                    color={"custom-primary"}
                    hoverColor={"white"}
                  />
                }
              />
            </div>
          </div>
        </motion.div>
        <div className="hidden col-span-6 lg:block">
          {/* <img
            src={Training_Programs}
            alt="Why Choose Us"
            className="w-full h-[500px]  shadow-md object-cover"
          /> */}
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/ta67viXZuiU?autoplay=1&si=QOsrcmlR9cQOojRS"
            title="Why Choose Us"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[500px] shadow-md"
          />
        </div>
      </div>

      {/* section Why Choose Us? */}
      <div className="grid items-center grid-cols-1 mb-12 lg:grid-cols-12 lg:mb-0">
        <motion.div
          className="flex flex-col justify-center col-span-6 lg:m-0 lg:px-[50px] lg:order-2 order-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={leftVariant}
        >
          <h2 className="flex justify-center pb-2 mb-4 text-3xl font-bold text-center text-transparent lg:justify-start lg:text-left lg:text-5xl bg-custom-gradient-orange bg-clip-text">
            Why Choose Us?
          </h2>
          <div className="block lg:hidden">
            <ImageGallery
              gallery={[
                gallery_WhyChooseUS_img1,
                gallery_WhyChooseUS_img2,
                gallery_WhyChooseUS_img3,
              ]}
            />
          </div>
          <main className="px-4 mt-8 text-center lg:mt-0 xl:px-0 lg:text-start">
            <p className="text-lg leading-relaxed text-gray-600 lg:font-bold">
              We’re Your One-Stop Platform for empowering entrepreneurs,
              startups, and business leaders
            </p>
            <br className="block lg:hidden" />
            <p className="text-lg leading-relaxed text-gray-600">
              From launching an idea to scaling your business — we support every
              step
            </p>
            <br className="block lg:hidden" />
            <p className="text-lg leading-relaxed text-gray-600">
              <span className="lg:font-bold">
                Office Spaces | Consulting & Training | Media & Studio Services
              </span>
            </p>
            <br className="block lg:hidden" />
            <p className="text-lg leading-relaxed text-gray-600">
              Our spaces aren’t just offices — they’re full business ecosystems
              built for growth and action. We simplify the tough parts so you
              can focus on making an impact.
            </p>
          </main>
          <div className="flex justify-center w-full gap-4 px-4 mt-5 lg:justify-start lg:px-0">
            <div className="w-auto">
              <CustomMainButton
                fullWidth
                text={"Book a Consultation"}
                onClick={() => navigate("/coming-soon")}
              />
            </div>
            <div className="w-auto">
              <LightButton
                onClick={() => navigate("/coming-soon")}
                text="About Dr. Tarek"
                TripleArrow={
                  <TripleArrowIcon
                    color={"custom-primary"}
                    hoverColor={"white"}
                  />
                }
              />
            </div>
          </div>
        </motion.div>
        <div className="order-2 hidden col-span-6 lg:block lg:order-1">
          <div className="">
            <ImageGallery
              gallery={[
                gallery_WhyChooseUS_img1,
                gallery_WhyChooseUS_img2,
                gallery_WhyChooseUS_img3,
              ]}
            />
          </div>
        </div>
      </div>
      {/* section Why Choose Us? */}
    </section>
  );
};
export default WhyChooseUs;
