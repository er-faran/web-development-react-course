import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { TfiDashboard } from "react-icons/tfi";
import { onValue, ref } from "firebase/database";
import { database } from "../../firebaseConfig";

const Dashboard = () => {
  // Pie chart data: Appointments by Type
  const pieData = [
    { id: 0, value: 45, label: "Consultations" },
    { id: 1, value: 35, label: "Follow-ups" },
    { id: 2, value: 20, label: "Surgeries" },
    { id: 3, value: 60, label: "New Patients" }, // Example data for new patients
    { id: 4, value: 40, label: "Follow-up Patients" },
  ];

  // Pie chart data: Appointments by Patient Type (New vs. Follow-up Patients)

  // Bar chart data: Quarterly Revenue (Appointments and Patients)
  const barData = [
    { data: [35000, 44000, 24000, 34000] }, // Revenue from Doctor consultations
    { data: [51000, 60000, 49000, 30000] }, // Revenue from surgeries
    { data: [25000, 35000, 42000, 30000] }, // Revenue from appointments
    { data: [20000, 25000, 30000, 35000] }, // Revenue from patients
  ];

  const xAxisData = ["Q1", "Q2", "Q3", "Q4"];

  const [countData, setCountData] = useState({
    appointmentsCount: 0,
    allDoctorsCount: 0,
    activeDoctorCount: 0,
    usersCount: 0,
  });

  const getCountData = () => {
    try {
      const starCountRef = ref(database, "/");
      onValue(
        starCountRef,
        (snapshot) => {
          const dbData = snapshot.val();
          const appointmentsCount = Object?.values(
            dbData?.appointments
          )?.length;
          const allDoctorsCount = Object?.values(dbData?.doctors)?.length;

          const activeDoctorCount = Object?.values(dbData?.doctors)?.filter(
            (doc) => doc?.isAvailable
          )?.length;
          const usersCount = Object?.values(dbData?.users)?.length;
          setCountData({
            appointmentsCount,
            allDoctorsCount,
            activeDoctorCount,
            usersCount,
          });
        },
        {
          onlyOnce: true,
        }
      );
    } catch (error) {
      alert("Something went wrong please try again later");
      console.log(error);
    }
  };

  useEffect(() => {
    getCountData();
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Dashboard Content */}
      <div className="flex-1 p-5">
        {/* Title Section */}
        <div className="flex items-center mb-8">
          <TfiDashboard size={48} className="text-2xl text-blue-500 mr-4" />
          <h1 className="text-2xl font-bold text-gray-700">
            Dashboard Features
          </h1>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-8 ">
          <div className="bg-gray-100 border border-black-300 rounded p-4 flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <p className="text-lg font-semibold">All Doctors</p>
            <p className="text-2xl font-bold text-yellow-500">
              {countData?.allDoctorsCount}
            </p>
          </div>
          <div className="bg-blue-100 border border-blue-300 rounded p-4 flex flex-col items-center  shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <p className="text-lg font-semibold">Active Doctors</p>
            <p className="text-2xl font-bold text-blue-500 ">
              {countData?.activeDoctorCount}
            </p>
          </div>
          <div className="bg-green-100 border border-green-300 rounded p-4 flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <p className="text-lg font-semibold">Active Patients</p>
            <p className="text-2xl font-bold text-green-500">
              {countData?.usersCount}
            </p>
          </div>
          <div className="bg-yellow-100 border border-yellow-300 rounded p-4 flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <p className="text-lg font-semibold">Active Appointments</p>
            <p className="text-2xl font-bold text-yellow-500">
              {countData?.appointmentsCount}
            </p>
          </div>

          {/* <div className="bg-orange-100 border border-purple-300 rounded p-4 flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <p className="text-lg font-semibold">Follow-ups</p>
            <p className="text-2xl font-bold text-yellow-500">45</p>
          </div>
          <div className="bg-red-100 border border-green-300 rounded p-4 flex flex-col items-centershadow-lg hover:shadow-2xl transition-shadow duration-300 ">
            <p className="text-lg font-semibold">Surgeries</p>
            <p className="text-2xl font-bold text-yellow-500">45</p>
          </div> */}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pie Chart: Appointments by Type */}
          <div className="bg-white border rounded p-12  shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-lg font-semibold mb-4">Appointments by Type</h2>
            <PieChart
              series={[
                {
                  data: pieData,
                  labelPosition: "outside", // Move labels outside
                  labelLine: true,
                },
              ]}
              width={400}
              height={200}
            />
          </div>

          {/* Bar Chart: Quarterly Revenue */}
          <div className="bg-white border rounded p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 ">
            <h2 className="text-lg font-semibold mb-4 ">Quarterly Revenue</h2>
            <BarChart
              series={barData}
              height={250}
              xAxis={[{ data: xAxisData, scaleType: "band" }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
