import React from "react";

const TermsCondition = ({ number, title, description, list,description1,description2,description3 }) => {
  return (
    <div className="h-full max-container mb-6   drop-shadow-sm rounded-lg border bg-white  border-gray-200 p-5  ">
      <h3 className="flex items-start text-xl font-bold text-black m-2">
        {number && <span className="mr-2">{number}.</span>}
        {title}
      </h3>

      {description && (
        <p className="text-gray-600 leading-relaxed m-2">{description}</p>
      )}

      {Array.isArray(list) && list.length > 0 && (
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          {list.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )}
      {description && (
        <p className="text-gray-600 leading-relaxed m-2">{description1}</p>
      )}
      {description && (
        <p className="text-gray-600 leading-relaxed m-2">{description2}</p>
      )}
      {description && (
        <p className="text-custom-primary leading-relaxed ">{description3}</p>
      )}
    </div>
  );
};

export default TermsCondition;
