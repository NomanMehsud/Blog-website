import React from "react";
import bgImage from "../assets/bg1_img.jpg"
import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative w-[100%] flex items-center justify-center pt-6">
      <div
        className=" bg-cover bg-center w-[95%] h-[600px] rounded-xl"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute flex flex-col items-center justify-center gap-2">
        <h2 className=" text-2xl font-bold text-white">Blog Details</h2>
        <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, doloremque!</p>
        <div className="flex items-center justify-center ">
            <input type="search" className="p-3 w-[300px] bg-white outline-none rounded-l-md"/>
            <div className="bg-blue-700 p-3 text-gray-200 rounded-r-md">
                <FaSearch size={25} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
