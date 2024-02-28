import Landing from "./LandingFolder/Landing";
import './index.css'
import LogIn from "./LoginFolder/LogIn";
import { ProductContextProvider } from "./ProductContext";


function App() {
  return (
    <>
<ProductContextProvider>
        <Landing />
        <LogIn />
        </ProductContextProvider>
    </>
  );
}

export default App;
