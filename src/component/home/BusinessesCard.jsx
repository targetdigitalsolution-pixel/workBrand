import React from 'react';

export default function BusinessesCard({ icon, title, items = [], className = '' }) {
  
  const renderIcon = (srcOrNode, size = 48) => {
    if (!srcOrNode) return null;
    if (typeof srcOrNode === 'string') {
      return (
        <img
          src={srcOrNode}
          alt="icon"
          style={{ width: size, height: size }}
          className="object-contain"
        />
      );
    }
    return srcOrNode; 
  };

  return (
    <div
      className={`flex flex-col items-center border-2 h-[500px] border-yellow-500 text-center p-6 w-full bg-[#232222] rounded-2xl shadow-md ${className}`}
    >
      <div className="mb-4">
        <div className="flex items-center justify-center w-20 h-20 rounded-full">
          {renderIcon(icon, 56)}
        </div>
      </div>

      <h3 className="mb-3 text-2xl font-semibold text-white duration-300 cursor-pointer hover:text-custom-primary">
        {title}
      </h3>

      <div className="w-16 h-1 mb-4 rounded bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600" />

      <div className="flex flex-col gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 overflow-hidden bg-white rounded-full">
              <img
                src={item.icon}
                alt="sub icon"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <p className="text-base text-white duration-300 cursor-pointer lg:text-lg hover:text-custom-primary">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
