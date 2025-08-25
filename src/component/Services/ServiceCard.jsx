import React from "react";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden transition-all duration-300 bg-white shadow-md rounded-2xl hover:shadow-lg group">
      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 transition-opacity duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-20"></div>
      </div>
      
      <div className="p-6">
        <h3 className="mb-3 text-2xl font-bold text-custom-primary duration-300 cursor-pointer hover:text-black">
          {service.title}
        </h3>
        
        <p className="mb-4 text-gray-600 leading-relaxed">
          {service.description}
        </p>
        
        <div className="mb-6">
          <h4 className="mb-3 text-lg font-semibold text-gray-800">Key Features:</h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckIcon className="w-5 h-5 text-custom-primary flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-center">
          <CustomMainButton
            fullWidth
            text={service.buttonText}
            TripleArrow={<TripleArrowIcon color="white" />}
            onClick={() => navigate("/coming-soon")}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;