/* eslint-disable react/prop-types */
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Sidebar from "./Sidebar";
import { onValue, ref } from "firebase/database";
import { database } from "../../firebaseConfig";
import { useParams } from "react-router-dom";

const AppointmentComponent = ({
  isSidebarToShow = true,
  tableHeading = "All Appointments",
}) => {
  const [appointmentsData, setAppointmemtsData] = React.useState([]);

  const params = useParams();

  const getAppointmentsData = () => {
    try {
      const starCountRef = ref(database, "appointments/");
      onValue(
        starCountRef,
        (snapshot) => {
          const dbData = snapshot.val();
          if (dbData) {
            const data = Object.values(dbData);
            if (params?.email) {
              const filteredData = data?.filter((request) => {
                return request?.loggedInUserID === atob(params?.email);
              });
              console.log("appointment", data, filteredData);
              setAppointmemtsData(filteredData);
            } else {
              setAppointmemtsData(data);
            }
          }
        },
        {
          onlyOnce: true,
        }
      );
    } catch (error) {
      alert("Something went wrong please try again later");
      console.log(error);
    }
  };

  React.useEffect(() => {
    // Get All Appointment Data
    getAppointmentsData();
  }, []);

  return (
    <div className="flex">
      {isSidebarToShow && (
        <div>
          <Sidebar />
        </div>
      )}
      {appointmentsData?.length > 0 ? (
        <div className="px-4 py-4 bg-[#F8F9FD] flex-1">
          <div className="py-2 text text-xl">{tableHeading}</div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 850 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Appointment Date</TableCell>
                  <TableCell>Appointment Slot</TableCell>
                  <TableCell>Appointment For</TableCell>
                  <TableCell>Symptoms</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointmentsData?.map((row) => (
                  <TableRow
                    key={row?.userName}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row?.userName}
                    </TableCell>
                    <TableCell>{row?.email}</TableCell>
                    <TableCell>{row?.phone}</TableCell>
                    <TableCell>{row?.age}</TableCell>
                    <TableCell>{row.gender === "male" ? "M" : "F"}</TableCell>
                    <TableCell>{row.bookingDate}</TableCell>
                    <TableCell>{row.bookingSlot}</TableCell>
                    <TableCell>{atob(row.doctorId)}</TableCell>
                    <TableCell>{row.symptoms}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <div className="border-2 text-center mx-auto p-10 rounded-lg">
          <div className="text-xl mb-3">No Appointments Found</div>
          <div className="text-sm">
            Please book appointment with any registered doctor to see
            appointment here.
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentComponent;
