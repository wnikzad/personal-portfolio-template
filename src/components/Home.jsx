import React from "react";
import { Link } from "react-scroll";
import profileImage from "../assets/profile_image.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";

export const Home = () => {
  return (
    <div
      id="/home"
      className="w-full max-w-[1140px] h-screen mx-auto p-4 mt-[60px] items-center flex justify-center"
    >
      <div className="sm:flex items-center">
        <div className="w-full sm:w-2/6 md:w-3/6 lg:w-2/6 mb-4 sm:mb-0">
          <div className="sm:max-w-[300px]">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full transition-all duration-700 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
            />
          </div>
        </div>
        <div className="w-full sm:w-4/6">
          <p className="text-4xl font-bold mb-4 sm:text-5xl">Hello there,</p>

          <p className="mb-2 font-semibold">
            Thanks for visiting my portfolio!
          </p>
          <p>I'm John, a React developer with a passion for technology.</p>
          <p className="max-w-[750px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            dolore accusamus impedit hic illum non ut a ducimus sequi. Pariatur
            mollitia libero obcaecati rem magnam numquam, quam sit nobis iste.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <Link to="/contact" offset={-60} smooth={true} duration={500}>
            <button className="group border-2 border-[#AAAAAA] px-6 py-3 my-6 flex items-center ">
              Contact
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
