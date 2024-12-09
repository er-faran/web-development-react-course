import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="min-h-[100%] bg-white border-r">
      <div className="flex flex-col mt-6">
        <NavLink
          to="/admin-dashboard"
          className={({ isActive }) =>
            isActive
              ? "bg-[#F2F3FF] pl-6 py-4 pr-28 border-r-4 border-blue-500"
              : "pl-6 py-4 pr-28"
          }
        >
          <HomeOutlinedIcon className="mr-2" />
          Dashboard
        </NavLink>
        <NavLink
          to="/all-appointments"
          className={({ isActive }) =>
            isActive
              ? "bg-[#F2F3FF] pl-6 py-4 pr-28 border-r-4 border-blue-500"
              : "pl-6 py-4 pr-28"
          }
        >
          <CalendarMonthOutlinedIcon className="mr-2" />
          Apointments
        </NavLink>
        <NavLink
          to="/add-doctor"
          className={({ isActive }) =>
            isActive
              ? "bg-[#F2F3FF] pl-6 py-4 pr-28 border-r-4 border-blue-500"
              : "pl-6 py-4 pr-28"
          }
        >
          <LocalHospitalOutlinedIcon className="mr-2" />
          Add Docotor
        </NavLink>
        <NavLink
          to="/doctor-list"
          className={({ isActive }) =>
            isActive
              ? "bg-[#F2F3FF] pl-6 py-4 pr-28 border-r-4 border-blue-500"
              : "pl-6 py-4 pr-28"
          }
        >
          <GroupsOutlinedIcon className="mr-2" />
          Doctors List
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
