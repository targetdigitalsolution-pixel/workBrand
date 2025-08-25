import React from "react";
import CustomMainButton from "./CustomMainButton";
import TripleArrowIcon from "./TripleArrowIcon";
import translations from "../../locales/en.json";

const UnderLineForm = ({ showPosition = false, showResume = false }) => {
  const { underlineform } = translations;

  return (
    <div className="p-8 shadow-md rounded-y-2xl">
      <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* First Name */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            {underlineform.FirstName}
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-transparent border-0 border-b-2 border-black outline-none hover:border-custom-primary"
            // placeholder={`Enter ${underlineform.FirstName}`}
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            {underlineform.LastName}
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-transparent border-0 border-b-2 border-black outline-none hover:border-custom-primary"
            // placeholder={`Enter ${underlineform.LastName}`}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            {underlineform.Email}
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 bg-transparent border-0 border-b-2 border-black outline-none hover:border-custom-primary"
            // placeholder={`Enter ${underlineform.Email}`}
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            {underlineform.PhoneNumber}
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-transparent border-0 border-b-2 border-black outline-none hover:border-custom-primary"
            // placeholder={`Enter ${underlineform.PhoneNumber}`}
          />
        </div>

        {showPosition && (
          <div>
            <label className="block mb-3 font-medium text-gray-700">
              Position You’re Applying For
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-transparent border-0 border-b-2 border-black outline-none hover:border-custom-primary"
              // placeholder="Position You’re Applying For"
            />
          </div>
        )}

        {showResume && (
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Upload Your Resume (PDF or Word)
            </label>
            <input
              type="file"
              className="w-full px-4 py-2 bg-transparent border-0 border-b-2 border-black outline-none hover:border-custom-primary"
              accept=".pdf,.doc,.docx"
            />
          </div>
        )}

        {/* Message */}
        <div className="md:col-span-2">
          <label className="block mb-2 font-medium text-gray-700">
            {underlineform.Message}
          </label>
          <textarea
            rows="4"
            className="w-full px-4 py-2 bg-transparent border-0 border-b-2 border-black outline-none hover:border-custom-primary"
            // placeholder=  {`Enter ${underlineform.Message}`}
            placeholder="Write your message.."
          ></textarea>
        </div>

        {/* Submit */}
        <div className="flex justify-end md:col-span-2">
          <div className="w-auto">
            <CustomMainButton
              fullWidth
              text={"Send"}
              TripleArrow={
                <TripleArrowIcon
                  // color={"custom-primary"}
                  hoverColor={"white"}
                />
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UnderLineForm;
