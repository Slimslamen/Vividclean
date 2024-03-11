import Footer from "./LandingFolder/Footer";
import Landing from "./LandingFolder/Landing";
import Navbar from "./LandingFolder/Navbar";
import { ProductContextProvider } from "./ProductContext";
import KundSida from "./Sidor/KundSida";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./InformationPages/AboutUs";
import Contact from "./LandingFolder/Contact";
import ScrollToTop from "./ScrollToTop";
import { UserAuthContextProvider } from "./UserAuthContext";
import LogIn from "./LoginFolder/LogIn";
import { ProtectedRoute } from "./LoginFolder/ProtectedRoute";
import AdminLogin from "./LoginFolder/AdminLogin";
import React from "react";
import BackgroundOpacity from "./LandingFolder/components/BackgroundOpacity";
import Register from "./LoginFolder/Register";
import PersonalSida from "./Sidor/PersonalSida";
import Loading from "./Loading";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <UserAuthContextProvider>
        <ProductContextProvider>
        <LogIn />
          <AdminLogin />
          <Register />
          <BackgroundOpacity>   
          <Navbar />
          <Loading />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Contact" element={<Contact />} />
            {/* <Route path="/KundSida"  element={<ProtectedRoute><KundSida /></ProtectedRoute>}  /> */}
            <Route path="/KundSida" element={<KundSida />} />
            <Route path="/PersonalSida" element={<PersonalSida />} />
          </Routes>
          <Footer />
          </BackgroundOpacity>
        </ProductContextProvider>
      </UserAuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
