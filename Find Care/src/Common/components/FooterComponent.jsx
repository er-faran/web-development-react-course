import { useLocation } from "react-router-dom";

const FooterComponent = () => {
  let isAdminNavbar = false;

  const adminRoutes = [
    "/admin-dashboard",
    "/all-appointments",
    "/add-doctor",
    "/doctor-list",
  ];

  const location = useLocation();
  if (adminRoutes.includes(location.pathname)) {
    isAdminNavbar = true;
  }

  if (isAdminNavbar) {
    return null;
  }
  return (
    <div className="mb-5 px-4 lg:px-36">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm ">
        <div>
          <img
            className="mb-5 w-40"
            src="https://prescripto.vercel.app/assets/logo-BNCDj_dh.svg"
            alt="Greatstack.dev Logo"
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-4 text-gray-600">
            <li className="hover:text-gray-800 cursor-pointer">Home</li>
            <li className="hover:text-gray-800 cursor-pointer">About us</li>
            <li className="hover:text-gray-800 cursor-pointer">Delivery</li>
            <li className="hover:text-gray-800 cursor-pointer">
              Privacy policy
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+240-308-9505</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <hr />
        <p className="text-center text-gray-600 text-sm mt-5">
          Copyright © 2024 Greatstack.dev - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
