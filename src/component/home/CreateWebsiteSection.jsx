import React from "react";
import CustomMainButton from "../../component/sharedComponents/CustomMainButton";
import CustomSliderCreateWebsite from "../home/CustomSliderCreateWebsite";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import CreateYourWebsiteIcon from "../../assets/Icons/CreateYourWebsiteIcon.svg";
import { motion } from "framer-motion";
import { leftVariant, rightVariant } from "../../utils/motionVariants";
import { useNavigate } from "react-router-dom";

const CreateWebsiteSection = () => {
  const navigate = useNavigate();

  return (
    <section className="px-4 mb-12 max-container xl:px-0">
      <div className="grid grid-cols-12 gap-4">
        <motion.div
          className="col-span-12 md:col-span-6 flex flex-col justify-evenly relative lg:min-h-[305px]  "
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={leftVariant}
        >
          <h1 className="mt-4 text-3xl font-bold text-center md:text-5xl text-custom-primary md:text-left">
            Create Your <span className="text-black">Website</span> Instantly
          </h1>
          <p className="p-5 leading-relaxed text-center text-gray-700 md:p-0 md:text-start">
            Launch your business online in minutes. No code, no hassle just
            choose your layout or let our AI build a professional website for
            you from scratch.
          </p>
          <div className="w-1/2 me-auto ms-auto md:ms-0">
            <CustomMainButton
              fullWidth
              TripleArrow={<TripleArrowIcon color={"white"} />}
              text="Create Website"
              onClick={() => navigate("/coming-soon")}
            />
          </div>
          <div className="absolute top-0 left-0 px-4 bg-white rounded-xl border border-gray-200  h-[30px] max-w-[60vw] w-[250px]  items-center justify-center gap-2 hidden xl:flex">
            <img src={CreateYourWebsiteIcon} className="w-5 h-5" />
            <span className="text-sm ">AI-Powered Website Builder</span>
          </div>
        </motion.div>
        <div
          className="col-span-12 p-0 md:col-span-6"
        >
          <CustomSliderCreateWebsite />
        </div>
      </div>
    </section>
  );
};

export default CreateWebsiteSection;
