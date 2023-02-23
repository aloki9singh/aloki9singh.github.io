import React, { useState } from "react";
import Logo from "../Pngs/AS text logo.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaVoicemail,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Resume from "../Download/Alok-Singh-Resume.pdf";
export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <Link to="home" smooth={true} duration={500}>
        <img src={Logo} alt="Alok Singh" style={{ width: "50px" }} />
      </Link>

      {/* menu */}

      <ul className="hidden md:flex ">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="project" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <a
            className="flex justify-between items-center w-full text-gray-300  "
            href={Resume}
            download="Alok-Singh-Resume"
            onClick={() => window.open(Resume)}
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* 
       Mobile menu  */}
      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About Me
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="project" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
            <a
              className="flex justify-between items-center w-full text-gray-300  "
              onClick={() =>
                window.open(`https://www.linkedin.com/in/aloksingh9/`)
              }
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300  "
              href="https://github.com/aloki9singh"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <Link to="contact" smooth={true} duration={500}>
            <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] ">
              <a
                className="flex justify-between items-center w-full text-gray-300  "
                href="/"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
          </Link>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600 ">
            <a
              className="flex justify-between items-center w-full text-gray-300  "
              href={Resume}
              download="Alok-Singh-Resume"
              onClick={() => window.open(Resume)}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
