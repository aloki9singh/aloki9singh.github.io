import React from "react";
import Profile from "../Pngs/prof1.JPG";
export const About2 = () => {
  return (
    <div
      name="about"
      className="w-full h-screen  bg-[#0a192f] text-gray-300 grid align-content: center"
    >
      <div className=" max-w-[1000px] p-4 h-full w-full m-auto grid align-content: center sm:grid-cols-2 gap-10 px-4">
        <div id="about" className="about section">
          <p
            id="user-detail-name"
            className="text-4xl  font-bold inline  border-b-4 border-[#ccd6f6]"
          >
            About Me{" "}
          </p>
          <div
            id="user-detail-intro"
            className="sm:text-left h-full grid align-center  sm:text-xl  font-bold"
          >
            <p className="pt-8 ">
              Hi, I'm Alok, nice to meet you. Please take a look around. I have
              spent 2000+ hours in coding learning MERN, CSS, HTML, JS, solving
              DSA problems and gained experience with various miniprojects and
              projects during construct week. Strongly interested in obtaining a
              Software Developer position to work on enhancing the product
              experience.What would you do if you had a proficient developer
              available at your fingertips?
            </p>
          </div>
        </div>

        <div className="flex justify-center align-middle sm:justify-end  ">
          <img
            className="home-img w-50 h-40  rounded-full lg:w-80 lg:h-80 sm:w-80 sm:h-80"
            src={Profile}
            alt="profile"
          />
        </div>
      </div>
      {/* <div className="flex flex-col justify-center items-center w-100 h-30"> */}
      {/* <img className="w-100  h-30 rounded-full" src={Profile} alt="" /> */}
      {/* </div> */}
    </div>
  );
};
