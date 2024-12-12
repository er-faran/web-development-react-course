import { useState } from "react";
import DoctorListComponent from "./DoctorListComponent";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const AllDoctorComponent = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  return (
    <div className="px-4 lg:px-36 mb-32">
      <h4 className="text-gray-600">Browse through the doctors specialist.</h4>
      <div className="mt-7 flex flex-wrap gap-3 text-sm text-gray-600">
        <div className="hidden lg:flex w-64 flex-col gap-4">
          <div
            className={`all-doctor-left-button ${
              selectedSpeciality === "General physician" ? "active-button" : ""
            }`}
            onClick={() =>
              selectedSpeciality === "General physician"
                ? setSelectedSpeciality("")
                : setSelectedSpeciality("General physician")
            }
          >
            General physician
          </div>
          <div
            className={`all-doctor-left-button ${
              selectedSpeciality === "Gynecologist" ? "active-button" : ""
            }`}
            onClick={() => selectedSpeciality === "Gynecologist"
              ? setSelectedSpeciality("")
              :setSelectedSpeciality("Gynecologist")}
          >
            Gynecologist
          </div>
          <div
            className={`all-doctor-left-button ${
              selectedSpeciality === "Dermatologist" ? "active-button" : ""
            }`}
            onClick={() => selectedSpeciality === "Dermatologist"
              ? setSelectedSpeciality("")
              :setSelectedSpeciality("Dermatologist")}
          >
            Dermatologist
          </div>
          <div
            className={`all-doctor-left-button ${
              selectedSpeciality === "Pediatricians" ? "active-button" : ""
            }`}
            onClick={() => selectedSpeciality === "Pediatricians"
              ? setSelectedSpeciality("")
              :setSelectedSpeciality("Pediatricians")}
          >
            Pediatricians
          </div>
          <div
            className={`all-doctor-left-button ${
              selectedSpeciality === "Neurologist" ? "active-button" : ""
            }`}
            onClick={() => selectedSpeciality === "Neurologist"
              ? setSelectedSpeciality("")
              :setSelectedSpeciality("Neurologist")}
          >
            Neurologist
          </div>
          <div
            className={`all-doctor-left-button ${
              selectedSpeciality === "Gastroenterologist" ? "active-button" : ""
            }`}
            onClick={() => selectedSpeciality === "Gastroenterologist"
              ? setSelectedSpeciality("")
              :setSelectedSpeciality("Gastroenterologist")}
          >
            Gastroenterologist
          </div>
        </div>
        <div className="flex lg:hidden w-full flex-col gap-4">
          <FormControl className="w-[70%]">
            <InputLabel id="doctor-experience">
              Filter With Speciality
            </InputLabel>
            <Select
              size="small"
              labelId="doctor-experience"
              id="demo-simple-select"
              //   value={age}
              label="Filter With Speciality"
              //   onChange={handleChange}
            >
              <MenuItem onClick={() => setSelectedSpeciality("")} value="">
                Select
              </MenuItem>
              {[
                "General Physician",
                "Gynecologist",
                "Dermatologist",
                "Pediatricians",
                "Neurologist",
                "Gastroenterologist",
              ].map((item) => {
                return (
                  <MenuItem
                    key={item}
                    onClick={(e) =>
                      setSelectedSpeciality(e?.target?.textContent)
                    }
                    value={item}
                  >
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className="flex-1 mb-8">
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
