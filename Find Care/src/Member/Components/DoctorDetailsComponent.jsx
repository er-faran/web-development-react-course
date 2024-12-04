import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { useState } from "react";
import DoctorListComponent from "./DoctorListComponent";
import VerifiedIcon from "@mui/icons-material/Verified";

const DoctorDetailsComponent = () => {
  const [bookingDate, setBookingDate] = useState(dayjs(Date.now()));
  const params = useParams();
  console.log(params);

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
                <span>Sam Ayyub</span>
                <VerifiedIcon color="primary" />
              </h2>
            </div>
            <div className="flex items-center gap-2 mt-1 text-gray-600">
              MBBS - General physician -{" "}
              <span className="py-0.5 px-2 border text-xs rounded-full">
                4 Years
              </span>
            </div>
            <div>
              <div className="text-sm font-medium text-[#262626] mt-3">
                About
              </div>
              <p className="text-sm text-gray-600 max-w-[700px] mt-1">
                Dr. Davis has a strong commitment to delivering comprehensive
                medical care, focusing on preventive medicine, early diagnosis,
                and effective treatment strategies. Dr. Davis has a strong
                commitment to delivering comprehensive medical care, focusing on
                preventive medicine, early diagnosis, and effective treatment
                strategies.
              </p>
            </div>
            <div className="text-gray-600 font-medium mt-4">
              <span>Appointment fee : </span>{" "}
              <span className="text-gray-800">$50</span>
            </div>
          </div>

          <div className="mt-8 font-medium text-[#565656]">
            <h4>Booking slots</h4>
            <div className="max-w-80 mt-3">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker
                    label="Book Appointment"
                    value={bookingDate}
                    onChange={(newValue) => setBookingDate(newValue)}
                    // defaultValue={dayjs(Date.now())}
                  />
                </DemoContainer>
              </LocalizationProvider>
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
            specialityFilter={"General Physician"}
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsComponent;
