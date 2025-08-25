import React from "react";
import Notific_1 from "../../../assets/images/Notific_1.webp";
import Notific_2 from "../../../assets/images/Notific_2.webp";
const ListInCart = () => {
  const items = [
    {
      title: "Workspace Booking Confirmed",
      desc: "Your meeting room for 12 Feb is confirmed.",
      img: Notific_1,
      price: 30,
    },
    {
      title: "Document Submission Approved",
      desc: "Your legal papers have been successfully verified.",
      img: Notific_2,
      price: 15,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-4 rounded-lg shadow-md cursor-pointer"
          >
            <div className="w-5/12 ">
              <img
                src={item.img}
                className="max-h-[140px] object-cover w-full rounded-lg"
                alt={item.title}
              />
            </div>
            <main className="flex items-center justify-between w-7/12 gap-4 pe-4">
              <div>
                <h1 className="font-bold sm:text-lg">
                  {item.title.split(" ").length > 2
                    ? item.title.split(" ").slice(0, 2).join(" ") + "..."
                    : item.title}
                </h1>
                <h3 className="text-sm text-gray-600">{item.desc}</h3>
              </div>

              <h3 className="font-bold sm:text-lg">
                <span>{item.price}$</span>
              </h3>
            </main>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListInCart;
