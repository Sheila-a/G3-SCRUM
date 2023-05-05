import { Route, Routes } from "react-router-dom";
import "./App.css";
// import DogData from "./data/data";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/product-details/:itemCode" element={<ProductDetails />} />
        <Route exact path="/product-page" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
