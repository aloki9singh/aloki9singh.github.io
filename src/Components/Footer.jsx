import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="bg-[#0a192f] w-full pt-8 h-auto flex justify-center">
      <div>
        <div className="grid gap-4 justify-around md:grid-cols-2">
          <div className=" shadow-md shadow-[#040c16]  hover:scale-110 duration-500 ">
            <div>
              <div className="flex justify-center">
                <FaPhone color="white" size={20} />
              </div>
              <div className="flex justify-center">
                <p id="contact-phone" className="my-4 text-white"> +918318739431</p>
              </div>
            </div>
          </div>
          <div id="contact-linkedin"className=" shadow-md shadow-[#040c16]  hover:scale-110 duration-500 ">
            <a
              className="no-underline"
              href="https://www.linkedin.com/in/aloksingh9/"
            >
              <div className="flex justify-center">
                <FaLinkedin color="white" size={20} />
              </div>
              <div className="flex justify-center">
                <p className="my-4 text-white ">Linkedin</p>
              </div>
            </a>
          </div>

          <div id="contact-github" className=" shadow-md shadow-[#040c16]  hover:scale-110 duration-500 ">
            <a className="no-underline" href="https://github.com/aloki9singh">
              <div className="flex justify-center">
                <FaGithub color="white" size={20} />
              </div>
              <div className="flex justify-center">
                <p className="my-4  text-white">Github</p>
              </div>
            </a>
          </div>

          <div className=" shadow-md shadow-[#040c16]  hover:scale-110 duration-500 ">
            <div>
              <div>
                {" "}
                <div className="flex justify-center">
                  <HiOutlineMail color="white" size={20} />
                </div>
                <div className="flex justify-center">
                  <p  id="contact-email" className="my-4  text-white">
                    kshatriyaalok1997@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
