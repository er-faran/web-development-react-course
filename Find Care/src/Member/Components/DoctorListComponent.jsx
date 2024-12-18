/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DoctorCardComponent from "./DoctorCardComponent";
import { useLocation } from "react-router-dom";
import { database } from "../../firebaseConfig.js";
import { onValue, ref } from "firebase/database";

const DoctorListComponent = ({
  isHeaderShow = true,
  specialityFilter = "",
}) => {
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

  const [doctorListData, setDoctorListData] = useState([]);

  const getAllDoctorList = () => {
    try {
      const starCountRef = ref(database, "doctors/");
      onValue(
        starCountRef,
        (snapshot) => {
          const dbData = snapshot.val();

          const formattedData = [];

          const dbDoctorData = Object.values(dbData);

          dbDoctorData.map((item) => {
            if (
              adminRoutes.includes(location.pathname) ||
              item?.isAvailable === true
            )
              formattedData.push({
                ...item,
                status: "Available",
                doctorImg:
                  "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png",
              });
          });

          setDoctorListData(formattedData);
          setFilteredData(formattedData);
        },
        {
          onlyOnce: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const [filteredData, setFilteredData] = useState(doctorListData);

  useEffect(() => {
    getAllDoctorList();
  }, []);

  useEffect(() => {
    if (specialityFilter !== "" && specialityFilter) {
      const filterData = doctorListData?.filter((doctor) => {
        return doctor?.speciality === specialityFilter;
      });
      setFilteredData(filterData);
    } else {
      setFilteredData(doctorListData);
    }
  }, [specialityFilter]);

  return (
    <div>
      <div className="text-center">
        {isHeaderShow && (
          <div>
            {isAdminNavbar ? (
              <div className="justify-items-start">
                <h1 className="ml-6 py-4 text-lg font-medium">All Doctors</h1>
              </div>
            ) : (
              <div>
                <div>
                  <h2 className="section-heading">Top Doctors to Book</h2>
                </div>
                <div className="flex justify-center mb-5">
                  <p className="section-description">
                    Simply browse through our extensive list of trusted doctors.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
        <div
          className={
            isAdminNavbar
              ? "flex gap-5 justify-start ml-6 align-middle flex-wrap"
              : "flex gap-5 justify-center align-middle flex-wrap"
          }
        >
          {filteredData?.length === 0 ? (
            <p>No Doctor Available for the selected criteria.</p>
          ) : (
            filteredData?.map((doctor) => {
              return <DoctorCardComponent key={doctor.email} data={doctor} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorListComponent;
