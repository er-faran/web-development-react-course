import { Avatar, AvatarGroup } from "@mui/material";

const BannerComponent = () => {
  return (
    <section className="bg-[#5c74fc] text-white rounded-lg relative overflow-hidden">
      <div className="flex">
        <div className="w-1/2 pl-24 pt-32 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight gap-4">
            Book Appointment <br />
            With Trusted Doctors
          </h1>
          <div className="flex justify-start items-center mt-8">
            {/* <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User 1"
                className="w-16 h-16 rounded-full border-4 border-white z-30"
              />
              <img
                src="https://randomuser.me/api/portraits/men/33.jpg"
                alt="User 2"
                className="w-16 h-16 rounded-full border-4 border-white absolute top-0 left-10 z-20"
              />
              <img
                src="https://randomuser.me/api/portraits/women/34.jpg"
                alt="User 3"
                className="w-16 h-16 rounded-full border-4 border-white absolute top-0 left-20 z-10"
              />
            </div> */}
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

          <p className="mt-4 text-lg">
            Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.
          </p>
          <button className="mt-6 bg-white text-blue-500 font-medium px-6 py-3 rounded-full shadow-lg hover:bg-gray-100">
            Book appointment →
          </button>
        </div>
        <div className="w-1/2  pt-16 ">
          <img src="https://prescripto.vercel.app/assets/header_img-DhAi3lLA.png"></img>
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
