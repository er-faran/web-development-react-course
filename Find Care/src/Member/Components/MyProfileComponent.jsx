import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const MyProfileComponent = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto my-24">
      <div className="flex flex-col items-center">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-blue-500 mb-4"
        />
        <h2 className="text-xl font-bold text-gray-800">{user?.username}</h2>
        <p className="text-gray-500">{user?.email}</p>
      </div>

      <hr className="my-6 border-gray-300" />

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Username:</span>
          <span className="font-medium text-gray-800">{user?.username}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Phone:</span>
          <span className="font-medium text-gray-800">+123-456-7890</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Address:</span>
          <span className="font-medium text-gray-800">123 Main St, City</span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfileComponent;
