import React from "react";
import vrImg from "../../assets/VR Array 1.png";
import lineChartImg from "../../assets/Line Chart 1.png";
import clockImg from "../../assets/clock 1.png";
const HomeSecondSection = () => {
  return (
    <div className="w-full bg-slate-100">
      <div className="flex flex-col ">
        <div className="flex flex-col justify-center items-center pt-20 pb-16">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium">
            About <span className="text-secondary">Lorem</span>
          </h1>
          <p className="w-4/5 xl:w-3/5 mt-7 text-center text-sm lg:text-base xl:text-lg">
            At AFQ Tech, we believe in a systematic approach for any project be
            it complex or simple. We are a group of individuals with a various
            set of skill set varies from Digital Marketing to IoT/Robotics
            solutions. We have our dedicated team for your project which uses
            various methods such as agile Scrum & agile Kanban. We ensure
            top-notch quality, on-time delivery, and agility for your project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 lg:gap-6 xl:gap-14 justify-center w-full items-center px-10 xl:px-24 2xl:px-32 mb-10">
          <div className="flex flex-col p-4 bg-gray-200 w-full rounded-lg  items-center shadow-xl hover:bg-slate-50">
            <img src={vrImg} alt="clock" className="w-28" />
            <h2 className="font-bold my-3">Cutting Edge Technology</h2>
            <p className="text-sm font-light text-center text-gray-700 ">
              Take the advantage of our cutting-edge solutions to increase your
              Return of Investment on IT.
            </p>
          </div>
          <div className="flex flex-col p-4 bg-gray-200 w-full  rounded-lg items-center shadow-xl hover:bg-slate-50">
            <img src={lineChartImg} alt="clock" className="w-36 my-6" />
            <h2 className="font-bold my-3">Cutting Edge Technology</h2>
            <p className="text-sm font-light text-center text-gray-700 ">
              Take the advantage of our cutting-edge solutions to increase your
              Return of Investment on IT.
            </p>
          </div>
          <div className="flex flex-col p-4 bg-gray-200 w-full  rounded-lg items-center shadow-xl hover:bg-slate-50">
            <img src={clockImg} alt="clock" className="w-28" />
            <h2 className="font-bold my-3">Cutting Edge Technology</h2>
            <p className="text-sm font-light text-center text-gray-700 ">
              Take the advantage of our cutting-edge solutions to increase your
              Return of Investment on IT.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 w-full mt-8"></div>
    </div>
  );
};

export default HomeSecondSection;
