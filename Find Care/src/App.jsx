import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Member/Components/Home.jsx";
import AdminDashboard from "./Admin/Components/AdminDashboard.jsx";
import NavbarComponent from "./Common/components/NavbarComponent.jsx";
import SignInComponent from "./Common/components/SignInComponent.jsx";
import SignUpComponent from "./Common/components/SignUpComponent.jsx";
import DoctorDetailsComponent from "./Member/Components/DoctorDetailsComponent.jsx";
import RouteNotFoundComponent from "./Common/components/RouteNotFoundComponent.jsx";
import About from "./Member/Components/About.jsx";
import ContactComponent from "./Member/Components/ContactComponent.jsx";
import FooterComponent from "./Common/components/FooterComponent.jsx";

function App() {
  return (
    <div>
      <Router>
        <NavbarComponent />
        <Routes>
          {/* Member Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<ContactComponent />} />

          {/* Common Routes */}
          <Route
            path="/doctor-details/:id"
            element={<DoctorDetailsComponent />}
          />
          <Route path="/signin" element={<SignInComponent />} />
          <Route path="/signup" element={<SignUpComponent />} />

          {/* Admin Routes */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          

          {/* Unknown Routes */}
          <Route path="*" element={<RouteNotFoundComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;