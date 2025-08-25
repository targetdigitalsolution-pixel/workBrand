import React from "react";
import LightButton from "../sharedComponents/LightButton";
import { useNavigate, Link } from "react-router-dom";

const ServicesHeroCard = ({ service }) => {
  const navigate = useNavigate();
  
  // Create slug from service title
  const createSlug = (title) => {
    return title.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };
  
  const serviceSlug = createSlug(service.title);

  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md">
      <div className="w-full h-48 overflow-hidden rounded-lg">
        <img
          src={service.img}
          className="object-cover w-full h-48 duration-500 hover:scale-150"
          alt={service.title}
        />
      </div>

      <div className="p-5">
        <Link to={`/services/${serviceSlug}`}>
          <h3 className="mb-2 text-xl font-semibold text-left text-gray-800 cursor-pointer hover:text-custom-primary duration-300">
            {service.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 text-left h-[50px]">
          {service.description}
        </p>
        <div className="flex justify-center pt-3 md:px-0 md:py-0 md:justify-start">
          <LightButton
            text={service.buttonText}
            className="w-full sm:w-auto"
            onClick={() => navigate(`/services/${serviceSlug}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesHeroCard;