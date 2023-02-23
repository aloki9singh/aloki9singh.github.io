import React from "react";
import Myglamm from "../Pngs/myglamm.png";
import Shephora from "../Pngs/shephora.png";
// className="opacity-0 group-hover:opacity-100 "
const Project = () => {
  return (
    <div
      name="project"
      className=" w-full  bg-[#0a192f] text-gray-300  md:h-screen"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4  text-gray-300 border-[#ccd6f6] ">
            Projects
          </p>
          <p className="py-6"> Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* GridItem */}
          <div
            style={{ backgroundImage: `url(${Shephora})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div >
              <span className="text-2xl font-bold text-gray-900 tracking-wider">
                Shephora Clone
              </span>
              <div className="pt-8 text-center">
                <a href="https://offbeat-jeans-3946.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Netlify
                  </button>
                </a>
                <a href="https://github.com/aloki9singh/offbeat-jeans-3946/tree/main/offbeat-jeans-3946">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>

            <div>
              
            </div>

          </div>
          {/* //2 */}
          <div
            style={{ backgroundImage: `url(${Myglamm})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-gray-900   tracking-wider">
                My Glamm
              </span>
              <div className="pt-8 text-center">
                <a href="https://bucolic-brioche-1a6175.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Netlify
                  </button>
                </a>
                <a href="https://github.com/kapil-khursade/incandescent-yarn-8212">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* //3 */}
          <div
            style={{ backgroundImage: `url(${Shephora})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-gray-900  tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Netlify
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
