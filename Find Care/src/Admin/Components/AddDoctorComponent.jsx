import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Sidebar from "./Sidebar";

const AddDoctorComponent = () => {
  return (
    <div className="flex gap-5 bg-[#F8F9FD]">
      <Sidebar />
      <div className="flex-1 mt-5">
        <h3 className="mb-3 text-lg font-medium">Add Doctor</h3>

        <div className="bg-white mt-5 w-[80%] p-5 max-h-[500px] overflow-y-auto no-scrollbar">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Submit Called");
            }}
            className="flex gap-5 flex-wrap justify-around"
          >
            <div className="w-[48%] flex flex-col gap-2">
              <label htmlFor="name">Your name</label>
              <TextField
                size="small"
                id="name"
                label="Your name"
                variant="outlined"
              />
            </div>

            <div className="w-[48%] flex flex-col gap-2">
              <label htmlFor="age">Speciality</label>

              <FormControl fullWidth>
                <InputLabel id="doctor-speciality">Speciality</InputLabel>
                <Select
                  size="small"
                  labelId="doctor-speciality"
                  id="demo-simple-select"
                  //   value={age}
                  label="Speciality"
                  //   onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="w-[48%] flex flex-col gap-2">
              <label htmlFor="email">Doctor Email</label>
              <TextField
                size="small"
                id="email"
                label="Doctor Email"
                variant="outlined"
                type="email"
              />
            </div>

            <div className="w-[48%] flex flex-col gap-2">
              <label htmlFor="degree">Degree</label>
              <TextField
                size="small"
                id="degree"
                label="Degree"
                variant="outlined"
              />
            </div>

            <div className="w-[48%] flex flex-col gap-2">
              <label htmlFor="password">Set Password</label>
              <TextField
                size="small"
                id="password"
                label="Set Password"
                variant="outlined"
                type="password"
              />
            </div>

            <div className="w-[48%] flex flex-col gap-2">
              <label htmlFor="address">Address</label>
              <TextField
                size="small"
                id="address-1"
                label="Address 1"
                variant="outlined"
              />
              <TextField
                size="small"
                id="address-2"
                label="Address 2"
                variant="outlined"
              />
            </div>

            <div className="w-[100%] flex flex-col gap-2">
              <label htmlFor="age">Experience</label>

              <FormControl className="w-[48%]">
                <InputLabel id="doctor-experience">Experience</InputLabel>
                <Select
                  size="small"
                  labelId="doctor-experience"
                  id="demo-simple-select"
                  //   value={age}
                  label="Experience"
                  //   onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="w-[100%] flex flex-col gap-2">
              <label htmlFor="fees">Fees</label>
              <TextField
                size="small"
                className="w-[48%]"
                id="fees"
                label="Fees"
                variant="outlined"
                type="number"
              />
            </div>

            <div className="w-[100%] flex flex-col gap-2">
              <label htmlFor="about-doctor">About Doctor</label>
              <textarea id="about-doctor" rows={7} className="border" />
            </div>

            <div className="w-full">
              <button
                className="bg-[#5c74fc] hover:bg-blue-800 text-white text-sm px-6 py-2 rounded-full"
                type="submit"
              >
                Add Doctor
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctorComponent;
