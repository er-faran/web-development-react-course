import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";

import Logout from "@mui/icons-material/Logout";
import MedicationIcon from "@mui/icons-material/Medication";

import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const NavbarComponent = () => {
  let isAdminNavbar = false;
  const adminRoutes = [
    "/admin-dashboard",
    "/all-appointments",
    "/add-doctor",
    "/doctor-list",
  ];

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  if (adminRoutes.includes(location.pathname)) {
    isAdminNavbar = true;
  }

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setUser(null);
    navigate("/");
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
            {user?.email === "super.user@gmail.com" && (
              <li>
                <NavLink
                  className="text-black text-sm px-4 py-1 rounded-full border border-gray-300 hover:border-blue-800 hover:text-blue-800"
                  to="/admin-dashboard"
                >
                  Admin Panel
                </NavLink>
              </li>
            )}
            <li>
              {!isAdminNavbar &&
                (!user?.email ? (
                  <NavLink
                    to="/signup"
                    className="mt-4 lg:mt-0 bg-[#5c74fc] hover:bg-blue-800 text-white text-sm px-6 py-2 rounded-sm lg:rounded-full text-center"
                  >
                    Create Account
                  </NavLink>
                ) : (
                  <>
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Avatar sx={{ width: 32, height: 32 }}>
                        {user?.username?.[0]}
                      </Avatar>
                    </IconButton>

                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      slotProps={{
                        paper: {
                          elevation: 0,
                          sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                            "&::before": {
                              content: '""',
                              display: "block",
                              position: "absolute",
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: "background.paper",
                              transform: "translateY(-50%) rotate(45deg)",
                              zIndex: 0,
                            },
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      <MenuItem onClick={handleClose}>
                        <div className="flex-1 items-center">
                          <NavLink
                            to="/my-profile"
                            className="flex items-center"
                          >
                            <Avatar />
                            My Profile
                          </NavLink>
                        </div>
                      </MenuItem>
                      <Divider />
                      <MenuItem
                        onClick={() => {
                          navigate(`/my-appointments/${btoa(user?.email)}`);
                        }}
                      >
                        <ListItemIcon>
                          <MedicationIcon fontSize="small" />
                        </ListItemIcon>
                        My Appointments
                      </MenuItem>
                      <MenuItem onClick={logout}>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </Menu>
                  </>
                ))}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;
