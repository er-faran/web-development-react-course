import React from "react";
import NavbarComponent from "../../Common/components/NavbarComponent";
import FindBySpeciality from "./FindBySpeciality";
import BannerComponent from "./BannerComponent";

const Home = () => {
  return (
    <div>
    <div className="mb-8">
      <NavbarComponent isAdminNavbar={false} />
    </div>
    <div className="mb-8">
      <BannerComponent />
    </div>
    <div className="mb-8">
      <FindBySpeciality />
    </div>
  </div>
  );
};

export default Home;
