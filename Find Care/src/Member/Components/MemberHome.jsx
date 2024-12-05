import BannerComponent from "./BannerComponent";
import FindBySpeciality from "./FindBySpeciality";
import DoctorListComponent from "./DoctorListComponent";
import CreateAccountBanner from "./CreateAccountBanner";

const MemberHome = () => {
  return (
    <div className="max-w-screen">
      <div className="flex flex-col gap-12">
        <BannerComponent />

        <FindBySpeciality />

        <DoctorListComponent />

        <CreateAccountBanner />
      </div>
    </div>
  );
};

export default MemberHome;
