import React from "react";

const BannerComponent = () => {
  return (
    <section
      className="bg-[#5c74fc] text-white rounded-lg mx-auto max-w-6xl relative overflow-hidden"
    >
        <div class="flex">
            <div class="w-1/2 pl-24 pt-32 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight gap-4">
            Book Appointment <br />
            With Trusted Doctors
          </h1>
          <div className="flex justify-start items-center mt-8">
      <div className="relative">
        {/* Image 1 */}
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User 1"
          className="w-16 h-16 rounded-full border-4 border-white z-30"
        />
        {/* Image 2 */}
        <img
          src="https://randomuser.me/api/portraits/men/33.jpg"
          alt="User 2"
          className="w-16 h-16 rounded-full border-4 border-white absolute top-0 left-10 z-20"
        />
        {/* Image 3 */}
        <img
          src="https://randomuser.me/api/portraits/women/34.jpg"
          alt="User 3"
          className="w-16 h-16 rounded-full border-4 border-white absolute top-0 left-20 z-10"
        />
      </div>
    </div>
          <p className="mt-4 text-lg">
            Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.
          </p>
          <button className="mt-6 bg-white text-blue-500 font-medium px-6 py-3 rounded-full shadow-lg hover:bg-gray-100">
            Book appointment →
          </button>
            </div>
            <div class="w-1/2  pt-16 "> 
                <img class="" src="https://prescripto.vercel.app/assets/header_img-DhAi3lLA.png"></img>
            </div>
        </div>
    </section>
  );
};

export default BannerComponent;