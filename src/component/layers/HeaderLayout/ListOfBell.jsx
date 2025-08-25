import React from "react";
import Notific_1 from "../../../assets/images/Notific_1.webp";
import Notific_2 from "../../../assets/images/Notific_2.webp";
import Notific_3 from "../../../assets/images/Notific_3.webp";
import Notific_4 from "../../../assets/images/Notific_4.webp";
const ListInBell = () => {
  const itemsToday = [
    {
      title: "Workspace Booking Confirmed",
      desc: "Your meeting room for 12 Feb is confirmed.",
      img: Notific_1,
    },
    {
      title: "Document Submission Approved",
      desc: "Your legal papers have been successfully verified.",
      img: Notific_2,
    },
  ];
  const itemsYesterday = [
    {
      title: "Marketing Campaign Ready",
      desc: "Your scheduled campaign for “Spring Offer” is now live.",
      img: Notific_3,
    },
    {
      title: "Website Analytics Update",
      desc: "Your website got 2,350 visits this week.",
      img: Notific_4,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h1 className="text-bold">Today</h1>
        {itemsToday.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-4 rounded-lg shadow-md cursor-pointer"
          >
            <div className="w-4/12 ">
              <img
                src={item.img}
                className="max-h-[120px] object-cover w-full rounded-lg"
                alt={item.title}
              />
            </div>
            <div className="w-8/12">
              <h3 className="font-bold sm:text-lg ">{item.title}</h3>
              <h3 className="text-sm text-gray-600">{item.desc}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <h1 className="text-bold">Yesterday</h1>
        {itemsYesterday.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-4 rounded-lg shadow-md cursor-pointer"
          >
            <div className="w-4/12 ">
              <img
                src={item.img}
                className="max-h-[120px] object-cover w-full rounded-lg"
                alt={item.title}
              />
            </div>
            <div className="w-8/12">
              <h3 className="font-bold sm:text-lg ">{item.title}</h3>
              <h3 className="text-sm text-gray-600">{item.desc}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListInBell;
