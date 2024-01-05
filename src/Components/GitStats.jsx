import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

export const GitStats = () => {
  return (
    <div>
      <div
        name="gitstats"
        className="w-full h-220vh pt-20 bg-[#0a192f]  text-gray-300"
      >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-[#ccd6f6]">
              Git Stats & Git Calendar
            </p>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-1 gap-5 text-center py-8">
            <div
             
              className="react-activity-calendar shadow-md shadow-[#040c16]   hover:scale-110 duration-500 overflow-hidden text-ellipsis"
            >
              <GitHubCalendar
                username="aloki9singh"
                // transformData={selectLastHalfYear}
                blockSize={20}
                fontSize={20}
              >
                <ReactTooltip delayShow={20} />
              </GitHubCalendar>

              <p className="my-4">Git Calendar</p>
            </div>

            <div className=" shadow-md shadow-[#040c16]  hover:scale-110 duration-500 ">
              <div className="flex justify-center">
                <img
                  id="github-streak-stats"
                  src="https://github-readme-streak-stats.herokuapp.com?user=aloki9singh&theme=gruvbox-duo&hide_border=true&date_format=j%20M%5B%20Y%5D&mode=weekly"
                  alt="alok_streak"
                />
              </div>
              <p className="my-4">Git Streak</p>
            </div>
            <div className=" shadow-md shadow-[#040c16]  hover:scale-110 duration-500 ">
              <div className="flex justify-center">
                <img
                  id="github-top-langs"
                  align="center"
                  src="https://github-readme-stats.vercel.app/api/top-langs?username=aloki9singh&show_icons=true&locale=en&layout=compact"
                  alt="aloki9singh"
                />
              </div>
              <p className="my-4">Most Used Languages</p>
            </div>
            <div className=" shadow-md shadow-[#040c16]  hover:scale-110 duration-500 ">
              <div className="flex justify-center">
                <img
                  id="github-stats-card"
                  align="center"
                  src="https://github-readme-stats.vercel.app/api?username=aloki9singh&show_icons=true&locale=en"
                  alt="aloki9singh"
                />
              </div>
              <p className="my-4">Github Stats</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
