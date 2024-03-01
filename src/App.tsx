import Footer from "./LandingFolder/Footer";
import Landing from "./LandingFolder/Landing";
import Navbar from "./LandingFolder/Navbar";
import { ProductContextProvider } from "./ProductContext";
import KundSida from "./Sidor/KundSida";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./InformationPages/AboutUs";
import Contact from "./LandingFolder/Contact";

function App() {

 

  return (
    <BrowserRouter>
    <ProductContextProvider>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/KundSida" element={<KundSida />} />
        
        
        </Routes>
    </ProductContextProvider>
    <Footer />
    </BrowserRouter>
  );
}

export default App;

