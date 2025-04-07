import React from "react";

const Footer = () => {
  return (
    <div className="px-16 pt-0.5 bg-black text-white rounded-tl-xl rounded-tr-xl">
      <div className="flex flex-col md:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  text-sm">
        <div>
          <h1 className="mb-5 text-3xl">Sahyogi</h1>
          <p className="w-full md:w-2/3 text-gray-400 leading-6">
            Sahyogi is dedicated to empowering rural communities by providing
            accessible healthcare services and reliable logistics rentals.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Links</p>
          <ul className="flex flex-col text-gray-400 gap-2">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Health</li>
            <li className="cursor-pointer">Logistics</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col text-gray-400 gap-2">
            <li>+91 123 456 789</li>
            <li>example@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="text-gray-600" />
        <p className="py-5 text-center text-sm">
          Copyright © 2025 Sahyogi - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
