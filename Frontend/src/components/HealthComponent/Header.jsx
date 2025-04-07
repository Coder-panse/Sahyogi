import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row flex-wrap bg-blue-500 rounded-lg px-6 md:px-10 lg:px-20">
        {/* left side */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto  md:py-[10vw] md:mb-[-30px]">
          <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
            Book Appointment <br />
            With Trusted Doctors
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 text-sm text-white font-light">
            <img src="header-2.png" alt="" className="w-28" />
            <p>
              Simply browse through our extensive list of trusted doctors,{" "}
              <br className="hidden sm:block" />
              schedule your appointment hassle-free.
            </p>
          </div>
          <div>
            <button className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300">
              Book Appointment{" "}
              <img className="w-3" src="arrow-left.svg" alt="" />
            </button>
          </div>
        </div>

        {/* rightside */}

        <div className="md:w-1/2 relative">
          <img
            src="header.png"
            alt=""
            className="w-full md:absolute bottom-0 h-auto rounded-lg"
          />
        </div>
      </div>

    </div>
  );
};

export default Header;
