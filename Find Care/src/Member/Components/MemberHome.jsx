import BannerComponent from "./BannerComponent";
import FindBySpeciality from "./FindBySpeciality";
import DoctorListComponent from "./DoctorListComponent";
import CreateAccountBanner from "./CreateAccountBanner";
import FooterComponent from "../../Common/components/FooterComponent";

const MemberHome = () => {
  return (
    <div>
      <div className="flex flex-col gap-12">
        <BannerComponent />

        <FindBySpeciality />

        <DoctorListComponent />

        <CreateAccountBanner />

        <FooterComponent />
      </div>
    </div>
  );
};

export default MemberHome;
