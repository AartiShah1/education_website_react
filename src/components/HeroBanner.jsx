import React from 'react';
import hero_banner from '../assets/images/hero_banner.jpg';
// import fullstack from '../assets/images/courses/fullstack.jpg';

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-[#01287a]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={hero_banner}
          alt="Students learning together"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[#093FB4] opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
       <h1 className="text-4xl md:text-5xl font-bold mb-4">
  <span className="text-secondary">Transform</span> Your Career with Cutting-Edge IT Training
</h1>

        
        <p className="text-sm md:text-lg max-w-3xl md:mb-8 md:mt-4  mb-9 mt-2">
          Join Nepal's premier IT learning platform where industry experts equip you with in-demand tech skills. 
          Our hands-on courses bridge the gap between academia and real-world IT challenges.
        </p>

        <div className="flex flex-col items-center">
          {/* <p className="text-xl mb-8 max-w-xl">
            From beginner to advanced levels, we offer comprehensive programs in web development, 
            cloud computing, cybersecurity, and more - all designed to make you job-ready.
          </p> */}
          
          <button className="relative bg-white text-[#093FB4] py-3 px-8 rounded-lg font-bold text-lg 
                            transition-all duration-300 ease-in-out 
                            hover:scale-105 hover:shadow-2xl hover:bg-[#f0f0f0]
                            ">
            <span className="relative z-10 ">Find Your Course</span>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;