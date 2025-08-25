import React, { useState, useEffect } from "react";

const ImpactButtonCard = ({ icon, number = 0, description }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (number === 0) return;

    let start = 0;
    const duration = 5000;
    const increment = Math.ceil(number / (duration / 30));

    const counter = setInterval(() => {
      start += increment;
      if (start >= number) {
        setCount(number);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(counter);
  }, [number]);

  return (
    <card className="relative flex flex-col items-center justify-center w-full gap-2 p-6 overflow-hidden text-white rounded-lg shadow-md group">
      <div className="absolute inset-0 transition-opacity duration-300 bg-custom-gradient-card"></div>

      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-custom-gradient-dark"></div>

      <div className="relative flex flex-col items-center gap-4">
        <div className="flex flex-row items-center justify-center">
          <div className="pb-3 text-5xl text-custom-primary">+</div>
          <div className="text-3xl font-bold text-custom-primary">{count}</div>
        </div>
        <div className="text-lg text-center text-black duration-300 group-hover:text-white">{description}</div>
      </div>
    </card>
  );
};

export default ImpactButtonCard;
