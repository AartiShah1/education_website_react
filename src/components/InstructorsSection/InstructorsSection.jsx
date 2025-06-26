import React from "react";
import instructor_1 from "../../assets/images/Instructor/instructor_1.jpg";
import instructor_2 from "../../assets/images/Instructor/instructor_2.jpg";
import instructor_3 from "../../assets/images/Instructor/instructor_3.jpg";
import instructor_4 from "../../assets/images/Instructor/instructor_4.jpg";
import instructor_5 from "../../assets/images/Instructor/instructor_5.jpg";
import fullstack from "../../assets/images/courses/fullstack.jpg";

const InstructorsSection = () => {
  const instructors = [
    {
      id: 1,
      name: "Er. Suresh Bhattarai",
      role: "Lead Software Engineer | Kathmandu, Nepal",
      experience: "12+ Years Experience",
      image: instructor_1,
    },
    {
      id: 2,
      name: "Er. Anjali Shakya",
      role: "Frontend Specialist | Patan, Nepal",
      experience: "7+ Years Experience",
      image: instructor_3,
    },
    {
      id: 3,
      name: "Er. Bibek Poudel",
      role: "MERN Stack Expert | Pokhara, Nepal",
      experience: "6+ Years Experience",
      image: instructor_2,
    },
    {
      id: 4,
      name: "Er. Binod Karki",
      role: "UI/UX Mentor Expert | Lalitpur, Nepal",
      experience: "5+ Years Experience",
      image: instructor_4,
    },
    {
      id: 5,
      name: "Er. Nischal Yadav",
      role: "Cloud Engineer | Birgunj, Nepal",
      experience: "8+ Years Experience",
      image: instructor_5,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Learn from Industry <span className="text-secondary">Professionals</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Code IT offers expert-led IT training by industry professionals from Nepal, helping students master in-demand skills through practical, job-focused learning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {instructor.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{instructor.role}</p>
              <div className="flex items-center text-sm text-gray-500">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{instructor.experience}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsSection;
