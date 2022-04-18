import React, { useState } from "react";
import "../index.css";
import { HiOutlineArrowNarrowRight, HiOutlineCode } from "react-icons/hi";
import userIcon from "../assets/user-icon.png";
import bell from "../assets/bell.png";
import Bulb from "../assets/Bulb.png";
import ReactStars from "react-rating-stars-component";
import { RiComputerLine } from "react-icons/ri";
import vrImg from "../assets/VR Array 1.png";
import lineChartImg from "../assets/Line Chart 1.png";
import clockImg from "../assets/clock 1.png";
import webAppImg from "../assets/apps 1.png";
import gameDevImg from "../assets/console 1.png";
import seoImg from "../assets/startup 1.png";
import lotImg from "../assets/cloud-computing 1.png";
import bigImg from "../assets/link (3) 1.png";
import CyberImg from "../assets/cyber-security 1.png";
import mobileAppImg from "../assets/coding 1.png";
import digiImg from "../assets/promotion (1) 1.png";
import bellAngleImg from "../assets/Bell Angle 1.png";
import succlentImg from "../assets/Succlent angle 1.png";
import vector1Img from "../assets/Vector 1.png";
import vector2Img from "../assets/Vector 2.png";
import vector3Img from "../assets/Vector 3.png";
import slide1 from "../assets/Rectangle 12.png";
import slide2 from "../assets/Rectangle 13.png";
import slide3 from "../assets/Rectangle 14.png";
import slide4 from "../assets/Rectangle 15.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Home = () => {
  const [starValue, setStarValue] = useState(4);
  const handleRating = (rate) => {
    setStarValue(rate);
    const handleDragStart = (e) => e.preventDefault();
  };
  const items = [
    <div className="flex flex-col rounded-md w-80 h-[31rem]  my-10  shadow-lg ">
      <img src={slide1} alt="slide1" className="rounded-md w-80" />
      <div className="flex flex-col mt-3 p-3">
        <p className="text-xs font-bold text-gray-500">12/12/2020</p>
        <p className="text-sm font-bold my-3">Holoplot</p>
        <p className="text-gray-800 text-justify text-xs leading-7 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </p>
        <div className="flex w-full justify-end">
          <h1 className="flex items-center font-bold cursor-pointer py-3">
            Read more
            <HiOutlineArrowNarrowRight className="text-2xl ml-1" />{" "}
          </h1>
        </div>
      </div>
    </div>,
    <div className="flex flex-col rounded-md w-80 h-[31rem]  my-10  shadow-lg ">
      <img src={slide2} alt="slide2" className="rounded-md w-80 " />
      <div className="flex flex-col mt-3 p-3">
        <p className="text-xs font-bold text-gray-500">12/12/2020</p>
        <p className="text-sm font-bold my-3">Nawaloka Hospitals Mobile App</p>
        <p className="text-gray-800 text-justify text-xs leading-7 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </p>
        <div className="flex w-full justify-end">
          <h1 className="flex items-center font-bold cursor-pointer py-3">
            Read more
            <HiOutlineArrowNarrowRight className="text-2xl ml-1" />
          </h1>
        </div>
      </div>
    </div>,
    <div className="flex flex-col rounded-md w-80 h-[31rem]  my-10  shadow-lg ">
      <img src={slide4} alt="slide4" className="rounded-md w-80 " />
      <div className="flex flex-col mt-3 p-3">
        <p className="text-xs font-bold text-gray-500">12/12/2020</p>
        <p className="text-sm font-bold my-3">
          Smart Solution For Ambuluwawa Biodiversity Complex
        </p>
        <p className="text-gray-800 text-justify text-xs leading-7 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </p>
        <div className="flex w-full justify-end">
          <h1 className="flex items-center font-bold cursor-pointer py-3">
            Read more
            <HiOutlineArrowNarrowRight className="text-2xl ml-1" />
          </h1>
        </div>
      </div>
    </div>,
    <div className="flex flex-col rounded-md w-80 h-[31rem]  my-10  shadow-lg ">
      <img src={slide1} alt="slide3" className="rounded-md w-80 " />
      <div className="flex flex-col mt-3 p-3">
        <p className="text-xs font-bold text-gray-500">12/12/2020</p>
        <p className="text-sm font-bold my-3">Nawaloka Hospitals Mobile App</p>
        <p className="text-gray-800 text-justify text-xs leading-7 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </p>
        <div className="flex w-full justify-end">
          <h1 className="flex items-center font-bold cursor-pointer py-3">
            Read more
            <HiOutlineArrowNarrowRight className="text-2xl ml-1" />
          </h1>
        </div>
      </div>
    </div>,
  ];
  return (
    <div className=" w-full">
      {/* ------------ first Section ------------ */}
      <div>
        <div className="flex flex-col justify-center pt-24 sm:pt-40 lg:pt-32 px-8 bg-primary  sm:h-screen  text-white -z-50">
          <div className="flex flex-col">
            <div className="flex flex-col items-center text-center  text-3xl lg:text-4xl xl:text-5xl font-bold">
              <h1 className="">Advanced software, advanced</h1>
              <h1 className="my-2">
                research for <span className="text-secondary">SIMPLE </span>{" "}
                life
              </h1>
            </div>
            <div className="flex justify-center items-center mt-10">
              <p className="text-center w-full sm:w-3/5 lg:text-lg xl:text-xl">
                We harness the latest technologies to develop cutting-edge
                digital solutions for modern business requirements
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
        <div className="w-full bg-slate-100">
          <div className="flex flex-col ">
            <div className="flex flex-col justify-center items-center pt-20 pb-16">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium">
                About <span className="text-secondary">Lorem</span>
              </h1>
              <p className="w-4/5 xl:w-3/5 mt-7 text-center text-sm lg:text-base xl:text-lg">
                At AFQ Tech, we believe in a systematic approach for any project
                be it complex or simple. We are a group of individuals with a
                various set of skill set varies from Digital Marketing to
                IoT/Robotics solutions. We have our dedicated team for your
                project which uses various methods such as agile Scrum & agile
                Kanban. We ensure top-notch quality, on-time delivery, and
                agility for your project.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 lg:gap-6 xl:gap-14 justify-center w-full items-center px-10 xl:px-24 2xl:px-32 mb-10">
              <div className="flex flex-col p-4 bg-gray-200 w-full rounded-lg  items-center shadow-xl hover:bg-slate-50">
                <img src={vrImg} alt="clock" className="w-28" />
                <h2 className="font-bold my-3">Cutting Edge Technology</h2>
                <p className="text-sm font-light text-center text-gray-700 ">
                  Take the advantage of our cutting-edge solutions to increase
                  your Return of Investment on IT.
                </p>
              </div>
              <div className="flex flex-col p-4 bg-gray-200 w-full  rounded-lg items-center shadow-xl hover:bg-slate-50">
                <img src={lineChartImg} alt="clock" className="w-36 my-6" />
                <h2 className="font-bold my-3">Cutting Edge Technology</h2>
                <p className="text-sm font-light text-center text-gray-700 ">
                  Take the advantage of our cutting-edge solutions to increase
                  your Return of Investment on IT.
                </p>
              </div>
              <div className="flex flex-col p-4 bg-gray-200 w-full  rounded-lg items-center shadow-xl hover:bg-slate-50">
                <img src={clockImg} alt="clock" className="w-28" />
                <h2 className="font-bold my-3">Cutting Edge Technology</h2>
                <p className="text-sm font-light text-center text-gray-700 ">
                  Take the advantage of our cutting-edge solutions to increase
                  your Return of Investment on IT.
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 w-full mt-8"></div>
        </div>
        <div className="w-full bg-slate-100">
          <div className="flex flex-col justify-center items-center pb-16">
            <h1 className="text-2xl xl:text-3xl font-semibold mt-14 mb-10">
              What we do
            </h1>
            <div className="what-we-do px-8 py-8 ">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex justify-center items-center bg-red-100 rounded-xl">
                  <img src={webAppImg} alt="webAppImg" className="w-8" />
                </div>
                <h2 className="mt-8 mb-4 text-lg font-medium">
                  Web Application
                </h2>
                <p className="text-xs text-gray-500 text-center px-4">
                  Platform independant business solutions for maximum
                  availability
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex justify-center items-center bg-amber-100 rounded-xl">
                  <img src={gameDevImg} alt="gameDevImg" className="w-8" />
                </div>
                <h2 className="mt-8 mb-4 text-lg font-medium">
                  Game Develepmet
                </h2>
                <p className="text-xs text-gray-500 text-center px-4">
                  Platform independant business solutions for maximum
                  availability
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex justify-center items-center bg-blue-100 rounded-xl">
                  <img src={seoImg} alt="seoImg" className="w-8" />
                </div>
                <h2 className="mt-8 mb-4 text-lg font-medium">SEO</h2>
                <p className="text-xs text-gray-500 text-center px-4">
                  Platform independant business solutions for maximum
                  availability
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex justify-center items-center bg-fuchsia-200 rounded-xl">
                  <img src={lotImg} alt="lotImg" className="w-8" />
                </div>
                <h2 className="mt-8 mb-4 text-lg font-medium">
                  Iot/ AI/ RObotic
                </h2>
                <p className="text-xs text-gray-500 text-center px-4">
                  Platform independant business solutions for maximum
                  availability
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex justify-center items-center bg-stone-200 rounded-xl">
                  <img src={bigImg} alt="bigImg" className="w-8" />
                </div>
                <h2 className="mt-8 mb-4 text-lg font-medium">BIG Data</h2>
                <p className="text-xs text-gray-500 text-center px-4">
                  Platform independant business solutions for maximum
                  availability
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex justify-center items-center bg-gray-200 rounded-xl">
                  <img src={CyberImg} alt="CyberImg" className="w-8" />
                </div>
                <h2 className="mt-8 mb-4 text-lg font-medium">
                  Cyber Security
                </h2>
                <p className="text-xs text-gray-500 text-center px-4">
                  Platform independant business solutions for maximum
                  availability
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
                  Platform independant business solutions for maximum
                  availability
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex justify-center items-center bg-emerald-100 rounded-xl">
                  <img src={digiImg} alt="digiImg" className="w-8" />
                </div>
                <h2 className="mt-8 mb-4 text-lg font-medium">
                  Digital Marketing
                </h2>
                <p className="text-xs text-gray-500 text-center px-4">
                  Platform independant business solutions for maximum
                  availability
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center h-[30rem] text-white bg-slate-100 ">
          <div className="bg-primary px-24 lg:px-28 xl:px-40 2xl:px-44 py-24 flex flex-col md:flex-row items-center w-full justify-between relative">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium">
                6
              </h1>
              <p className="text-xs lg:text-sm xl:text-base">ppy Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium">
                11
              </h1>
              <p className="text-xs lg:text-sm xl:text-base">
                Compled Projects
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium">
                7M
              </h1>
              <p className="text-xs lg:text-sm xl:text-base">anssactions</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium">
                6000+
              </h1>
              <p className="text-xs lg:text-sm xl:text-base">Customers</p>
            </div>
            <img
              src={bellAngleImg}
              alt="bellAngleImg"
              className="absolute w-24 -top-14 right-36 "
            />
            <img
              src={succlentImg}
              alt="succlentImg"
              className="absolute w-20 -bottom-7 left-48 "
            />
            <img
              src={vector1Img}
              alt="vector1Img"
              className="absolute w-32 bottom-0 left-0 "
            />
            <img
              src={vector2Img}
              alt="vector2Img"
              className="absolute w-32 -top-16 left-24 "
            />
            <img
              src={vector3Img}
              alt="vector3Img"
              className="absolute w-40 -top-8 right-44 "
            />
          </div>
        </div>
        <div className="bg-slate-100 px-10 ">
          <AliceCarousel
            mouseTracking
            autoPlay={true}
            animationType={"fadeout"}
            animationDuration={1000}
            autoPlayInterval={5000}
            infinite
            autoHeight
            // autoWidth
            items={items}
            responsive={{
              0: {
                items: 1,
              },
              640: {
                items: 2,
              },
              1000: {
                items: 3,
              },
              1400: {
                items: 4,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
