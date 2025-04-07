import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const About = () => {
  return (
    <div className="my-28">
      <h1 className="text-3xl font-semibold text-center md:text-4xl lg:text-5xl">
        About Sahyogi
      </h1>
      <div className=" px-10 py-7 rounded-md flex flex-col items-center mt-16 gap-16 lg:flex-row">
        {/* left side */}
        <div className="md:w-1/2 lg:w-1/2 xl:w-1/3">
          <img
            src="about.jpg"
            alt=""
            className="w-full object-cover rounded-md"
          />
        </div>
        {/* right side */}
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-medium flex gap-1">
            <RiDoubleQuotesL />
            Transforming Rural Lives with Healthcare & Logistics
            <RiDoubleQuotesR />
          </h1>
          <div>
            <li>Making healthcare accessible to every village.</li>
            <li>
              Enabling farmers and small businesses with reliable logistics
              solutions.
            </li>
            <li>
              Bridging the urban-rural divide with smart, tech-driven solutions.
            </li>
            <li>Easy-to-use platform tailored for rural needs.</li>
            <li>Committed to empowering villages with innovation.</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
