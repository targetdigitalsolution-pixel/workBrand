import React from "react";
import bgSection from "../../assets/images/bg-sectionAbout.webp";
import {
  CheckCircleIcon,
  EyeIcon,
  HeartIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

const StatementSection = () => {
  const cards = [
    {
      id: 1,
      icon: CheckCircleIcon,
      title: "Mission",
      description:
        "To empower business owners with smart, practical services that cover all business needs.",
    },
    {
      id: 2,
      icon: EyeIcon,
      title: "Vision",
      description:
        "To become the number one destination for fully integrated business solutions.",
    },
    {
      id: 3,
      icon: HeartIcon,
      title: "Core Values",
      description:
        "Professionalism – Innovation – Transparency – A Commitment to Excellence.",
    },
    {
      id: 4,
      icon: PencilIcon,
      title: "Our Promise",
      description:
        "We keep evolving to offer smart solutions that save time, reduce hassle, and drive real impact.",
    },
  ];

  return (
    <section
      className=" mb-12 py-16 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgSection})` }}
    >
      <div className="max-w-6xl mx-auto text-center ">
        <h2 className="text-2xl text-center md:text-start md:text-4xl font-bold text-custom-primary mb-2">
          Since Day One, Our Purpose Has Been Clear: To Truly Support Every
          Business Owner and Entrepreneur
        </h2>
        <p className="text-white text-center md:text-start mb-2 mx-auto">
          We're not just an office provider — we deliver complete solutions to
          help you launch, grow, and scale with confidence. Our goal has always
          been to be the only partner you need to focus on your success.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className="group bg-transparent hover:bg-custom-primary shadow-md rounded-xl p-6 text-start hover:shadow-md transition border border-white"
            >
              <Icon className="h-8 w-8 text-custom-primary mb-3 transition group-hover:text-white" />
              <h3 className="text-xl text-white font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-white text-sm">{card.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatementSection;
