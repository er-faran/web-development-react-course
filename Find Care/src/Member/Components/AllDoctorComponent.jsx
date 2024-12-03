import { useState } from "react";
import DoctorListComponent from "./DoctorListComponent";

const AllDoctorComponent = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  return (
    <div className="px-36">
      <h4 className="text-gray-600">Browse through the doctors specialist.</h4>
      <div className="mt-7 flex gap-3 text-sm text-gray-600">
        <div className="w-64 flex flex-col gap-4">
          <div
            className={`all-doctor-left-button ${
              selectedSpeciality === "General Physician" ? "active-button" : ""
            }`}
            onClick={() =>
              selectedSpeciality === "General Physician"
                ? setSelectedSpeciality("")
                : setSelectedSpeciality("General Physician")
            }
          >
            General physician
          </div>
          <div
            className={`all-doctor-left-button ${
              selectedSpeciality === "Gynecologist" ? "active-button" : ""
            }`}
            onClick={() => setSelectedSpeciality("Gynecologist")}
          >
            Gynecologist
          </div>
          <div
            className={`all-doctor-left-button ${
              selectedSpeciality === "Dermatologist" ? "active-button" : ""
            }`}
            onClick={() => setSelectedSpeciality("Dermatologist")}
          >
            Dermatologist
          </div>
          <div
            className={`all-doctor-left-button ${
              selectedSpeciality === "Pediatricians" ? "active-button" : ""
            }`}
            onClick={() => setSelectedSpeciality("Pediatricians")}
          >
            Pediatricians
          </div>
          <div
            className={`all-doctor-left-button ${
              selectedSpeciality === "Neurologist" ? "active-button" : ""
            }`}
            onClick={() => setSelectedSpeciality("Neurologist")}
          >
            Neurologist
          </div>
          <div
            className={`all-doctor-left-button ${
              selectedSpeciality === "Gastroenterologist" ? "active-button" : ""
            }`}
            onClick={() => setSelectedSpeciality("Gastroenterologist")}
          >
            Gastroenterologist
          </div>
        </div>
        <div className="flex-1">
          <DoctorListComponent
            isHeaderShow={false}
            specialityFilter={selectedSpeciality}
          />
        </div>
      </div>
    </div>
  );
};

export default AllDoctorComponent;
