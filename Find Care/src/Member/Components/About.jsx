const About = () => {
  return (
    <div className="px-4 lg:px-36">
      {/* Header */}
      <div className="text-center my-10">
        <h1 className="text-2xl lg:text-3xl font-bold">About Us</h1>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
        {/* Image Section */}
        <div className="w-full lg:w-[30%]">
          <img
            src="https://prescripto.vercel.app/assets/about_image-MG9zrc7b.png"
            alt="About Prescripto"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 text-gray-700 text-sm lg:text-base">
          <p className="mb-6">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p className="mb-6">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <h2 className="text-lg lg:text-xl font-semibold mb-4">Our Vision</h2>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="my-16">
        <h2 className="text-center text-xl lg:text-2xl font-bold mb-10">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0">
          {/* Efficiency */}
          <div className="border border-gray-300 p-6 lg:p-20 transition rounded-lg lg:rounded-none hover:bg-blue-500 hover:text-white">
            <h3 className="text-lg font-bold mb-2">EFFICIENCY:</h3>
            <p>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>

          {/* Convenience */}
          <div className="border border-gray-300 p-6 lg:p-20 transition rounded-lg lg:rounded-none hover:bg-blue-500 hover:text-white">
            <h3 className="text-lg font-bold mb-2">CONVENIENCE:</h3>
            <p>
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>

          {/* Personalization */}
          <div className="border border-gray-300 p-6 lg:p-20 transition rounded-lg lg:rounded-none hover:bg-blue-500 hover:text-white">
            <h3 className="text-lg font-bold mb-2">PERSONALIZATION:</h3>
            <p>
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
