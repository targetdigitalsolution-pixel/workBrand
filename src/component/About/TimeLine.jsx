import React from "react";

const timelineData = [
  {
    year: "2017",
    title: "The Launch",
    description:
      "We started from a small office in Nasr City with a big vision: Provide practical office solutions with real value for business owners.",
  },
  {
    year: "2018",
    title: "Expanding Office Solutions",
    description:
      "We introduced flexible packages and services tailored for different sized entrepreneurs.",
  },
  {
    year: "2019",
    title: "Entering The Media World",
    description:
      "We launched our media production services and opened our first media studio.",
  },
  {
    year: "2020",
    title: "More Packages, More Services",
    description:
      "We expanded our services to include branding and digital marketing.",
  },
  {
    year: "2021",
    title: "Shift to Training & Consulting",
    description:
      "We started specialized training programs and consultancy for entrepreneurs.",
  },
  {
    year: "2022",
    title: "New Branch in Mohandessin",
    description:
      "We opened our new branch to deliver office solutions closer to clients.",
  },
  {
    year: "2023",
    title: "VIP Space & Bigger Impact",
    description:
      "We launched VIP offices with tailored luxury experiences for business owners.",
  },
];

const Timeline = () => {
  return (
    <>
      <section className="relative max-container md:p-5 lg:p-0 mb-12 hidden md:block">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-custom-primary h-full"></div>

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="relative w-5/12 bg-custom-gradient-card shadow-md p-6 rounded-xl">
                <h3 className="text-xl font-bold text-custom-primary mb-2">
                  {item.year}
                </h3>
                <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>

                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-6 h-6  bg-custom-gradient-orange  shadow-lg  shadow-orange-300 rounded-full  ${
                    index % 2 === 0 ? "-right-12" : "-left-12"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-container mb-12 block md:hidden ">
        <div className="  space-y-12">
          {timelineData.map((item, index) => (
            <div key={index} className=" relative flex items-center w-full">
              <div className="relative w-full bg-custom-gradient-card shadow-md p-5 m-5 rounded-xl">
                <h3 className="text-xl text-center font-bold text-custom-primary mb-2">
                  {item.year}
                </h3>
                <h4 className="text-lg text-center font-semibold mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Timeline;
