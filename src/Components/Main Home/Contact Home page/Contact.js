import React from "react";
import useTitle from "../../Hooks/useTitle";

const Contact = () => {
  useTitle("About us");
  return (
    <div className="2xl:w-9/12 lg:w-2/3 md:w-10/12 w-full mx-auto lg:px-0 px-4">
      <div className="flex flex-col items-start  text-black lg:py-20 md:py-16 sm:py-12 py-10 md:space-y-2 space-y-1">
        <h1 className="lg:text-5xl md:text-3xl text-xl font-serif font-bold">
          About Us
        </h1>
        <div className="flex flex-col items-start space-y-3">
          <p className="lg:w-1/2 md:w-3/4 w-full  text-left md:text-lg sm:text-md text-sm">
            Desh Career is Career based newsletter in Bengali language. This
            newsletter has published weekly. This is published in every Saturday
            at 12.00 PM.{" "}
          </p>
          <p>We focus on Career trend, news, smart job etc. </p>
          <p>
            If you want to contact us: you can send an email to
            <span className="text-sky-600"> contact.deshcareer@gmail.com</span>
          </p>
          <p>
            If you want to meet with us, you can come to our office based on an
            appointment.{" "}
          </p>
          <p>Our Office address:</p>
          <p>House: 13/3,</p>
          <p>Road: 2,</p>
          <p>Shyamoly, Dhaka-1207</p>
          <p>+8801880811047</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
