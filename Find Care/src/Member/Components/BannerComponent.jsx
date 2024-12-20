import { Avatar, AvatarGroup } from "@mui/material";

const BannerComponent = () => {
  return (
    <section className="bg-[#5c74fc] text-white rounded-lg relative overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 px-6 lg:pl-24 py-8 lg:py-32 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Book Appointment <br />
            With Trusted Doctors
          </h1>

          <div className="flex justify-center lg:justify-start items-center mt-8">
            <AvatarGroup max={3}>
              <Avatar
                alt="Remy Sharp"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="z-10"
              />
              <Avatar
                alt="Travis Howard"
                src="https://randomuser.me/api/portraits/men/33.jpg"
                className="z-20"
              />
              <Avatar
                alt="Cindy Baker"
                src="https://randomuser.me/api/portraits/women/34.jpg"
                className="z-30"
              />
            </AvatarGroup>
          </div>

          <p className="mt-4 text-sm md:text-base">
            Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.
          </p>

          <div className="mt-10">
            <a
              href="#doctor-list-home"
              className="mt-3 bg-white text-blue-500 font-medium px-6 py-3 rounded-full shadow-lg hover:bg-gray-100"
            >
              Book appointment →
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center pt-4 lg:pt-16">
          <img
            src="https://prescripto.vercel.app/assets/header_img-DhAi3lLA.png"
            alt="Header Illustration"
            className="w-full max-w-md lg:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
