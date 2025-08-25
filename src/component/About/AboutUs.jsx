import React from "react";

const AboutUs = ({ image, title, subtitle, describtion, decmobile }) => {
  return (
    <section className="flex max-container mb-12 flex-col md:flex-row items-center gap-6">
      <div className="w-full md:w-1/2 text-center md:text-left order-1 md:order-2">
        <h1 className="text-3xl md:text-4xl font-bold text-custom-primary mb-4">
          {title} <span className="text-black">{subtitle}</span>
        </h1>

        <p className="text-gray-600 font-semibold text-lg text-center px-5 md:p-0 mb-5 leading-relaxed block md:hidden">
          {decmobile}
        </p>

        <p className="text-gray-600 text-lg leading-relaxed hidden md:block">
          {describtion}
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
        <img
          src={image}
          alt={title}
          className="rounded-2xl max-w-full h-[500px]"
        />
      </div>

      <div className="block md:hidden order-3 mt-4 px-5 text-center">
        <p className="text-gray-600 text-lg leading-relaxed">{describtion}</p>
      </div>
    </section>
  );
};

export default AboutUs;
