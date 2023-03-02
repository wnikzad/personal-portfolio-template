import React, { useState } from "react";
import {
  FaBars,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMobile = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    // Nav Bar main div
    <div className="fixed top-0 left-0 right-0 bg-inherit z-50 border-b-2 border-slate-500 border-opacity-30">
      <div className="h-[60px] mx-auto p-4 items-center flex justify-between bg-inherit w-full max-w-[1140px]">
        <div className="text-center sm:text-left">
          <Link to="/home" offset={-60} smooth={true} duration={500}>
            <h1 className="font-bold text-3xl z-50 cursor-pointer">
              Your Logo
            </h1>
          </Link>
        </div>
        {/* Desktop Nav menu */}
        <ul className="hidden sm:flex ml-[100px] items-center justify-between">
          <li className="px-3 hover:transform hover:scale-110 hover:transition hover:duration-300 cursor-pointer">
            <Link to="/home" smooth={true} offset={-60} duration={500}>
              Home
            </Link>
          </li>

          <li className="px-3 hover:transform hover:scale-110 hover:transition hover:duration-300 cursor-pointer">
            <Link to="/skills" smooth={true} offset={-60} duration={500}>
              Skills
            </Link>
          </li>
          <li className="px-3 hover:transform hover:scale-110 hover:transition hover:duration-300 cursor-pointer">
            <Link to="/works" smooth={true} offset={-60} duration={500}>
              Work
            </Link>
          </li>
          <li className="px-3 hover:transform hover:scale-110 hover:transition hover:duration-300 cursor-pointer">
            <Link to="/contact" smooth={true} offset={-60} duration={500}>
              Contact
            </Link>
          </li>
          <li className="px-3 hover:transform hover:scale-110 hover:transition hover:duration-300 cursor-pointer">
            <a href="/blog" target="_blank" rel="noreferrer">
              Blog
            </a>
          </li>
        </ul>
        {/* Desktop social icons */}
        <ul className="hidden sm:flex items-center justify-between">
          <li className="px-3">
            <a target="_blank" rel="noreferrer" href="/">
              <FaLinkedin className="cursor-pointer" />
            </a>
          </li>
          <li className="px-3">
            <a target="_blank" rel="noreferrer" href="/">
              <FaGithub className="cursor-pointer" />
            </a>
          </li>
          <li className="px-3">
            <a href="/">
              <FaEnvelope className="cursor-pointer" />
            </a>
          </li>
        </ul>
        {/* Mobile nav menu */}
        <ul
          className={`${
            mobileMenu
              ? "text-xl flex flex-col items-center justify-center w-full h-screen absolute top-0 left-0 bg-inherit"
              : "hidden"
          } sm:hidden`}
        >
          <li className="py-2">
            <Link
              onClick={toggleMobile}
              to="/home"
              offset={-60}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="py-2">
            <a href="/blog" target="_blank" rel="noreferrer">
              Blog
            </a>
          </li>
          <li className="py-2">
            <Link
              onClick={toggleMobile}
              to="/skills"
              offset={-60}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-2">
            <Link
              onClick={toggleMobile}
              to="/works"
              offset={-60}
              smooth={true}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li className="py-2">
            <Link
              onClick={toggleMobile}
              to="/contact"
              offset={-60}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Humberger icon */}
        <div className="z-10 ml-5 sm:hidden" onClick={toggleMobile}>
          {mobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
    </div>
  );
};
