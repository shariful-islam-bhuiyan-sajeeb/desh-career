import React from "react";
import { BiEnvelope } from "react-icons/bi";

const InputEmail = () => {
  return (
    <div className=" xl:py-36 lg:py-32 md:py-28 sm:py-20 py-16 text-center">
      <div className="flex flex-col items-start   lg:px-4 px-2 lg:space-y-6 md:space-y-4 space-y-2 text-black">
        <h2 className=" font-semibold font-serif xl:w-10/12 w-full text-left  2xl:text-5xl lg:text-3xl sm:text-2xl   text-lg text-[#192733]">
          Get Smarter about your career
        </h2>
        <div className=" flex flex-col items-start md:space-y-2 space-y-1  lg:py-4 py-2 lg:px-4 px-2 w-full shadow-lg border">
          <p className="lg:text-lg md:text-md  text-sm   ">
            Get the{" "}
            <span className="font-bold text-black "> 5-minute newsletter</span>{" "}
            keeping about smart career
          </p>
          <div className="flex sm:flex-row flex-col items-center py-2 lg:gap-x-4 gap-x-2 sm:space-y-0 space-y-2   w-full">
            <div className="flex items-center lg:gap-x-4 gap-x-2 w-full">
              <BiEnvelope className="text-2xl" />
              <input
                type="text"
                placeholder="Your Email address"
                className=" py-2 w-full max-w-lg font-serif bg-transparent"
              />
            </div>
            <button className="lg:px-8 md:px-6 sm:px-4 px-2 sm:py-2 py-3 md:w-1/2 sm:w-72 w-full lg:text-lg md:text-md sm:text-sm text-md  font-serif font-medium text-white rounded-lg  bg-red-600 ">
              Join Free
            </button>
          </div>
        </div>
        <p className="text-justify lg:text-lg md:text-md sm:text-sm text-xs lg:pr-6  md:pr-4 pr-2 ">
          We're committed to your privacy. DashCareer uses the information you
          provide to contact you about our relevant content and services. You
          may unsubscribe from these communications at any time. For more
          information, check out our Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default InputEmail;
