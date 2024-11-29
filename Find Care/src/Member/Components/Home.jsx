import React from "react";
import NavbarComponent from "../../Common/components/NavbarComponent";
import FindBySpeciality from "./FindBySpeciality";
import BannerComponent from "./BannerComponent";
import DoctorListComponent from "./DoctorListComponent";
import CreateAccountBanner from "./CreateAccountBanner"
import FooterComponent from "../../Common/components/FooterComponent";

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* <div className="mb-8"> */}
      <NavbarComponent isAdminNavbar={false} />
      {/* </div> */}
      {/* <div className="mb-8"> */}
      <BannerComponent />
      {/* </div> */}
      {/* <div className="mb-8"> */}
      <FindBySpeciality />
      {/* </div> */}
      {/* <div className="mb-8"> */}
      <DoctorListComponent />
      {/* </div> */}
      <CreateAccountBanner />
      <FooterComponent />
    </div>
  );
};

export default Home;
