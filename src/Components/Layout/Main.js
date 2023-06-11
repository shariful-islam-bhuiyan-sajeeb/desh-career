import React from "react";
import Header from "../Share/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Share/Footer";

const Main = () => {
  return (
    <div>
      <div className="bg-slate-50">
        <div className="max-w-[2400px] mx-auto">
          <Header />
        </div>
        <Outlet />
      </div>
      <div className="max-w-[2400px] mx-auto bg-[#0F0D32]  ">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
