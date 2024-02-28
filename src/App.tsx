import Footer from "./LandingFolder/Footer";
import Landing from "./LandingFolder/Landing";
import Navbar from "./LandingFolder/Navbar";
import { ProductContextProvider } from "./ProductContext";


function App() {

 

  return (
    <ProductContextProvider>

        <Navbar />
        <Landing />
        <Footer />

    </ProductContextProvider>
  );
}

export default App;