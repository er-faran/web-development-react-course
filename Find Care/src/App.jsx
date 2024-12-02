import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent"
import AboutUsComponent from "./components/AboutUsComponent";
import BannerComponent from "./components/BannerComponent";
import FooterComponent from "./components/FooterComponent";
import NavbarComponent from "./components/NavBarComponent";
import ContactUsComponent from "./components/ContactUsComponent";
import { Home } from "@mui/icons-material";


function App() {
  return (

    <Router>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUsComponent />} />
        <Route path="/contact" element={<ContactUsComponent />} />



      </Routes>
    </Router>

  );
};

export default App;
