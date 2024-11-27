import React from "react";
import { NavLink } from "react-router-dom";

const NavbarComponent = ({ isAdminNavbar = false }) => {
  return (
    <div>
      <nav className="bg-white flex justify-between items-center px-36 pt-3 pb-2">
        {/* Logo and Name */}
        <div className="flex items-center">
          <NavLink to="/">
            {" "}
            <img
              src={
                isAdminNavbar
                  ? "https://prescripto-admin.vercel.app/assets/admin_logo-BYur65Lc.svg"
                  : "https://prescripto.vercel.app/assets/logo-BNCDj_dh.svg"
              }
              alt="Logo"
              className="h-10 w-13 mr-1"
            />
          </NavLink>
        </div>

        {isAdminNavbar === false && (
          <ul className="flex space-x-6 pt-4 pb-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-black text-sm font-medium relative after:content-[''] after:block after:w-[6px] after:h-[2px] after:bg-blue-500 after:mx-auto after:mt-1"
                    : "text-black text-sm hover:text-blue-500 font-medium"
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/All doctor"
                className={({ isActive }) =>
                  isActive
                    ? "text-black text-sm border-b-2 border-blue-500 font-medium"
                    : "text-black  text-sm font-medium"
                }
              >
                ALL DOCTORS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive
                    ? "text-black text-sm border-b-2 border-blue-500 font-medium"
                    : "text-black text-sm font-medium"
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-black text-sm border-b-2 border-blue-500 font-medium"
                    : "text-black text-sm font-medium"
                }
              >
                CONTACT
              </NavLink>
            </li>
            <li>
              <button className="text-black text-sm px-4 py-1 rounded-full border border-gray-300">
                Admin Panel
              </button>
            </li>
          </ul>
        )}

        {isAdminNavbar === false && (
          <button className="bg-[#5c74fc] text-white text-sm px-6 py-2 rounded-full">
            Create Account
          </button>
        )}
      </nav>

      <div
        style={{
          backgroundColor: "black",
          height: "0.5px",
          margin: "8px 144px",
        }}
      ></div>
    </div>
  );
};

export default NavbarComponent;
