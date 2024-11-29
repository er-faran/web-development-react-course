import React from 'react';

const CreateAccountBanner = () => {
  return (
    <div class="flex bg-primary rounded-lg max-w-6xl px-12 sm:px-10 md:px-14 lg:px-12 my-20 mx-40">
        <div class="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
            <div class="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
                <p>Book Appointment</p>
                <p class="mt-4">With 100+ Trusted Doctors</p>
            </div>
        <button class="bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all ">Create account</button>
        </div>
        <div class="hidden md:block md:w-1/2 lg:w-[370px] relative">
            <img class="w-full absolute bottom-0 right-0 max-w-md" src="https://prescripto.vercel.app/assets/appointment_img-DzbZlMsi.png"></img>
        </div>
    </div>
  );
};

export default CreateAccountBanner;