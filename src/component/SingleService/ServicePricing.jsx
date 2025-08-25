import React from "react";
import { motion } from "framer-motion";
import MainTitle from "../sharedComponents/MainTittle";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { CheckIcon } from "@heroicons/react/24/outline";
import { fadeInPlace, fadeInUp } from "../../utils/motionVariants";
import { useNavigate } from "react-router-dom";

const ServicePricing = ({ pricing, serviceTitle }) => {
  const navigate = useNavigate();

  return (
    <section className="py-16 mb-12 max-container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInPlace}
      >
        <MainTitle
          title="Pricing"
          subdescription="Plans"
          description={`Choose the perfect ${serviceTitle.toLowerCase()} plan that fits your business needs`}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-3 lg:px-0">
          {pricing.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "bg-custom-gradient-dark text-white scale-105 border-2 border-custom-primary"
                  : "bg-white hover:bg-custom-gradient-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-custom-gradient-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? "text-white" : "text-gray-800"}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-custom-primary" : "text-custom-primary"}`}>
                    {plan.price} EGP
                  </span>
                  <span className={`text-lg ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckIcon className={`w-5 h-5 flex-shrink-0 mt-1 ${
                      plan.popular ? "text-custom-primary" : "text-custom-primary"
                    }`} />
                    <span className={`${plan.popular ? "text-gray-200" : "text-gray-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <CustomMainButton
                  fullWidth
                  text="Choose Plan"
                  TripleArrow={<TripleArrowIcon color="white" />}
                  onClick={() => navigate("/coming-soon")}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicePricing;