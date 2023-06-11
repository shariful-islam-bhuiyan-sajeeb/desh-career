import React from "react";
import InputEmail from "../Contact Home page/InputEmail";
import useTitle from "../../Hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <div className="2xl:w-1/2 lg:w-2/3 md:w-10/12 w-full mx-auto lg:px-0 px-4">
        <InputEmail />
      </div>
    </div>
  );
};

export default Home;
