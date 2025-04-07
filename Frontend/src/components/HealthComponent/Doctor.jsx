import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const Doctors = () => {
  const navigate = useNavigate();
  const {value}=useContext(AppContext)

  return (
    <div>
      <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
        <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
        <p className="sm:w-1/3 text-center text-sm">
          Simply browse through our extensive list of trusted doctors.
        </p>

        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 flex-wrap justify-center mt-16 pt-5 gap-y-6 px-3 sm:px-0">
          {value.map((item, index) => (
            <div
              onClick={() => {
                {navigate(`/appointment/${item._id}`);scrollTo(0,0)}
              }}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              {/* FIX: Wrap the image in a div with a fixed height */}
              <div className="w-full h-40 bg-blue-50 flex items-center justify-center">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 rounded-full bg-green-500"></p>
                  <p>{item.available}</p>
                </div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm font-light">{item.spec}</p>
              </div>
            </div>
          ))}
        </div>

        <Link to={'/doctor'} onClick={() => window.scrollTo(0, 0)} className="bg-blue-200 px-8 py-3 rounded-full mt-8 text-gray-800">
          More
        </Link>
      </div>
    </div>
  );
};

export default Doctors;