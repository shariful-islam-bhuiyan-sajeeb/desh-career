import React from "react";
import { BsFacebook } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { ImLinkedin2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full h-full  2xl:py-28 xl:py-20 py-10   text-white">
      <div className="flex items-center justify-center lg:py-6 py-4 lg:gap-x-4 gap-x-3 ">
        <BsFacebook className=" md:text-3xl text-2xl px-1  border border-white " />
        <IoLogoYoutube className=" md:text-3xl text-2xl px-1  border border-white" />
        <ImLinkedin2 className=" md:text-3xl text-2xl px-1  border border-white" />
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-around text-center  h-full xl:w-7/12 lg:w-10/12 md:w-11/12 w-full md:px-0 px-4 mx-auto ">
        <div className="flex flex-col sm:items-start items-center md:w-2/6 w-full">
          <Link>
            <img
              className="lg:w-48 sm:w-36 w-28 "
              src="https://deshcareer.com/logo/short-logo.png"
              alt=""
            />
          </Link>
          <p className=" sm:px-0 px-2 lg:mt-4 mt-2 text-justify text-[#8c94b8]">
            Desh Career is Career based newsletter in Bengali language. This
            newsletter has published weekly. This is published in every Saturday
            at 12.00 PM.{" "}
          </p>
        </div>
        <div className="flex flex-col items-center sm:mt-0 mt-6 md:w-2/6 w-full">
          <p className="md:text-2xl text-xl  font-serif font-medium">
            Privacy And Terms
          </p>
          <div className="flex flex-col items-center sm:mt-6 mt-3  lg:space-y-2 space-y-1 md:text-md text-sm text-[#8c94b8]">
            <p className="hover:text-white">Privacy Policy</p>
            <p className="hover:text-white">Terms Condition</p>
            <p className="hover:text-white">FAQ</p>
          </div>
        </div>
        <div className="flex flex-col items-center sm:mt-0 mt-6 md:w-2/6 w-full">
          <p className="lg:text-3xl md:text-2xl text-xl font-serif font-medium">
            support
          </p>
          <div className="flex flex-col items-center sm:mt-6 mt-3  lg:space-y-2 space-y-1 md:text-md text-sm text-[#8c94b8] ">
            <p className="hover:text-white">Affiliate Link</p>
            <p className="hover:text-white">Contact us</p>
            <p className="hover:text-white">Advertise with us</p>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full sm:mt-4 mt-2 bg-slate-300"></div>
      <div className="flex md:flex-row flex-col items-center md:justify-between justify-center sm:mt-2 mt-1 xl:w-7/12 lg:w-10/12 md:w-11/12 w-full md:px-0 sm:px-4 px-2 mx-auto ">
        <p>© 2023 Newsletter E-mail Service: All Copy right reserved</p>
        <div className="flex items-center gap-x-2 ">
          <p>Terms</p>
          <p>Cookie Policy</p>
          <p>Privacy</p>
          <p>Privacy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
