
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import CoursesSection from "../components/Course/CoursesSection"
import InstructorsSection from "../components/InstructorsSection/InstructorsSection"


function Landing_page() {
 
  return (
    <>
   
<div>
  <HeroBanner />
  <CoursesSection />
  <InstructorsSection />
</div>
    </>
  )
}

export default Landing_page
