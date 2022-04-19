import React from "react";

import webAppImg from "../../assets/apps 1.png";
import gameDevImg from "../../assets/console 1.png";
import seoImg from "../../assets/startup 1.png";
import lotImg from "../../assets/cloud-computing 1.png";
import bigImg from "../../assets/link (3) 1.png";
import CyberImg from "../../assets/cyber-security 1.png";
import mobileAppImg from "../../assets/coding 1.png";
import digiImg from "../../assets/promotion (1) 1.png";

const HomeThirdSection = () => {
  return (
    <div className="w-full bg-slate-100">
      <div className="flex flex-col justify-center items-center pb-16">
        <h1 className="text-2xl xl:text-3xl font-semibold mt-14 mb-10">
          What we do
        </h1>
        <div className="what-we-do px-8 py-8 gap-y-16 gap-x-4 lg:gap-x-16 xl:gap-x-[7.5rem] 2xl:gap-x-44">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex justify-center items-center bg-red-100 rounded-xl">
              <img src={webAppImg} alt="webAppImg" className="w-8" />
            </div>
            <h2 className="mt-8 mb-4 text-lg font-medium">Web Application</h2>
            <p className="text-xs text-gray-500 text-center px-4">
              Platform independant business solutions for maximum availability
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex justify-center items-center bg-amber-100 rounded-xl">
              <img src={gameDevImg} alt="gameDevImg" className="w-8" />
            </div>
            <h2 className="mt-8 mb-4 text-lg font-medium">Game Develepmet</h2>
            <p className="text-xs text-gray-500 text-center px-4">
              Platform independant business solutions for maximum availability
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex justify-center items-center bg-blue-100 rounded-xl">
              <img src={seoImg} alt="seoImg" className="w-8" />
            </div>
            <h2 className="mt-8 mb-4 text-lg font-medium">SEO</h2>
            <p className="text-xs text-gray-500 text-center px-4">
              Platform independant business solutions for maximum availability
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex justify-center items-center bg-fuchsia-200 rounded-xl">
              <img src={lotImg} alt="lotImg" className="w-8" />
            </div>
            <h2 className="mt-8 mb-4 text-lg font-medium">Iot/ AI/ RObotic</h2>
            <p className="text-xs text-gray-500 text-center px-4">
              Platform independant business solutions for maximum availability
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex justify-center items-center bg-stone-200 rounded-xl">
              <img src={bigImg} alt="bigImg" className="w-8" />
            </div>
            <h2 className="mt-8 mb-4 text-lg font-medium">BIG Data</h2>
            <p className="text-xs text-gray-500 text-center px-4">
              Platform independant business solutions for maximum availability
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex justify-center items-center bg-gray-200 rounded-xl">
              <img src={CyberImg} alt="CyberImg" className="w-8" />
            </div>
            <h2 className="mt-8 mb-4 text-lg font-medium">Cyber Security</h2>
            <p className="text-xs text-gray-500 text-center px-4">
              Platform independant business solutions for maximum availability
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex justify-center items-center bg-violet-200 rounded-xl">
              <img src={mobileAppImg} alt="mobileAppImg" className="w-8" />
            </div>
            <h2 className="mt-8 mb-4 text-lg font-medium">
              Mobile Applications
            </h2>
            <p className="text-xs text-gray-500 text-center px-4">
              Platform independant business solutions for maximum availability
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex justify-center items-center bg-emerald-100 rounded-xl">
              <img src={digiImg} alt="digiImg" className="w-8" />
            </div>
            <h2 className="mt-8 mb-4 text-lg font-medium">Digital Marketing</h2>
            <p className="text-xs text-gray-500 text-center px-4">
              Platform independant business solutions for maximum availability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeThirdSection;
