import React from "react";
import NavbarComponent from "../../Common/components/NavbarComponent";
import FindBySpeciality from "./FindBySpeciality";

const Home = () => {
  return (
    <div>
      <NavbarComponent isAdminNavbar={true} />
      <FindBySpeciality />
    </div>
  );
};

export default Home;
