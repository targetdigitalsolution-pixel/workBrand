import React from "react";

const HeroSection = ({ backgroundImage, title, description }) => {
  return (
    <section
      className="relative w-full mb-0 md:mb-12 [400px] md:h-[500px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 flex flex-col justify-center  items-center md:items-start text-white px-0 lg:pr-56">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg flex text-center md:text-start p-5 md:p-0 md:text-lg max-w-3xl mx-auto">{description}</p>
      </div>
    </section>
  );
};

export default HeroSection;
