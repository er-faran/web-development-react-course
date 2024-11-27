import SpecialityTypeCardComponent from "./SpecialityTypeCardComponent";

const FindBySpeciality = () => {
  return (
    <div className="text-center">
      <div>
        <h2 className="text-3xl font-semibold mb-5">Find by Speciality</h2>
      </div>
      <div className="flex justify-center mb-5">
        <p className="text-sm max-w-96">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
      </div>
      <div className="flex gap-2 justify-center align-middle">
        <SpecialityTypeCardComponent />
      </div>
    </div>
  );
};

export default FindBySpeciality;
