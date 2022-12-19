import React from "react";

import Github from "../Pngs/github.png";
import Git from "../Pngs/gitlogo.png";
import vscode from "../Pngs/vscode.png";

const Tools = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f]  text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#ccd6f6]">
            Tools
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8">
          <div className="shadow-md shadow-[#040c16]  hover:scale-110 duration-500 ">
            <img
              className="w-20 mx-auto"
              src={Git}
              alt="Git Icon"
            />
            <p className="my-4">Git</p>
          </div>
          <div className="shadow-md shadow-[#040c16]  hover:scale-110 duration-500 ">
            <img
              className="w-20 mx-auto"
              src={vscode}
              alt="CSS Icon"
            />
            <p className="my-4">VSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16]  hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Github} alt="Github Icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16]  hover:scale-110 duration-500 ">
            <img
              className="w-20 mx-auto"
              src="https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png"
              alt="Tailwind Icon"
            />
            <p className="my-4">Netlify</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
