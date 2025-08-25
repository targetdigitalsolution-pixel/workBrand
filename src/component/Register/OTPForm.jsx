import React, { useRef, useState, useEffect } from "react";

const OTPForm = ({ title, subtitle, signInText, imageSrc, Iconlock, text }) => {
  const inputsRef = useRef([]);
  const [timer, setTimer] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    if (!isTimerRunning || timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      if (index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
    } else {
      e.target.value = "";
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setTimer(60);
    setIsTimerRunning(true);
  };

  return (
    <div className="flex flex-col p-6 bg-white shadow-md rounded-2xl md:flex-row md:p-0">
      {/* Left Image */}
      <div className="flex items-center justify-center w-full mb-6 md:w-1/2 md:mb-0">
        <img
          src={imageSrc}
          alt="OTP Illustration"
          className="w-full md:h-full md:rounded-s-2xl md:rounded-none rounded-xl h-[325px] object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="flex flex-col justify-center md:my-6 md:gap-6 md:mx-12 md:w-1/2">
        <div className="justify-center md:justify-start">
          <span className="p-2 rounded-full">{Iconlock}</span>
        </div>

        <h2 className="flex items-center gap-2 text-2xl font-bold md:text-3xl text-custom-black">
          {title}
        </h2>
        <p className="mt-3 text-custom-black">{subtitle}</p>

        <form className="flex flex-col gap-5 mt-6" onSubmit={handleVerify}>
          {/* OTP Inputs */}
          <div className="flex justify-between gap-0 my-5 md:gap-2">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-12 h-12 text-lg text-center border border-gray-300 rounded-full focus:outline-none focus:border-custom-primary"
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputsRef.current[index] = el)}
              />
            ))}
          </div>

          <button
            type="submit"
            className="py-3 text-white transition rounded-lg bg-custom-gradient-orange hover:opacity-90"
          >
            {signInText}
          </button>

          <div className="flex gap-5">
            <span>{text}</span>
            <span className="font-bold text-custom-primary">
              {minutes}:{seconds.toString().padStart(2, "0")}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPForm;
