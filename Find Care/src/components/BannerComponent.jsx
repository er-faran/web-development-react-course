import React from "react";
import AvatarComponent from "./AvatarComponent";

const BannerComponent = () => {
  return (
    <div className="relative bg-blue-500 text-white p-4 rounded-lg shadow-lg">
      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="flex-1 mb-6 md:mb-0 text-lg">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold ">
              Book Appointments
              <br />
              with Trusted Doctors
            </h1>
          </div>

          {/* Avatar Section */}
          <div className="flex items-center gap-4 mb-8">
            {/* Avatar Icons */}
            <div>
              <AvatarComponent />
            </div>

            {/* Text Next to Avatars */}
            <div>
              <p>
                Simply browse through our extensive list of trusted doctors,
                <br />
                schedule your appointment hassle-free.
              </p>
            </div>
          </div>

          {/* Button */}
          <div>
            <button className="bg-white text-blue-500 px-6 py-2 font-medium rounded-full flex items-center gap-2 hover:bg-blue-100 transition text-lg">
              Book Appointment
              <span className="text-xl">&rarr;</span>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://prescripto.vercel.app/assets/header_img-DhAi3lLA.png" // Replace with your image URL
            alt="Doctors"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
