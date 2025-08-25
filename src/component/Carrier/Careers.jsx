import React from "react";

const Careers = () => {
  // مثال على وظائف مفتوحة
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Cairo, Egypt",
      description:
        "Work on building user interfaces using React and Tailwind CSS.",
    },
    {
      title: "Backend Developer",
      location: "Remote",
      description:
        "Develop APIs and manage database interactions using Node.js.",
    },
    {
      title: "Graphic Designer",
      location: "Cairo, Egypt",
      description:
        "Create visually appealing designs for digital and print media.",
    },
  ];

  return (
    <div className="space-y-6">
      {jobs.map((job, index) => (
        <div
          key={index}
          className="border p-5 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
          <p className="text-gray-500 mb-2">{job.location}</p>
          <p className="text-gray-700">{job.description}</p>
          <button className="mt-4 bg-custom-primary text-white px-4 py-2 rounded-lg hover:bg-black transition">
            Apply Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Careers;
