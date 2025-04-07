import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { FaTruckPickup } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState();
  const navigate = useNavigate();
  const [token, setToken] = useState(true);

  const {link,setLink}=useContext(AppContext);
 

  const location=useLocation();
  setLink(location.pathname)

  return (
    <div className="flex item-center justify-between text-sm pt-6 pb-4 mb-5 border-b border-b-gray-400">
      <h1 className="text-2xl font-medium">Sahyogi</h1>
      <ul className="hidden md:flex items-start gap-10 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 w-3/5 bg-gray-400 m-auto hidden" />
        </NavLink>

        
            <NavLink to="/healthcare">
              <li className="py-1 flex gap-1 items-center">
                <CiCirclePlus className="text-xl font-semibold" />
                HEALTH
              </li>
              <hr className="border-none outline-none h-0.5 w-3/5 bg-gray-400 m-auto hidden" />
            </NavLink>
         

          <NavLink to="/logistic">
            <li className="py-1 flex gap-1.5 items-center">
              <FaTruckPickup className="text-xl font-semibold" />
              LOGISTIC
            </li>
            <hr className="border-none outline-none h-0.5 w-3/5 bg-gray-400 m-auto hidden" />
          </NavLink>
        

        {
          link ==="/healthcare"?(<NavLink to="/patientform">
            <li className="py-1 text-md flex gap-1.5 items-center">
              ADD PATIENT
            </li>
            <hr className="border-none outline-none h-0.5 w-3/5 bg-gray-400 m-auto hidden" />
          </NavLink>):""
        }

        {
          link ==="/healthcare"?(<NavLink to="/doctor">
            <li className="py-1 text-md flex gap-1.5 items-center">
             BOOK APPOINTMENT
            </li>
            <hr className="border-none outline-none h-0.5 w-3/5 bg-gray-400 m-auto hidden" />
          </NavLink>):""
        }

        {
          link ==="/logistic"?(<NavLink to="/rentalservice">
            <li className="py-1 text-md flex gap-1.5 items-center">
             RENTAL SERVICE
            </li>
            <hr className="border-none outline-none h-0.5 w-3/5 bg-gray-400 m-auto hidden" />
          </NavLink>):""
        }

      </ul>
      <div className="flex item-center gap-4">

      <div className="mt-2">
      <Link to={"https://elevenlabs.io/app/talk-to?agent_id=KH4TLf066PF9GmWlXNMA"}><MdKeyboardVoice className="text-2xl" /></Link>
      </div>

        <button
          onClick={() => navigate("/signup")}
          className="bg-blue-500 rounded-full px-8 py-3 text-white font-medium cursor-pointer hidden md:block"
        >
          Create account
        </button>

        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src="menu.svg"
        />

        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex justify-end px-8 py-6">
            <img
              onClick={() => setShowMenu(false)}
              className="w-8"
              src="cross.png"
              alt=""
            />
          </div>
          <div>
            <ul className="flex flex-col items-center gap-2 mt-5 text-lg font-medium">
              <NavLink
                className="px-4 py-2 rounded inline-block"
                onClick={() => setShowMenu(false)}
                to={"/"}
              >
                HOME
              </NavLink>
              <NavLink
                className="px-4 py-2 rounded inline-block"
                onClick={() => setShowMenu(false)}
                to={"/doctor"}
              >
                HEALTH
              </NavLink>
              <NavLink
                className="px-4 py-2 rounded inline-block"
                onClick={() => setShowMenu(false)}
                to={"/profile"}
              >
                LOGISTIC
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
