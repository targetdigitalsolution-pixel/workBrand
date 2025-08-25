import React from "react";
import LightButton from "../sharedComponents/LightButton";
import { useNavigate } from "react-router-dom";

const CardService = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md "
          >
            <div className="w-full h-48 overflow-hidden rounded-lg">
              <img
                src={item.img}
                className="object-cover w-full h-48 duration-500 hover:scale-150"
                alt={item.title}
              />
            </div>

            <div className="p-5">
              <h3 className="mb-2 text-xl font-semibold text-left text-gray-800 cursor-pointer hover:text-custom-primary duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4 text-left h-[50px]">
                {item.description}
              </p>
              <div className="flex justify-center pt-3 md:px-0 md:py-0 md:justify-start">
                <LightButton
                  text={item.buttonText}
                  className="w-full sm:w-auto"
                  onClick={() => navigate("/coming-soon")}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardService;
