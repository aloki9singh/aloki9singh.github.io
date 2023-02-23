import React from "react";
import {
  HiArrowCircleRight,
  HiArrowNarrowRight,
  hitArrowNarrowRight,
} from "react-icons/hi";
import Resume from "../Download/Alok-Singh-Resume.pdf";
export const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* 
      container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ccd6f6]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Alok Singh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Web Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          A Collaborative team player who is proficient in working with
          interdisciplinary teams and executing goal oriented projects. Strongly
          interested in obtaining a Software Developer position to work on
          enhancing the product experience.
        </p>
        <div>
          <a
            href={Resume}
            download="Alok-Singh-Resume"
            onClick={() => window.open(Resume)}
          >
            <button className="text-white group  px-6 py-3 my-2 border-2 items-center flex hover:bg-[#639b65] hover:border-[#639b65] ">
              Resume{" "}
              <span className=" group-hover:rotate-90 duration-300">
                {" "}
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
