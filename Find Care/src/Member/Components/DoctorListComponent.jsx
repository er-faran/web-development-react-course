/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DoctorCardComponent from "./DoctorCardComponent";
import { useNavigate,useLocation } from "react-router-dom";


const DoctorListComponent = ({
  



  isHeaderShow = true,
  specialityFilter = "",
  
}) => {
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
  const doctorListData = [
    {
      id: "1",
      name: "Sam",
      speciality: "General Physician",
      status: "Available",
      doctorImg:
        "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png",
    },
    {
      id: "2",
      name: "Sam 2",
      speciality: "Gynecologist",
      status: "Available",
      doctorImg:
        "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png",
    },
    {
      id: "3",
      name: "Sam 3",
      speciality: "General Physician",
      status: "Available",
      doctorImg:
        "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png",
    },
    {
      id: "4",
      name: "Sam 4",
      speciality: "Gynecologist",
      status: "Available",
      doctorImg:
        "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png",
    },
    {
      id: "5",
      name: "Sam 5",
      speciality: "General Physician",
      status: "Available",
      doctorImg:
        "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png",
    },
    {
      id: "6",
      name: "Sam 6",
      speciality: "Gynecologist",
      status: "Available",
      doctorImg:
        "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png",
    },
    {
      id: "7",
      name: "Sam 7",
      speciality: "Neurologist",
      status: "Available",
      doctorImg:
        "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png",
    },
    {
      id: "8",
      name: "Sam 8",
      speciality: "Pediatricians",
      status: "Available",
      doctorImg:
        "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png",
    },
    {
      id: "9",
      name: "Sam 9",
      speciality: "Dermatologist",
      status: "Available",
      doctorImg:
        "https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png",
    },
  ];

  const [filteredData, setFilteredData] = useState(doctorListData);

  useEffect(() => {
    if (specialityFilter !== "" && specialityFilter) {
      const filterData = doctorListData.filter((doctor) => {
        return doctor.speciality === specialityFilter;
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
          <div>{isAdminNavbar
            ?<div className="justify-items-start"><h1 className="ml-6 py-4 text-lg font-medium">All Doctors</h1></div>
            :<div>
            <div>
              <h2 className="section-heading">Top Doctors to Book</h2>
            </div>
            <div className="flex justify-center mb-5">
              <p className="section-description">
                Simply browse through our extensive list of trusted doctors.
              </p>
            </div>
            </div>}
          </div>
        )}
        <div className={isAdminNavbar
        ?"flex gap-5 justify-start ml-6 align-middle flex-wrap"
        :"flex gap-5 justify-center align-middle flex-wrap"}>
          {filteredData?.length === 0 ? (
            <p>No Doctor Available for the selected criteria.</p>
          ) : (
            filteredData?.map((doctor) => {
              return <DoctorCardComponent key={doctor.id} data={doctor} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorListComponent;
