import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BookmarkIcon } from "@heroicons/react/20/solid";

function Star({ filled }) {
  return (
    <svg
      className={`w-3 h-3 ${filled ? "text-custom-primary" : "text-gray-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.922-.755 1.688-1.538 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.783.57-1.838-.196-1.538-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.03 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
    </svg>
  );
}

export default function ProductCard({
  photo,
  avatar,
  authorName,
  rating = 5,
  reviewCount,
  title,
  description,
  salary,
  salaryIcon,
  buttonText,
  onButtonClick,
  iconbutton,
}) {
  return (
    <div className="flex flex-col max-w-md border rounded-lg shadow-md">
      <img
        src={photo}
        alt={authorName}
        className="object-cover w-full h-56 rounded-lg"
      />

      <section className="flex flex-col gap-4 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} filled={i < rating} />
            ))}
            <span className="text-sm text-gray-600">
              ({reviewCount} reviews)
            </span>
          </div>
          <BookmarkIcon className="w-6 text-[#5D5D5D] cursor-pointer hover:text-custom-primary duration-300" />
        </div>

        <div>
          <h2 className="mb-1 font-bold cursor-pointer hover:text-custom-primary duration-300 lg:text-lg">
            {title}
          </h2>
          <p className="text-sm text-gray-700 line-clamp-2">{description}</p>
        </div>

        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={authorName}
            className="object-cover w-5 h-5 rounded-full"
          />
          <p className="text-sm text-gray-600">
            by{" "}
            <a
              href="#"
              className="font-semibold text-custom-primary hover:underline"
            >
              {authorName}
            </a>
          </p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 text-[#131212] text-2xl font-semibold">
            {salaryIcon && <div>{salaryIcon}</div>}
            <span>{salary}</span>
          </div>

          <button
            onClick={onButtonClick}
            className="bg-white text-[#13121280] group border-2 border-[#13121280] py-2 px-5 rounded-xl hover:bg-black hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            {buttonText}
            {iconbutton && (
              <div className="text-[#13121280] group-hover:text-white">
                {iconbutton}
              </div>
            )}
          </button>
        </div>
      </section>
    </div>
  );
}
