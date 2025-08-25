import React from "react";

const MainTitle = ({
  title,
  description,
  subdescription,
  align,
  colorDesc,
}) => {
  const isStart = align === "start";
  return (
    <div className={`mb-5 ${isStart ? "text-start" : "text-center"} lg:mb-4`}>
      <h1
        className={`text-3xl font-bold md:text-5xl  bg-custom-gradient-orange bg-clip-text text-transparent pb-2 ${
          isStart ? "text-start" : "text-center"
        }`}
      >
        {title}{" "}
        <span className="mb-2 text-3xl font-bold text-black md:text-5xl">
          {subdescription}
        </span>
      </h1>
      <p
        className={`p-4 text-base ${
          colorDesc ? `text-${colorDesc}` : "text-gray-600"
        } text-gray-600 md:p-0 ${isStart ? "text-start" : "text-center"}`}
      >
        {description}
      </p>
    </div>
  );
};

export default MainTitle;
