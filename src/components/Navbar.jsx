import React, { useState } from "react";
import { navLinks } from "../constants/index";
import closeIcon from "../assets/close_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import menuIcon from "../assets/menu_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header>
      <div className="bg-white flex flex-row fixed justify-between items-center text-black p-5 pt-7  w-full  z-[999]">
        <div className="flex gap-x-24 justify-between items-center h-full w-full px-4 pr-20">
          <h1 className="text-2xl font-bold font-serif ml-5">Repurpose.ai</h1>
          <ul className="flex gap-x-16 text-lg max-lg:hidden justify-center items-center ml-64">
            {navLinks.map((item, index) => (
              <li key={index} className="hover:text-slate-600">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden max-lg:block">
          <img
            src={menuIcon}
            className="filter grayscale brightness-0 cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className="hidden max-lg:block fixed bg-black px-14 py-10 top-0 right-0 w-100 h-full  font-serif z-[999]">
          <div className="flex justify-center items-center flex-col">
            <img
              src={closeIcon}
              className="filter grayscale brightness-full absolute right-36 top-7 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
            <ul className="flex flex-col gap-y-6 text-xl text-white mt-24 mb-5 justify-center items-start">
              {navLinks.map((item, index) => (
                <li key={index} className="hover:text-slate-200">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
