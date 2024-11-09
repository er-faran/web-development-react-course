import React from "react";
import withAuth from "./withAuth";

const Dashboard = () => {
  return <div>Hi User This is a Dashboard Page</div>;
};

export default withAuth(Dashboard);
