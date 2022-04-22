import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import bell from '../../assets/bell.png'
import lightBulb from '../../assets/lightbulb 1.png'
import vector1 from '../../assets/Vector 5.png'
import vector2 from '../../assets/Vector 4.png'

const NewsFirstSection = () => {
  return (
    <div className="w-full pt-32 flex justify-center items-center relative">
      <div className="flex flex-col w-full sm:w-96">
        <div className="flex flex-col justify-center items-center text-3xl lg:text-4xl xl:text-5xl font-semibold">
          <h1>Latest news</h1>
          <h1 className="text-secondary mt-3">Updates</h1>
        </div>
        <p className="text-gray-600 xl:text-lg px-4 tracking-wide my-6 text-center">Lorem Ipsum is simply dummy text of the printing .</p>
        <div className="relative my-3 w-full px-5">
        <AiOutlineSearch className="text-gray-500 absolute left-7 text-xl top-2"/>
        <input type="text" className="w-full rounded bg-gray-300 pl-12 pr-3 py-2 placeholder:text-gray-500 " placeholder="Search"/>

        </div>
      </div>
    <img src={bell} alt="bell" className="absolute w-20 xl:left-48 lg:left-36 sm:left-20 left-3 bottom-[12.5rem]  md:bottom-5" />

    <img src={lightBulb} alt="lightBulb" className="absolute w-24 sm:right-20 lg:right-36 xl:right-48  right-2 top-20" />

    <img src={vector2} alt="lightBulb" className="absolute w-28 left-0 bottom-16  md:block hidden"
     />

    <img src={vector1} alt="lightBulb" className="absolute w-36 right-20 bottom-6 md:block hidden md:right-10 lg:right-32 xl:right-48" />

    </div>
  );
};

export default NewsFirstSection;
