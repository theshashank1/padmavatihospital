import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Doctors from "./pages/Doctors/Doctors";
import Cardiology from "./pages/Department/Cardiology";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Bookappoinment from "./pages/Bookappoinment/Bookappoinment";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/Department/Cardiology" element={<Cardiology />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />

        {/* Correct Route */}
        <Route path="/Bookappoinment" element={<Bookappoinment />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
