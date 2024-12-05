import SpecialityTypeCardComponent from "./SpecialityTypeCardComponent";

const FindBySpeciality = () => {
  return (
    <div className="text-center">
      <div>
        <h2 className="section-heading">Find by Speciality</h2>
      </div>
      <div className="flex justify-center mb-5">
        <p className="section-description">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
      </div>
      <div className="flex gap-2 flex-wrap justify-center align-middle">
        <SpecialityTypeCardComponent />
      </div>
    </div>
  );
};

export default FindBySpeciality;
