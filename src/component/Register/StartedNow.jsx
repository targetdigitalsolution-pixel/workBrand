import React, { useState } from "react";
import GoogleIcon from "../sharedComponents/GoogleIcon";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const StartedNowPage = ({
  title,
  subtitle,
  emailPlaceholder,
  passwordPlaceholder,
  rememberMeText,
  forgotPasswordText,
  signInText,
  googleSignInText,
  additionalText,
  additionalLinkText,
  additionalLinkHref,
  imageSrc,
  Iconmail,
  Iconlock,
  titilelabel1,
  titilelabel2,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl p-8 md:p-16 gap-12">
      <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
        <img src={imageSrc} className="w-3/4" alt="Illustration" />
      </div>

      <div className="md:w-1/2 w-full flex flex-col justify-center gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-start mb-3">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 text-center md:text-start">
            {subtitle}
          </p>
        </div>

        <form className="flex flex-col gap-6">
          {/* Email Field */}
          <div className="relative flex flex-col gap-1">
            {titilelabel1 && (
              <label className="font-medium">{titilelabel1}</label>
            )}
            <span className="absolute left-4 top-[65%] -translate-y-1/2 text-gray-400">
              {Iconmail}
            </span>
            <input
              type="email"
              placeholder={emailPlaceholder}
              className="border border-custom-primary rounded-2xl p-4 pl-14 w-full focus:outline-none focus:border-custom-primary text-lg"
            />
          </div>

          {/* Password Field */}
          <div className="relative flex flex-col gap-1">
            {titilelabel2 && (
              <label className="font-medium flex justify-between items-center">
                {titilelabel2}
              </label>
            )}
            <span className="absolute left-4 top-[65%] -translate-y-1/2 text-gray-400">
              {Iconlock}
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder={passwordPlaceholder}
              className="border border-custom-primary rounded-2xl p-4 pl-14 pr-14 w-full focus:outline-none focus:border-custom-primary text-lg"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[65%] -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-6 w-6" />
              ) : (
                <EyeIcon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-sm text-gray-500">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="appearance-none w-4 h-4 border border-gray-300 rounded-sm checked:bg-custom-primary checked:border-[#8B4513] relative
                before:content-['✓'] before:absolute before:text-white before:top-[-2px] before:left-[3px] before:opacity-0 checked:before:opacity-100"
              />
              {rememberMeText}
            </label>
            <a href="#" className="text-custom-primary hover:underline">
              {forgotPasswordText}
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-custom-gradient-orange text-white rounded-2xl py-3 text-lg font-semibold hover:opacity-90 transition"
          >
            {signInText}
          </button>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            className="border border-gray-300 text-custom-primary rounded-2xl py-3 px-4 flex items-center gap-3 hover:bg-gray-100 w-full"
          >
            <GoogleIcon />
            <span className="flex-grow text-center">{googleSignInText}</span>
            <span className="w-5"></span>
          </button>

          {/* Additional Text */}
          {additionalText && (
            <p className="text-center text-sm mt-4">
              {additionalText}{" "}
              <a
                href={additionalLinkHref}
                className="text-custom-primary hover:underline"
              >
                {additionalLinkText}
              </a>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default StartedNowPage;
