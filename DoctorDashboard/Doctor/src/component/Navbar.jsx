import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between py-5 mx-10 sm:mx-[8%] items-center">
      <div className="w-[80px]">
        <img src="sahyogi.jpg" alt="" className="w-full object-cover" />
      </div>
      <div >
        <Link to={'/signup'} className="bg-blue-500 px-5 py-2 rounded-lg text-white text-lg font-medium">Create Account</Link>   
      </div>
    </div>
  );
};

export default Navbar;
