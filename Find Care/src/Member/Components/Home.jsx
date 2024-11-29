import NavbarComponent from "../../Common/components/NavbarComponent";
import FindBySpeciality from "./FindBySpeciality";
import BannerComponent from "./BannerComponent";
import DoctorListComponent from "./DoctorListComponent";
import CreateAccountBanner from "./CreateAccountBanner";
import FooterComponent from "../../Common/components/FooterComponent";
import MemberHome from "./MemberHome";
import { Route, Router, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        {/* <NavbarComponent isAdminNavbar={false} /> */}
        <MemberHome />
      </div>
    </>
  );
};

export default Home;
