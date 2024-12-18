/* eslint-disable react/prop-types */
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useNavigate, useLocation } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { database } from "../../firebaseConfig";
import { onValue, ref, set } from "firebase/database";
import { useState } from "react";

const DoctorCardComponent = ({ data }) => {
  const navigate = useNavigate();
  let isAdminNavbar = false;
  const adminRoutes = [
    "/admin-dashboard",
    "/all-appointments",
    "/add-doctor",
    "/doctor-list",
  ];

  const [isDoctorAvailable, setIsDoctorAvailable] = useState(
    data?.isAvailable === true
  );

  const location = useLocation();
  if (adminRoutes.includes(location.pathname)) {
    isAdminNavbar = true;
  }

  const updateDoctorAvailibility = (email = "", isAvailable = false) => {
    try {
      if (email) {
        const doctorRef = ref(database, "doctors/" + btoa(email));
        onValue(
          doctorRef,
          (snapshot) => {
            const dbData = snapshot.val();
            console.log("dbData", dbData);

            if (dbData?.email === email) {
              // Doctor Found with this email and now we need to update flag
              set(ref(database, "doctors/" + btoa(email)), {
                ...data,
                isAvailable: isAvailable,
              })
                .then((res) => {
                  console.log(res);
                  // setDoctorData(null);
                  setIsDoctorAvailable(isAvailable);
                  alert("Doctor Availibility Updated Successfully");
                })
                .catch((err) => {
                  alert("Something went wrong please try again later");
                  console.log(err);
                });
            } else {
              alert("Could not found the Doctor, Please try again!");
            }
          },
          {
            onlyOnce: true,
          }
        );
      }
    } catch (error) {
      alert("Something went wrong please try again later");
      console.log(error);
    }
  };

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
            <Checkbox
              checked={isDoctorAvailable}
              onChange={(e) =>
                updateDoctorAvailibility(data?.email, e.target.checked)
              }
            />
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
