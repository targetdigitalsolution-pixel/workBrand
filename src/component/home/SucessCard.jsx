import React from "react";

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
);

const SuccessCard = ({ image, name, shortDesc, stars = 5, description }) => {
  return (
    <div
      className="
  relative overflow-hidden group
  bg-custom-gradient-card
  shadow-md rounded-lg p-6 h-[300px] flex flex-col items-center max-w-sm text-center group
"
    >
      {/* Overlay  */}
      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none bg-custom-gradient-dark group-hover:opacity-100" />

      {/* content */}
      <div className="relative z-10">
        <div className="w-20 h-20 mx-auto overflow-hidden rounded-full">
          <img src={image} alt={name} className="object-cover w-full h-full" />
        </div>
        <h3 className="mb-1 text-xl font-semibold text-black duration-300 group-hover:text-white">
          {name}
        </h3>
        <p className="mb-3 text-sm text-gray-500 duration-300 group-hover:text-gray-200">
          {shortDesc}
        </p>
        <div className="flex items-center justify-center mb-3 space-x-1 text-custom-primary">
          {[...Array(stars)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <p className="text-gray-700 duration-300 group-hover:text-gray-200">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SuccessCard;
