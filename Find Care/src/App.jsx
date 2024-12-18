import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Member/Components/Home.jsx";
import AdminDashboard from "./Admin/Components/AdminDashboard.jsx";
import NavbarComponent from "./Common/components/NavbarComponent.jsx";
import SignInComponent from "./Common/components/SignInComponent.jsx";
import SignUpComponent from "./Common/components/SignUpComponent.jsx";
import DoctorDetailsComponent from "./Member/Components/DoctorDetailsComponent.jsx";
import RouteNotFoundComponent from "./Common/components/RouteNotFoundComponent.jsx";
import AllDoctorComponent from "./Member/Components/AllDoctorComponent.jsx";
import About from "./Member/Components/About.jsx";
import ContactComponent from "./Member/Components/ContactComponent.jsx";
import FooterComponent from "./Common/components/FooterComponent.jsx";
import AddDoctorComponent from "./Admin/Components/AddDoctorComponent.jsx";
import DoctorListAdminComponent from "./Admin/Components/DoctorsListAdminComponent.jsx";
import AppointmentComponent from "./Admin/Components/AppointmentComponent.jsx";
import MyProfileComponent from "./Member/Components/MyProfileComponent.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <NavbarComponent />
        <div className="flex-1">
          <Routes>
            {/* Member Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactComponent />} />
            <Route path="/my-profile" element={<MyProfileComponent />} />
            <Route
              path="/my-appointments/:email"
              element={
                <div className="mx-4 lg:mx-36">
                  <AppointmentComponent
                    isSidebarToShow={false}
                    tableHeading="My Appointments"
                  />
                </div>
              }
            />

            {/* Common Routes */}
            <Route path="all-doctor" element={<AllDoctorComponent />} />
            <Route
              path="/doctor-details/:id"
              element={<DoctorDetailsComponent />}
            />
            <Route path="/signin" element={<SignInComponent />} />
            <Route path="/signup" element={<SignUpComponent />} />

            {/* Admin Routes */}
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route
              path="/all-appointments"
              element={<AppointmentComponent />}
            />
            <Route path="/add-doctor" element={<AddDoctorComponent />} />
            <Route path="/doctor-list" element={<DoctorListAdminComponent />} />

            {/* Unknown Routes */}
            <Route path="*" element={<RouteNotFoundComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </UserContextProvider>
    </Router>
  );
}

export default App;
