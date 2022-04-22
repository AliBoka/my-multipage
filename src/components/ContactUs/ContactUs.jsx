import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ballImg from "../../assets/ball 1.png";
const ContactUs = () => {
  return (
    <div className="flex w-full flex-col md:flex-row md:h-screen">
      <div className="flex flex-col justify-center items-center md:w-1/2 h-screen md:h-screen px-12 lg:px-20 xl:px-32 ">
        <div className="flex w-full justify-start mb-4 md:mb-10 ">
          <h1 className="text-2xl font-semibold ">
            Contact <span className="text-secondary">Us</span>
          </h1>
        </div>
        <form action="/" className="flex flex-col w-full">
          <label htmlFor="name" className="text-sm">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            className=" text-sm px-3 mt-2 w-full h-10 rounded-sm border border-gray-500"
            placeholder="Write your name"
          />
          <label htmlFor="name" className="text-sm mt-3 md:mt-7">
            Your Email
          </label>
          <input
            type="text"
            name="name"
            className=" text-sm px-3 mt-2 w-full h-10 rounded-sm border border-gray-500"
            placeholder="Sample@gmail.com"
          />
          <label htmlFor="name" className="text-sm mt-3 md:mt-8">
            Message
          </label>

          <textarea
            type="text"
            name="name"
            className=" text-sm px-3 mt-2 w-full py-3 h-24 md:h-48 rounded-sm border border-gray-500"
            placeholder="Write here . . . . . ."
          ></textarea>
          <div className="flex justify-end mt-8 md:mt-20">
            <button className="flex justify-center items-center text-white w-full md:w-40 h-12 bg-[#183643] font-light text-lg hover:bg-secondary transition-all duration-300 ">
              Send
              <BsArrowRight className="ml-2 text-xl " />
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col md:w-1/2 bg-contact md:h-screen h-screen bg-cover  bg-no-repeat text-white ">
        <div className="flex w-full md:h-4/5 h-[88%]  border-b border-b-rgba-white2 items-end pb-10 px-12">
          <div className="flex flex-col">
            <div className="flex mb-3 items-center py-2">
              <img src={ballImg} alt="ballImg" className="w-7 lg:w-8 lg:h-7 h-6 mt-1 mr-2" />
              <h1 className="text-xl lg:text-2xl font-semibold"> Address</h1>
            </div>
            <div className="flex flex-col text-sm lg:text-base font-light pl-9">
              <p className="mb-2">No 7, Katherine Place, Melbourne 3000,</p>
              <p>VIC Australia</p>
            </div>
          </div>
        </div>
        <div className="flex w-full md:h-1/5 h-[12%] ">
          <div className="flex justify-center items-center border-r border-r-rgba-white2 w-full text-xs sm:text-base ">
            +61 420 992 332
          </div>
          <div className="flex justify-center items-center border-r border-r-rgba-white2 w-full text-xs sm:text-base ">
            info@afq.com.au
          </div>
          <div className="flex justify-center items-center  w-full text-xs sm:text-base ">
            www.afqtech.com.au
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
