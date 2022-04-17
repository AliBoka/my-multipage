import React, { useState } from "react";
import { HiOutlineArrowNarrowRight, HiOutlineCode } from "react-icons/hi";
import userIcon from "../assets/user-icon.png";
import bell from "../assets/bell.png";
import Bulb from "../assets/Bulb.png";
import ReactStars from "react-rating-stars-component";
import { RiComputerLine } from "react-icons/ri";
const Home = () => {
  const [starValue, setStarValue] = useState(4);
  const handleRating = (rate) => {
    setStarValue(rate);
  };
  return (
    <div className=" w-full">
      {/* ------------ first Section ------------ */}
      <div className="flex flex-col justify-center pt-24 sm:pt-40 lg:pt-32 px-8 bg-primary  sm:h-screen  text-white -z-50">
        <div className="flex flex-col">
          <div className="flex flex-col items-center text-center  text-3xl lg:text-4xl xl:text-5xl font-bold">
            <h1 className="">Advanced software, advanced</h1>
            <h1 className="my-2">
              research for <span className="text-secondary">SIMPLE </span> life
            </h1>
          </div>
          <div className="flex justify-center items-center mt-10">
            <p className="text-center w-full sm:w-3/5 lg:text-lg xl:text-xl">
              We harness the latest technologies to develop cutting-edge digital
              solutions for modern business requirements
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center text-lg justify-between border bg-rgba-white2 w-52 h-14 rounded sm:mt-20 mt-10 pl-3 pr-2">
              <p className="mx-3">Get a Quote</p>
              <div className="flex group hover:bg-secondary rounded-md justify-center items-center bg-white w-12 h-11 hover:cursor-pointer">
                <HiOutlineArrowNarrowRight className="text-black text-xl group-hover:rotate-360 transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 sm:mt-24">
            <div className="flex justify-between w-60">
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
                  1234
                </h2>
                <p className="text-xs lg:text-sm xl:text-base font-thin w-24">
                  Lorem Ipsum is simply.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
                  1234
                </h2>
                <p className="text-xs lg:text-sm xl:text-base font-thin w-24">
                  Lorem Ipsum is simply.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute bottom-10  sm:top-52 sm:left-4 xl:left-20 2xl:left-32 lg:w-52 lg:h-52 lg:mx-2 mx-5 lg:my-0 my-5 bg-rgba-white3   flex lg:flex sm:hidden flex-col px-4 py-3 rounded-2xl  ">
          <div className="flex items-center">
            <img src={userIcon} alt="user-pic" className="w-10" />
            <p className="ml-2">John rikey</p>
          </div>
          <div className="mt-1 flex items-center fleco">
            <ReactStars count={5} value={starValue} onChange={handleRating} />
            <p className="text-xs ml-3">{`${starValue}`}</p>
          </div>
          <h2 className="font-medium my-1">Lorem Ipsum is simply dummy</h2>
          <p className="text-xs font-thin tracking-wider">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="lg:absolute  bottom-40 right-16 xl:right-20 2xl:right-40 lg:w-52 lg:h-52 lg:mx-0 mx-5 bg-rgba-white4  sm:hidden flex lg:flex  px-4 py-4 rounded-2xl justify-center lg:justify-start lg:mb-0 mb-6 ">
          <div className="lg:relative flex flex-col  justify-center">
            <div className="lg:absolute top-3 -left-20 w-full lg:w-52 bg-white  h-16  rounded-lg p-3 mb-3 lg:mb-0">
              <div className="flex">
                <div>
                  <div className="rounded-full flex justify-center items-center bg-[#FD5B71] w-10 h-10">
                    <HiOutlineCode size={22} />
                  </div>
                </div>
                <div className="flex flex-col justify-between ml-3 w-full">
                  <h1 className="text-black text-sm font-bold">
                    Web Development
                  </h1>
                  <div className="flex justify-between w-full my-2 px-2">
                    <p className="text-gray-800 text-[0.70rem] cursor-pointer ">
                      Personal
                    </p>
                    <p className="text-[#866b6f] text-[0.70rem] cursor-pointer ">
                      Coding
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:absolute top-24 -left-9 w-64 bg-white  h-16  rounded-lg pb-3 pt-2 px-3">
              <div className="flex">
                <div>
                  <div className="rounded-full flex justify-center items-center bg-[#9B51E0] w-10 h-10">
                    <RiComputerLine size={22} />
                  </div>
                </div>
                <div className="flex flex-col justify-between ml-3 w-full">
                  <h1 className="text-black text-sm font-bold">
                    Web Development
                  </h1>
                  <div className="flex justify-between w-full my-2 pl-2 pr-5">
                    <p className="text-gray-800 text-[0.70rem] cursor-pointer ">
                      Work
                    </p>
                    <p className="text-[#9B51E0] text-[0.70rem] cursor-pointer ">
                      Interactive games
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={Bulb}
          className="absolute right-0 sm:right-16 top-[23.2rem] sm:top-36 xl:right-48 sm:w-auto sm:h-auto w-20 "
          alt="bulb"
        />
        <img
          src={bell}
          className="absolute top-96 sm:top-auto left-3 sm:left-28 sm:bottom-20 xl:left-48 sm:w-auto sm:h-auto w-20"
          alt="bulb"
        />
      </div>
    </div>
  );
};

export default Home;
