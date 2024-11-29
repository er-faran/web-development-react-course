import React from "react";
import BannerComponent from "./BannerComponent";
import FindBySpeciality from "./FindBySpeciality";
import DoctorListComponent from "./DoctorListComponent";
import CreateAccountBanner from "./CreateAccountBanner";
import FooterComponent from "../../Common/components/FooterComponent";

const MemberHome = () => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        {/* <div className="mb-8"> */}
        {/* <NavbarComponent isAdminNavbar={false} /> */}
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
    </div>
  );
};

export default MemberHome;
