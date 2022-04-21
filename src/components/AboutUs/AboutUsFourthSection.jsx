import React from "react";

const AboutUsFourthSection = () => {
  return (
    <div className="flex justify-center items-center py-28 px-20">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center bg-gray-300 px-8 py-7 rounded-md">
        <div className="flex flex-col sm:w-1/2">
          <h1 className="text-xl font-medium">Stay in the loop</h1>
          <p className="text-gray-600 text-sm">
            Subscribe to receive the latest news and updates about TDA. We
            promise not to spam you!
          </p>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <div className=" w-full flex justify-center"> 
          <div className="relative">

          <input type="email" className="bg-white text-sm pl-3 pr-[6.5rem] py-2   w-64 sm:w-72 mt-10 sm:mt-0 rounded placeholder:text-gray-600" placeholder="Enter email address" />
          <button className="absolute bg-secondary text-white rounded px-3 py-1.5 text-sm flex justify-center items-center right-0.5 bottom-0.5">Continue</button>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsFourthSection;
