import React from "react";
import fullstack from "../../assets/images/courses/fullstack.jpg";
import Digital_Marketing from "../../assets/images/courses/Digital_Marketing.jpg";
import JavaScript_Mastery from "../../assets/images/courses/JavaScript_Mastery.jpg";
import Laravel from "../../assets/images/courses/Laravel.jpg";
import Web_Designing from "../../assets/images/courses/Web_Designing.jpg";
import React_dev from "../../assets/images/courses/React_dev.jpg";
import Python from "../../assets/images/courses/Python.jpg";
import UI_Design from "../../assets/images/courses/UI_Design.jpg";
import Video_editing from "../../assets/images/courses/Video_editing.jpg";
import PHP_dev from "../../assets/images/courses/PHP_dev.jpg";


const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Web Designing",
      duration: "14 Days | 1.5 Hours/Day",
      price: "Rs.999/-",
      startDate: "Jul 15, 2023",
      seats: "15 seats left",
      image: Web_Designing,
      category: "HTML/CSS"
    },
    {
      id: 2,
      title: "JavaScript Mastery",
      duration: "1 Month | 2 Hours/Day",
      price: "Rs.1,799/-",
      startDate: "Jul 20, 2023",
      seats: "10 seats left",
      image: JavaScript_Mastery,
      category: "JavaScript"
    },
    {
      id: 3,
      title: "React Development",
      duration: "6 Weeks | 2 Hours/Day",
      price: "Rs.2,199/-",
      startDate: "Aug 1, 2023",
      seats: "8 seats left",
      image: React_dev,
      category: "React"
    },
    {
      id: 4,
      title: "Laravel Framework",
      duration: "1 Month | 1.5 Hours/Day",
      price: "Rs.2,499/-",
      startDate: "Jul 25, 2023",
      seats: "12 seats left",
      image: Laravel,
      category: "Laravel"
    },
    {
      id: 5,
      title: "Python & Django",
      duration: "2 Months | 2 Hours/Day",
      price: "Rs.2,999/-",
      startDate: "Aug 5, 2023",
      seats: "10 seats left",
      image: Python,
      category: "Python"
    },
    {
      id: 6,
      title: "UI/UX Design",
      duration: "3 Weeks | 1.5 Hours/Day",
      price: "Rs.1,499/-",
      startDate: "Jul 18, 2023",
      seats: "7 seats left",
      image: UI_Design,
      category: "Design"
    },
    {
      id: 7,
      title: "Digital Marketing",
      duration: "1 Month | 1.5 Hours/Day",
      price: "Rs.1,899/-",
      startDate: "Aug 10, 2023",
      seats: "15 seats left",
      image: Digital_Marketing,
      category: "Marketing"
    },
    {
      id: 8,
      title: "Video Editing",
      duration: "4 Weeks | 2 Hours/Day",
      price: "Rs.2,299/-",
      startDate: "Aug 15, 2023",
      seats: "6 seats left",
      image: Video_editing,
      category: "Adobe Suite"
    },
    {
      id: 9,
      title: "PHP & MySQL",
      duration: "5 Weeks | 1.5 Hours/Day",
      price: "Rs.2,199/-",
      startDate: "Jul 30, 2023",
      seats: "9 seats left",
      image: PHP_dev,
      category: "Backend"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold text-primary ">Start
           <span className="text-2xl md:text-3xl font-bold text-secondary "> Learning </span>: Popular IT Courses
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Code IT offers top-rated IT courses with expert-led, job-focused training.
          </p>
        </div>
        <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white text-sm font-medium py-2 px-6 rounded transition-colors duration-300 shadow hover:shadow-md">
          View All Courses
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[var(--color-primary)]"
          >
            <div className="h-40 overflow-hidden relative">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-2 right-2 bg-[var(--color-primary)] text-white text-xs px-2 py-1 rounded">
             
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-[var(--color-primary)] transition-colors duration-200">
                  {course.title}
                </h2>
                <span className="text-md font-bold text-[var(--color-primary)]">
                  {course.price}
                </span>
              </div>

              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center text-gray-500 text-xs">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Starts: {course.startDate}</span>
                </div>
                <div className="flex items-center text-gray-500 text-xs">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <div className="flex items-center text-gray-500 text-xs">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>{course.seats}</span>
                </div>
                <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white text-sm font-medium py-1.5 px-4 rounded transition-colors duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;