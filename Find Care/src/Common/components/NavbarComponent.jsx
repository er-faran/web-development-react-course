import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavbarComponent = () => {
  let isAdminNavbar = false;
  const adminRoutes = [
    "/admin-dashboard",
    "/all-appointments",
    "/add-doctor",
    "/doctor-list",
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  if (adminRoutes.includes(location.pathname)) {
    isAdminNavbar = true;
  }

  return (
    <nav
      className={`border-b border-gray-500 mb-4 ${
        isAdminNavbar ? "" : "mx-4 lg:mx-36"
      } bg-white flex items-center justify-between py-3 pb-2`}
    >
      {/* Logo */}
      <div className="flex items-center pl-8">
        <NavLink to={isAdminNavbar ? "/admin-dashboard" : "/"}>
          <img
            src={
              isAdminNavbar
                ? "https://prescripto-admin.vercel.app/assets/admin_logo-BYur65Lc.svg"
                : "https://prescripto.vercel.app/assets/logo-BNCDj_dh.svg"
            }
            alt="Logo"
            className="h-10 w-auto"
          />
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      {!isAdminNavbar && (
        <button
          className="block lg:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      )}

      {/* Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white lg:static lg:flex justify-end lg:space-x-6 z-40 px-5 pb-8 lg:p-0`}
      >
        {isAdminNavbar === false && (
          <ul className="flex flex-col lg:flex-row gap-5 lg:gap-0 lg:space-x-6 items-start lg:items-center px-4 lg:px-0 pt-4 lg:pt-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-black text-sm font-medium relative after:content-[''] after:block after:w-[24px] after:h-[2px] after:bg-blue-500 after:mx-auto after:mt-1"
                    : "text-black text-sm hover:text-blue-500 font-medium"
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-doctor"
                className={({ isActive }) =>
                  isActive
                    ? "text-black text-sm font-medium relative after:content-[''] after:block after:w-[48px] after:h-[2px] after:bg-blue-500 after:mx-auto after:mt-1"
                    : "text-black text-sm hover:text-blue-500 font-medium"
                }
              >
                ALL DOCTORS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-black text-sm font-medium relative after:content-[''] after:block after:w-[24px] after:h-[2px] after:bg-blue-500 after:mx-auto after:mt-1"
                    : "text-black text-sm hover:text-blue-500 font-medium"
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
                    ? "text-black text-sm font-medium relative after:content-[''] after:block after:w-[36px] after:h-[2px] after:bg-blue-500 after:mx-auto after:mt-1"
                    : "text-black text-sm hover:text-blue-500 font-medium"
                }
              >
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-black text-sm px-4 py-1 rounded-full border border-gray-300 hover:border-blue-800 hover:text-blue-800"
                to="/admin-dashboard"
              >
                Admin Panel
              </NavLink>
            </li>
            <li>
              {!isAdminNavbar && (
                <NavLink
                  to="/signup"
                  className="mt-4 lg:mt-0 bg-[#5c74fc] hover:bg-blue-800 text-white text-sm px-6 py-2 rounded-sm lg:rounded-full text-center"
                >
                  Create Account
                </NavLink>
              )}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;
