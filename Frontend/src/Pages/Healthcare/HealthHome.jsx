import React from "react";
import Header from "../../components/HealthComponent/Header";
import Speciality from "../../components/HealthComponent/Speciality";
import Doctor from "../../components/HealthComponent/Doctor";
import Banner from "../../components/HealthComponent/Banner";

import { Link, useLocation } from "react-router-dom";

const HealthHome = () => {
  return (
    <div>
      <div className="w-[70px] fixed right-[80px] rounded-full shadow-xl bottom-[50px]">
        <Link>
          {" "}
          <img
            src="chat-bot.png"
            alt=""
            className="w-full object-cover relative p-2"
          />
        </Link>
      </div>
      <Header />
      <Speciality />
      {/* <Doctor/> */}
      <Banner />
    </div>
  );
};

export default HealthHome;
