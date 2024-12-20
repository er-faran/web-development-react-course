import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import DoctorListComponent from "./DoctorListComponent";
import VerifiedIcon from "@mui/icons-material/Verified";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { ref, set } from "firebase/database";
import { database } from "../../firebaseConfig";
import { UserContext } from "../../context/UserContext";

const DoctorDetailsComponent = () => {
  const [bookingDate, setBookingDate] = useState();
  const [bookingSlot, setBookingSlot] = useState(null);
  const [doctorDetails, setDoctorDetails] = useState(null);

  const { user } = useContext(UserContext);

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({});

  const params = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(params, state);

  const handleClose = () => {
    setOpen(false);
  };

  const writeDataToDB = async () => {
    console.log("data ", formData, bookingDate, bookingSlot);

    if (user?.email) {
      set(ref(database, "appointments/" + Date.now()), {
        doctorId: params?.id,
        bookingDate: bookingDate,
        bookingSlot: bookingSlot,
        userName: formData.fullname,
        email: formData.email,
        age: formData.age,
        gender: formData.gender,
        phone: formData?.phone,
        symptoms: formData?.symptoms,
        loggedInUserID: user?.email,
      })
        .then((res) => {
          console.log(res);
          alert("Appointment has registered successsfully");
          handleClose();
          setFormData({});
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      alert("Please login before taking any appointment");
    }
  };

  const appointmentHandler = () => {
    // Doctor ID - params?.id, Booking Date - bookingDate, Booking Slot - bookingSlot, LoggerIn User Name - , User Id/User Email
    // Check user loggedin or not
    const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
    if (isLoggedIn === false) {
      alert("Please Login before booking any appointment with doctor.");
      navigate("/signup");
    } else {
      // User is looged in so proceed to booking
      writeDataToDB();
    }
  };

  useEffect(() => {
    if (state?.doctorData) {
      setDoctorDetails(state?.doctorData);
    }
  }, [state]);

  useEffect(() => {
    if (dayjs) {
      setBookingSlot(dayjs().format("MM/DD/YYYY"));
    }
  }, []);

  if (!params?.id)
    return (
      <div>
        <h1>No Doctor Available</h1>
        <p>Visit Home page and try one again.</p>
      </div>
    );

  return (
    <div className="px-36 mb-8">
      <div className="flex gap-5 justify-center">
        <div className="w-[23%]">
          {/* <div className=" relative"> */}
          <img
            src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png"
            className="bg-[#5c74fc] rounded-md"
          />
          {/* </div> */}
        </div>
        <div className="flex-1">
          <div className="border p-8">
            <div>
              <h2 className="flex items-center gap-2 text-3xl font-medium text-gray-700">
                <span>{doctorDetails?.name}</span>
                <VerifiedIcon color="primary" />
              </h2>
            </div>
            <div className="flex items-center gap-2 mt-1 text-gray-600">
              {doctorDetails?.degree} - {doctorDetails?.speciality} -{" "}
              <span className="py-0.5 px-2 border text-xs rounded-full">
                {doctorDetails?.experience} Years
              </span>
            </div>
            <div>
              <div className="text-sm font-medium text-[#262626] mt-3">
                About
              </div>
              <p className="text-sm text-gray-600 max-w-[700px] mt-1">
                {doctorDetails?.aboutDoctor}
              </p>
            </div>
            <div className="text-gray-600 font-medium mt-4">
              <span>Appointment fee : </span>{" "}
              <span className="text-gray-800">${doctorDetails?.fees}</span>
            </div>
          </div>

          <div className="mt-5 font-medium text-[#565656]">
            <div className="flex gap-5 flex-wrap">
              <Button
                // disabled={!bookingDate || !bookingSlot}
                variant="outlined"
                onClick={() => {
                  if (user?.email) {
                    setOpen(true);
                  } else {
                    navigate("/signin");
                  }
                }}
              >
                Click To Book Appointment
              </Button>

              {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                  <div className="bg-white w-2/4  overflow-auto no-scrollbar rounded-lg p-8 shadow-lg relative">
                    {/* Close Button */}
                    <button
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                      onClick={handleClose}
                    >
                      ✕
                    </button>
                    {/* Modal Content */}
                    <h2 className="text-2xl font-bold mb-6 text-center text-blue-500">
                      Patient Information
                    </h2>
                    <form className="">
                      <div className="flex gap-8">
                        <div className="mb-4 flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Enter your full name"
                            value={formData.fullname}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                fullname: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className="mb-4 flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="mb-4 flex flex-col">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Gender
                        </label>
                        <div className="flex gap-5">
                          <span className="flex items-center gap-2">
                            <span className="block text-sm font-medium text-gray-700 mb-2">
                              Male :{" "}
                            </span>
                            <input
                              name="gender"
                              value="male"
                              id="male"
                              type="radio"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  gender:
                                    e.target.checked === true ? "male" : "",
                                })
                              }
                            />
                          </span>
                          <span className="flex items-center gap-2">
                            <span className="block text-sm font-medium text-gray-700 mb-2">
                              Female :{" "}
                            </span>
                            <input
                              name="gender"
                              value="female"
                              id="female"
                              type="radio"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  gender:
                                    e.target.checked === true ? "female" : "",
                                })
                              }
                            />
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-8">
                        <div className="mb-4 flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className="mb-4 flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Age
                          </label>
                          <input
                            type="number"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Enter your age"
                            value={formData.age}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                age: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-8 my-4">
                        <div className="flex-1">
                          <FormControl fullWidth>
                            <InputLabel id="appointment-slot">
                              Slots To Book
                            </InputLabel>

                            <Select
                              labelId="appointment-slot"
                              id="appointment-slot-select"
                              className="h-full"
                              label="Appointment Slots"
                              value={bookingSlot}
                              onChange={(e) => setBookingSlot(e.target.value)}
                            >
                              <MenuItem value={"09:00 AM"}>09:00 AM</MenuItem>
                              <MenuItem value={"10:00 AM"}>10:00 AM</MenuItem>
                              <MenuItem value={"11:00 AM"}>11:00 AM</MenuItem>
                              <MenuItem value={"12:00 PM"}>12:00 PM</MenuItem>
                              <MenuItem value={"01:00 PM"}>01:00 PM</MenuItem>
                              <MenuItem value={"03:00 PM"}>03:00 PM</MenuItem>
                              <MenuItem value={"04:00 PM"}>04:00 PM</MenuItem>
                              <MenuItem value={"05:00 PM"}>05:00 PM</MenuItem>
                              <MenuItem value={"06:00 PM"}>06:00 PM</MenuItem>
                              <MenuItem value={"07:00 PM"}>07:00 PM</MenuItem>
                              <MenuItem value={"08:00 PM"}>08:00 PM</MenuItem>
                              <MenuItem value={"09:00 PM"}>09:00 PM</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                        <div className="flex-1">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="Booking Date"
                              value={dayjs(bookingDate)}
                              onChange={(newValue) => {
                                setBookingDate(newValue.format("MM/DD/YYYY"));
                              }}
                              disablePast={true}
                              sx={{ width: "100%" }}
                            />
                          </LocalizationProvider>
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Symptoms
                        </label>
                        <textarea
                          rows="3"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                          placeholder="Describe your symptoms"
                          value={formData.symptoms}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              symptoms: e.target.value,
                            })
                          }
                        ></textarea>
                      </div>
                      <button
                        disabled={
                          !formData?.fullname ||
                          !formData.gender ||
                          !formData?.age ||
                          !formData?.email ||
                          !formData?.symptoms ||
                          !formData?.phone
                        }
                        type="button"
                        className="w-full bg-blue-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-500"
                        onClick={appointmentHandler}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <div>
          <h2 className="section-heading">Related Doctors</h2>
        </div>
        <div className="flex justify-center mb-5">
          <p className="section-description">
            Simply browse through our extensive list of trusted doctors.
          </p>
        </div>
        <div>
          <DoctorListComponent
            isHeaderShow={false}
            specialityFilter={state?.doctorData?.speciality}
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsComponent;
