import { useEffect, useState } from "react";
import DoctorCardComponent from "./DoctorCardComponent";

const DoctorListComponent = ({ isHeaderShow = true, dataToFilter = {} }) => {
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
  ];

  const [filteredData, setFilteredData] = useState(doctorListData);

  useEffect(() => {
    if (Object.values(dataToFilter)?.length > 0) {
      const filterData = doctorListData.filter((doctor) => {
        return doctor.speciality === dataToFilter.speciality;
      });
      setFilteredData(filterData);
    }
  }, []);

  return (
    <div>
      <div className="text-center">
        {isHeaderShow && (
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
        <div className="flex gap-5 justify-center align-middle flex-wrap">
          {filteredData?.map((doctor) => {
            return <DoctorCardComponent key={doctor.id} data={doctor} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DoctorListComponent;
