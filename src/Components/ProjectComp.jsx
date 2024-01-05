import React from "react";
import { FaHeading } from "react-icons/fa";
import { Button } from "react-scroll";
import Myglamm from "../Pngs/myglamm.png";
import Shephora from "../Pngs/shephora.png";
import Github from "../Pngs/github.png";
import Myntra from "../Pngs/myntra.png";
import Portfolio from "../Pngs/Portfolio.png";
// className="opacity-0 group-hover:opacity-100 "
const ProjectContainer = () => {
  return (
    <div
      name="project"
      className=" w-full  bg-[#0a192f] text-gray-300  md:h-120vh"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4  text-gray-300 border-[#ccd6f6] ">
            Projects
          </p>
          <p className="py-6"> Check out some of my recent work</p>
        </div>
        <section class="bg-[#0a192f] dark:bg-gray-900">
          <div class=" container px-6 py-10 mx-auto  bg-[#0a192f]">
            <div
              id="projects"
              class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2  bg-[#0a192f]"
            >
              {/* //1 */}
              <div className="project-card shadow-md shadow-[#040c16]  hover:scale-110 duration-500 p-5 rounded  bg-[#0a192f] ">
                <img
                  class="object-cover object-center w-full h-64 rounded-lg lg:h-50"
                  src={Myglamm}
                  alt=""
                />

                <div class="mt-5">
                  <span className="project-title text-blue-500 uppercase">
                    MyGlamm
                  </span>

                  <h1 className="project-description mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                    A clone of MyGlamm website to buy Cosmetic Products based on
                    beauty products. This Project was build by 5 members in 5
                    days .(Group)
                  </h1>

                  <p className="project-tech-stack mt-2 text-gray-500 dark:text-gray-400">
                    <b className="text-blue-400">Tech Stack : </b>HTML | CSS |
                    JAVASCRIPT | Heroku API.
                  </p>
                  {/* "https://bucolic-brioche-1a6175.netlify.app/" */}
                  <div class="flex items-center justify-between mt-4">
                    <a
                      onClick={() =>
                        window.open(`https://myglammclonecw.netlify.app/`)
                      }
                      className="project-deployed-link text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                      <button>
                        <img
                          className="w-10 mx-auto"
                          src="https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png"
                          alt="Tailwind Icon"
                        />
                        <p class="text-sm text-gray-500 dark:text-gray-400">
                          Demo
                        </p>
                      </button>
                    </a>
                    <a
                      onClick={() =>
                        window.open(
                          `https://github.com/kapil-khursade/incandescent-yarn-8212`
                        )
                      }
                      // href="https://github.com/kapil-khursade/incandescent-yarn-8212"
                      className="project-github-link text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                      <button>
                        <img
                          className="w-10 mx-auto"
                          src={Github}
                          alt="Tailwind Icon"
                        />
                        <p class="text-sm text-gray-500 dark:text-gray-400">
                          Github
                        </p>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              {/* //2rd */}

              <div className="project-card shadow-md shadow-[#040c16]  hover:scale-110 duration-500 p-5 rounded  bg-[#0a192f]">
                <img
                  class="object-cover object-center w-full h-64 rounded-lg lg:h-50"
                  src={Myntra}
                  alt="MyntShop"
                />

                <div class="mt-5">
                  <span className="project-title text-blue-500 uppercase">
                    MyntShop
                  </span>

                  <h1 className="project-description mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                    "MyntShop" a clone of Myntra website to buy various dressing
                    and beauty Products. This Project was build by 5 members in
                    5 days (Group)
                  </h1>

                  <p className="project-tech-stack mt-2 text-gray-500 dark:text-gray-400">
                    <b className="text-blue-400">Tech Stack : </b>
                    React | Chakra UI | Vercel API | MaterialUI | CSS |Redux .
                  </p>
                  {/* "https://bucolic-brioche-1a6175.netlify.app/" */}
                  <div class="flex items-center justify-between mt-4">
                    <a
                      onClick={() =>
                        window.open(`https://myntra-black.vercel.app/`)
                      }
                      className="project-deployed-link text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                      <button>
                        <img
                          className="w-10 mx-auto"
                          src="https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png"
                          alt="Tailwind Icon"
                        />
                        <p class="text-sm text-gray-500 dark:text-gray-400">
                          Demo
                        </p>
                      </button>
                    </a>
                    <a
                      onClick={() =>
                        window.open(
                          `https://github.com/harshau9/eager-grain-3783`
                        )
                      }
                      className="project-github-link text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                     
                      <button>
                        <img
                          className="w-10 mx-auto"
                          src={Github}
                          alt="Tailwind Icon"
                        />
                        <p class="text-sm text-gray-500 dark:text-gray-400">
                          Github
                        </p>
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* //3 */}

              <div className="project-card shadow-md shadow-[#040c16]  hover:scale-110 duration-500 p-5 rounded  bg-[#0a192f]">
                <img
                  class="object-cover object-center w-full h-64 rounded-lg lg:h-50"
                  src={Shephora}
                  alt=""
                />

                <div class="mt-5">
                  <span className="project-title text-blue-500 uppercase">
                    sephora
                  </span>

                  <h1 className="project-description mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                    A clone of Shephora website to buy various Cosmetic Beauty
                    Products. This Project was build in 5 days(Individual)
                  </h1>

                  <p className="project-tech-stack mt-2 text-gray-500 dark:text-gray-400">
                    <b className="text-blue-400">Tech Stack :</b> React | Chakra
                    UI | Heroku API | Reqres API.
                  </p>

                  <div class="flex items-center justify-between mt-4">
                    <a
                      onClick={() =>
                        window.open(`https://offbeat-jeans-3946.vercel.app/`)
                      }
                      className="project-deployed-link text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                      <button>
                        <img
                          className="w-10 mx-auto"
                          src="https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png"
                          alt="Tailwind Icon"
                        />
                        <p class="text-sm text-gray-500 dark:text-gray-400">
                          Demo
                        </p>
                      </button>
                    </a>
                    <a
                      onClick={() =>
                        window.open(
                          `https://github.com/aloki9singh/offbeat-jeans-3946/tree/main/offbeat-jeans-3946`
                        )
                      }
                      className="project-github-link text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                     
                      <button>
                        <img
                          className="w-10 mx-auto"
                          src={Github}
                          alt="Tailwind Icon"
                        />
                        <p class="text-sm text-gray-500 dark:text-gray-400">
                          Github
                        </p>
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* //4 */}

              <div className="project-card shadow-md shadow-[#040c16]  hover:scale-110 duration-500 p-5 rounded  bg-[#0a192f]">
                <img
                  class="object-cover object-center w-full h-64 rounded-lg lg:h-50"
                  src={Portfolio}
                  alt=""
                />

                <div class="mt-5">
                  <span className="project-title text-blue-500 uppercase">
                    Portfolio
                  </span>

                  <h1 className="project-description mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                    A self representing place to know more about me , my
                    projects and respective details. This Project was build in 4
                    days(Individual)
                  </h1>

                  <p className="project-tech-stack mt-2 text-gray-500 dark:text-gray-400">
                    <b className="text-blue-400">Tech Stack : </b>HTML | CSS |
                    JAVASCRIPT | Tailwind.
                  </p>
                  {/* "https://bucolic-brioche-1a6175.netlify.app/" */}
                  <div class="flex items-center justify-between mt-4">
                    <a
                      onClick={() =>
                        window.open(`https://aloki9singh.github.io/`)
                      }
                      className="project-deployed-link text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                      <button>
                        <img
                          className="w-10 mx-auto"
                          src="https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png"
                          alt="Tailwind Icon"
                        />
                        <p class="text-sm text-gray-500 dark:text-gray-400">
                          Demo
                        </p>
                      </button>
                    </a>
                    <a
                      onClick={() =>
                        window.open(
                          "https://github.com/aloki9singh/aloki9singh.github.io/tree/master"
                        )
                      }
                      className="project-github-link text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                     
                      <button>
                        <img
                          className="w-10 mx-auto"
                          src={Github}
                          alt="Tailwind Icon"
                        />
                        <p class="text-sm text-gray-500 dark:text-gray-400">
                          Github
                        </p>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectContainer;
// https://github.com/kapil-khursade/incandescent-yarn-8212
