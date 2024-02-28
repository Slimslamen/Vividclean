import Footer from "./LandingFolder/Footer";
import Landing from "./LandingFolder/Landing";
import Navbar from "./LandingFolder/Navbar";
import { ProductContextProvider } from "./ProductContext";
import KundSida from "./Sidor/KundSida";


function App() {

 

  return (
    <ProductContextProvider>
        <Navbar />
        <Landing />
        <Footer />
        <KundSida />
    </ProductContextProvider>
  );
}

export default App;