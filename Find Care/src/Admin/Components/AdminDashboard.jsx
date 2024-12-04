import React from "react";
import Sidebar from "./Sidebar";


const AdminDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      <div>Hello world</div>
      
    </div>
  );
};

export default AdminDashboard;