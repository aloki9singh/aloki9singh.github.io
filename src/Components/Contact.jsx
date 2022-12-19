import React from "react";
import { Footer } from "./Footer";

const Contact = () => {
  return (
    <div>
      <div className=" bg-[#0a192f] ">
        <div
          name="contact"
          className="w-full p-4 pt-20 h-screen bg-[#0a192f]  flex justify-center items-center "
        >
         
          <form
            action="https://getform.io/f/f7286ea0-c073-449b-8ec5-4c6084b1d606"
            method="POST"
            className="flex flex-col max-w-[600px] w-full"
          >
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-[#0a192f] text-gray-300">
                Contact
              </p>
              <p className="text-gray-300 py-4">
                Submit the form below or shoot me an email --
                kshatriyaalok1997@gmail.com
              </p>
            </div>
            <input
              className="my-4 p-2 bg-[#ccd6f6]"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="my-4 p-2 bg-[#ccd6f6]"
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="my-4 p-2 bg-[#ccd6f6]"
              name="message"
              placeholder="Message"
              rows="6"
            ></textarea>
            <button className="text-white border-2 hover:bg-[#56ae78]  hover:border-[#0a192f] px-4 py-3 my-8 mx-auto flex items-center">
              Let's Connect
            </button>
          </form>
          {/* Phone no email github linkdin */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
