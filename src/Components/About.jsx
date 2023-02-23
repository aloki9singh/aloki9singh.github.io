import React from "react";
import Profile from  "../Pngs/prof2.jpg"
export const About = () => {
  return (
    <div name="about" className="w-full h-screen p-5 bg-[#0a192f] text-gray-300 ">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full   flex justify-center gap-8">
            <div className="sm:text-right pb-4 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-[#ccd6f6]">
                About Me
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] h-screen w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right h-full text-4xl font-bold">
              <p>Hi, I'm Alok, nice to meet you. Please take a look around.
              A Collaborative team player who is proficient in working with
                interdisciplinary teams and executing goal oriented projects.
                {/* Strongly interested in obtaining a Software Developer position to
                work on enhancing the product experience.What would you do if you
                had a proficient developer available at your fingertips? */}
              </p>
             </div>
            <div className="flex flex-col justify-center items-center w-full h-30">
              {/* <p>
                A Collaborative team player who is proficient in working with
                interdisciplinary teams and executing goal oriented projects.
                Strongly interested in obtaining a Software Developer position to
                work on enhancing the product experience.What would you do if you
                had a proficient developer available at your fingertips?
              </p> */}
              <img className="w-100  h-30 rounded-full" src={Profile} alt="" />
            </div>
           </div>
        </div>
    </div>
  );
};
