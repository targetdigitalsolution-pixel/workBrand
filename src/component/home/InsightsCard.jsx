import React from "react";

const InsightsCard = ({ image, title }) => {
  return (
    <div className="overflow-hidden transition duration-300 bg-white shadow-md rounded-2xl hover:shadow-md">
      <img src={image} alt={title} className="object-cover w-full h-48" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 duration-300 cursor-pointer hover:text-custom-primary">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default InsightsCard;
