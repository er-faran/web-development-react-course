import NavbarComponent from "../../Common/components/NavbarComponent";
import FindBySpeciality from "./FindBySpeciality";
import BannerComponent from "./BannerComponent";
import DoctorListComponent from "./DoctorListComponent";
<<<<<<< HEAD
import CreateAccountBanner from "./CreateAccountBanner"
import FooterComponent from "../../Common/components/FooterComponent";
=======
import CreateAccountBanner from "./CreateAccountBanner";
>>>>>>> 7fd155a7d77a710b4ec4a9c394a6c5b8d9a8f99b

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
<<<<<<< HEAD
      <FooterComponent />
=======
>>>>>>> 7fd155a7d77a710b4ec4a9c394a6c5b8d9a8f99b
    </div>
  );
};

export default Home;
