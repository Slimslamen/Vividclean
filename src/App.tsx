import Footer from "./LandingFolder/Footer";
import Landing from "./LandingFolder/Landing";
import Navbar from "./LandingFolder/Navbar";
import "./index.css";
import Register from "./LoginFolder/Register";
import KundSida from "./Sidor/KundSida";


function App() {
  return (
    <>
      <Navbar />
      <Register />
      <Landing />
      <KundSida />
      <Footer />
    </>
  );
}

export default App;
