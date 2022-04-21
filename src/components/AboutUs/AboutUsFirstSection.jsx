import React from "react";
import firstImg from '../../assets/Group 100.png'
const AboutUsFitstSection = () => {
  return (
   
      <div className="flex flex-col md:flex-row bg-slate-200 px-8 items-center md:h-screen justify-center pt-20 md:pt-0">
        <div className="flex flex-col md:w-1/2 w-full">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-7 xl:mb-12">
            Who <span className="text-secondary">we are....</span>
          </h1>
          <p className="text-sm leading-8 lg:leading-9 xl:leading-10 2xl:leading-12  lg:text-base xl:text-lg ">
            At AFQ Tech, we believe in a systematic approach for any project be
            it complex or simple. We are a group of individuals with a various
            set of skill set varies from Digital Marketing to IoT/Robotics
            solutions. We have our dedicated team for your project which uses
            various methods such as agile Scrum & agile Kanban. We ensure
            top-notch quality, on-time delivery, and agility for your project.
          </p>
        </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <img src={firstImg} alt="firstImg" />
          </div>
      </div>
    
  );
};

export default AboutUsFitstSection;
