import React from "react";
import HTML from "../assets/html.svg";
import CSS from "../assets/css.svg";
import JavaScript from "../assets/javascript.svg";
import Bootstrap from "../assets/bootstrap.svg";
import Tailwind from "../assets/tailwind.svg";
import PHPIcon from "../assets/php.svg";
import ReactImg from "../assets/react.svg";
import SQLIcon from "../assets/sql.svg";
import WordPress from "../assets/wordpress.svg";
import PowerApps from "../assets/powerapps.svg";
import PowerBI from "../assets/powerbi.svg";
import Photoshop from "../assets/photoshop.svg";

export const Skills = () => {
  return (
    <div id="/skills" className="w-full max-w-[1140px] h-screen mx-auto p-4">
      <h2 className="text-4xl font-bold sm:text-left mb-3">Skills</h2>
      <p className="mb-12">
        I am proficient in the following tools and technologies
      </p>

      <div className="w-full max-w-[1140px] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 gap-y-12 justify-between">
        <div className=" flex-grow flex-shrink w-full items-center justify-items-center text-center hover:transform hover:scale-110 hover:transition hover:duration-300">
          <img
            className="mx-auto max-w-[64px] mb-3"
            src={HTML}
            alt="HTML5 icon"
          />
          <p>HTML5</p>
        </div>
        <div className=" flex-grow flex-shrink w-full items-center justify-items-center text-center hover:transform hover:scale-110 hover:transition hover:duration-300">
          <img
            className="mx-auto max-w-[64px] mb-3"
            src={CSS}
            alt="HTML5 icon"
          />
          <p>CSS3</p>
        </div>

        <div className=" flex-grow flex-shrink w-full items-center justify-items-center text-center hover:transform hover:scale-110 hover:transition hover:duration-300">
          <img
            className="mx-auto max-w-[64px] mb-3"
            src={JavaScript}
            alt="HTML5 icon"
          />
          <p>JavaScript</p>
        </div>

        <div className=" flex-grow flex-shrink w-full items-center justify-items-center text-center hover:transform hover:scale-110 hover:transition hover:duration-300">
          <img
            className="mx-auto max-w-[64px] mb-3"
            src={Bootstrap}
            alt="HTML5 icon"
          />
          <p>Bootstrap</p>
        </div>

        <div className=" flex-grow flex-shrink w-full items-center justify-items-center text-center hover:transform hover:scale-110 hover:transition hover:duration-300">
          <img
            className="mx-auto max-w-[64px] mb-3"
            src={Tailwind}
            alt="HTML5 icon"
          />
          <p>Tailwind CSS</p>
        </div>

        <div className=" flex-grow flex-shrink w-full items-center justify-items-center text-center hover:transform hover:scale-110 hover:transition hover:duration-300">
          <img
            className="mx-auto max-w-[64px] mb-3"
            src={ReactImg}
            alt="HTML5 icon"
          />
          <p>React JS</p>
        </div>

        <div className=" flex-grow flex-shrink w-full items-center justify-items-center text-center hover:transform hover:scale-110 hover:transition hover:duration-300">
          <img
            className="mx-auto max-w-[64px] mb-3"
            src={PHPIcon}
            alt="HTML5 icon"
          />
          <p>PHP</p>
        </div>

        <div className=" flex-grow flex-shrink w-full items-center justify-items-center text-center hover:transform hover:scale-110 hover:transition hover:duration-300">
          <img
            className="mx-auto max-w-[64px] mb-3"
            src={SQLIcon}
            alt="HTML5 icon"
          />
          <p>SQL</p>
        </div>
        <div className=" flex-grow flex-shrink w-full items-center justify-items-center text-center hover:transform hover:scale-110 hover:transition hover:duration-300">
          <img
            className="mx-auto max-w-[64px] mb-3"
            src={WordPress}
            alt="HTML5 icon"
          />
          <p>WordPress</p>
        </div>

        <div className=" flex-grow flex-shrink w-full items-center justify-items-center text-center hover:transform hover:scale-110 hover:transition hover:duration-300">
          <img
            className="mx-auto max-w-[64px] mb-3"
            src={PowerApps}
            alt="HTML5 icon"
          />
          <p>Power Apps</p>
        </div>
        <div className=" flex-grow flex-shrink w-full items-center justify-items-center text-center hover:transform hover:scale-110 hover:transition hover:duration-300">
          <img
            className="mx-auto max-w-[64px] mb-3"
            src={PowerBI}
            alt="HTML5 icon"
          />
          <p>Power BI</p>
        </div>
        <div className=" flex-grow flex-shrink w-full items-center justify-items-center text-center hover:transform hover:scale-110 hover:transition hover:duration-300">
          <img
            className="mx-auto max-w-[64px] mb-3"
            src={Photoshop}
            alt="HTML5 icon"
          />
          <p>Photoshop</p>
        </div>
      </div>
    </div>
  );
};
