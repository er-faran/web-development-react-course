import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { onValue, ref, set } from "firebase/database";
import { database } from "../../firebaseConfig.js";

const AddDoctorComponent = () => {
  const [doctorData, setDoctorData] = useState({});

  const validateInputs = () => {
    let isValid = true;

    if (
      !doctorData.name ||
      !doctorData.speciality ||
      !doctorData.email ||
      !doctorData.degree ||
      !doctorData.password ||
      !doctorData.address1 ||
      !doctorData.experience ||
      !doctorData.fees ||
      !doctorData.aboutDoctor
    ) {
      isValid = false;
    }

    return isValid;
  };

  const writeDataToDB = async (data) => {
    // setDoctorData(null);

    try {
      const starCountRef = ref(database, "doctors/" + btoa(data?.email));
      onValue(
        starCountRef,
        (snapshot) => {
          const dbData = snapshot.val();
          console.log("dbData", dbData);

          if (dbData?.email === data?.email) {
            alert("Doctor already exists with this email id!");
          } else {
            // Email doesn't exist, adding new doctor data
            set(ref(database, "doctors/" + btoa(data?.email)), data)
              .then((res) => {
                console.log(res);
                // setDoctorData(null);
                alert("Doctor Added Successfully");
              })
              .catch((err) => {
                alert("Something went wrong please try again later");
                console.log(err);
              });
          }
        },
        {
          onlyOnce: true,
        }
      );
    } catch (error) {
      alert("Something went wrong please try again later");
      console.log(error);
    }
  };

  return (
    <div className="flex gap-5 bg-[#F8F9FD]">
      <Sidebar />
      <div className="flex-1 mt-5">
        <h3 className="mb-3 text-lg font-medium">Add Doctor</h3>

        <div className="bg-white mt-5 w-[80%] p-5 max-h-[500px] overflow-y-auto no-scrollbar">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const isValid = validateInputs();
              if (!isValid) {
                alert("Please enter all the required data to proceed");
                return;
              }

              writeDataToDB({ ...doctorData, isAvailable: true });
            }}
            className="flex gap-5 flex-wrap justify-around"
          >
            <div className="w-[48%] flex flex-col gap-2">
              <label htmlFor="name">Your name</label>
              <TextField
                size="small"
                id="name"
                name="name"
                label="Your name"
                variant="outlined"
                value={doctorData?.name}
                onChange={(e) =>
                  setDoctorData({ ...doctorData, name: e.target.value })
                }
              />
            </div>

            <div className="w-[48%] flex flex-col gap-2">
              <label htmlFor="age">Speciality</label>

              <FormControl fullWidth>
                <InputLabel id="doctor-speciality">Speciality</InputLabel>
                <Select
                  size="small"
                  labelId="doctor-speciality"
                  id="demo-simple-select"
                  //   value={age}
                  label="Speciality"
                  value={doctorData?.speciality}
                  onChange={(e) =>
                    setDoctorData({ ...doctorData, speciality: e.target.value })
                  }
                >
                  <MenuItem value={"General physician"}>
                    General physician
                  </MenuItem>
                  <MenuItem value={"Gynecologist"}>Gynecologist</MenuItem>
                  <MenuItem value={"Dermatologist"}>Dermatologist</MenuItem>
                  <MenuItem value={"Pediatricians"}>Pediatricians</MenuItem>
                  <MenuItem value={"Neurologist"}>Neurologist</MenuItem>
                  <MenuItem value={"Gastroenterologist"}>
                    Gastroenterologist
                  </MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="w-[48%] flex flex-col gap-2">
              <label htmlFor="email">Doctor Email</label>
              <TextField
                size="small"
                id="email"
                label="Doctor Email"
                variant="outlined"
                type="email"
                value={doctorData?.email}
                onChange={(e) =>
                  setDoctorData({ ...doctorData, email: e.target.value })
                }
              />
            </div>

            <div className="w-[48%] flex flex-col gap-2">
              <label htmlFor="degree">Degree</label>
              <TextField
                size="small"
                id="degree"
                label="Degree"
                variant="outlined"
                value={doctorData?.degree}
                onChange={(e) =>
                  setDoctorData({ ...doctorData, degree: e.target.value })
                }
              />
            </div>

            <div className="w-[48%] flex flex-col gap-2">
              <label htmlFor="password">Set Password</label>
              <TextField
                size="small"
                id="password"
                label="Set Password"
                variant="outlined"
                type="password"
                value={doctorData?.password}
                onChange={(e) =>
                  setDoctorData({ ...doctorData, password: e.target.value })
                }
              />
            </div>

            <div className="w-[48%] flex flex-col gap-2">
              <label htmlFor="address">Address</label>
              <TextField
                size="small"
                id="address-1"
                label="Address 1"
                variant="outlined"
                value={doctorData?.address1}
                onChange={(e) =>
                  setDoctorData({ ...doctorData, address1: e.target.value })
                }
              />
              <TextField
                size="small"
                id="address-2"
                label="Address 2"
                variant="outlined"
                value={doctorData?.address2}
                onChange={(e) =>
                  setDoctorData({ ...doctorData, address2: e.target.value })
                }
              />
            </div>

            <div className="w-[100%] flex flex-col gap-2">
              <label htmlFor="age">Experience</label>

              <FormControl className="w-[48%]">
                <InputLabel id="doctor-experience">Experience</InputLabel>
                <Select
                  size="small"
                  labelId="doctor-experience"
                  id="demo-simple-select"
                  //   value={age}
                  label="Experience"
                  value={doctorData?.experience}
                  onChange={(e) =>
                    setDoctorData({ ...doctorData, experience: e.target.value })
                  }
                >
                  <MenuItem value={1}>1 Year</MenuItem>
                  <MenuItem value={2}>2 Year</MenuItem>
                  <MenuItem value={3}>3 Year</MenuItem>
                  <MenuItem value={4}>4 Year</MenuItem>
                  <MenuItem value={5}>5 Year</MenuItem>
                  <MenuItem value={"5+"}>5+ Years</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="w-[100%] flex flex-col gap-2">
              <label htmlFor="fees">Fees</label>
              <TextField
                size="small"
                className="w-[48%]"
                id="fees"
                label="Fees"
                variant="outlined"
                type="number"
                value={doctorData?.fees}
                onChange={(e) =>
                  setDoctorData({ ...doctorData, fees: e.target.value })
                }
              />
            </div>

            <div className="w-[100%] flex flex-col gap-2">
              <label htmlFor="about-doctor">About Doctor</label>
              <textarea
                id="about-doctor"
                rows={7}
                className="border"
                value={doctorData?.aboutDoctor}
                onChange={(e) =>
                  setDoctorData({ ...doctorData, aboutDoctor: e.target.value })
                }
              />
            </div>

            <div className="w-full">
              <button
                className="bg-[#5c74fc] hover:bg-blue-800 text-white text-sm px-6 py-2 rounded-full"
                type="submit"
                id="add-doctor-submit-button"
              >
                Add Doctor
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctorComponent;
