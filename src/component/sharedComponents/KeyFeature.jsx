import React from "react";
import icon1 from "../../assets/Icons/Meeting_Room_Icon.svg";
import icon2 from "../../assets/Icons/LEGALLL.svg";
import icon3 from "../../assets/Icons/cafe.svg";
import icon4 from "../../assets/Icons/Fernature.svg";
import icon5 from "../../assets/Icons/Lock.svg";
import icon6 from "../../assets/Icons/Car.svg";
import icon7 from "../../assets/Icons/logistic.svg";

const KeyFeature = ({
  title,
  icons = [],
  align = "start",
  white = false,
  showTitle = true,
}) => {
  const justifyClass = align === "center" ? "justify-center" : "justify-start";
  const itemsClass = align === "center" ? "items-center" : "items-start";
  const textClass = align === "center" ? "text-center" : "text-start";
  const bgClass = white ? "bg-white" : "bg-custom-gradient-card";

  return (
    <section className="py-10 mb-12 max-container">
      {showTitle && (
        <h2 className="mb-10 text-3xl font-bold text-center md:text-5xl text-custom-primary">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 gap-6 p-5 md:grid-cols-2 lg:grid-cols-3 lg:p-0">
        {icons.map((item, index) => (
          <div
            key={index}
            className={`group flex flex-col ${justifyClass} ${itemsClass} ${textClass} p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ${bgClass} hover:bg-custom-gradient-dark`}
          >
            <img
              src={item.image}
              alt={`feature-${index}`}
              className="object-contain w-16 h-16 mb-4"
            />
            <p className="flex justify-center text-sm text-center text-gray-700 transition-colors duration-300 md:justify-start md:text-start group-hover:text-white md:text-base ">
              {/* //             <p className="text-sm text-gray-700 transition-colors duration-300 md:text-base group-hover:text-white"> */}
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeature;
