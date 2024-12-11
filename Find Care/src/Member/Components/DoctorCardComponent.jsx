/* eslint-disable react/prop-types */
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useNavigate, useLocation } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";

const DoctorCardComponent = ({ data }) => {
  const navigate = useNavigate();
  let isAdminNavbar = false;
  const adminRoutes = [
    "/admin-dashboard",
    "/all-appointments",
    "/add-doctor",
    "/doctor-list",
  ];

  const location = useLocation();
  if (adminRoutes.includes(location.pathname)) {
    isAdminNavbar = true;
  }

  return (
    <div
      className="border rounded-2xl cursor-pointer"
      onClick={() => {
        isAdminNavbar
          ? null
          : navigate(`/doctor-details/${btoa(data?.email)}`, {
              state: {
                doctorData: data,
              },
            });
      }}
    >
      <div>
        <img
          className={
            isAdminNavbar
              ? "bg-[#EAEFFF] transition-all duration-500 max-w-52 aspect-square rounded-t-2xl hover:bg-[#5c74fc]"
              : "bg-[#EAEFFF] max-w-52 aspect-square rounded-t-2xl"
          }
          src={data?.doctorImg}
        />
      </div>

      <div className="text-left pl-3 pt-3 pb-5">
        <div className="text-xl">{data?.name}</div>
        <div className="text-[#5C5C5C] text-sm">{data?.speciality}</div>
        <div>
          {isAdminNavbar ? (
            <Checkbox defaultChecked />
          ) : (
            <FiberManualRecordIcon
              fontSize="xs"
              className="text-green-500 mb-1 mr-2"
            />
          )}
          {data?.status}
        </div>
      </div>
    </div>
  );
};

export default DoctorCardComponent;
