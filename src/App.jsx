import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Signup/Register";
import "./App.css";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProductPage from "./pages/ProductPage/ProductPage";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import Footer from "./Components/Footer/Footer";

function App() {
  const [currentForm, setCurrentForm] = useState("Login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {currentForm === "Login" ? (
          <Route path="/login" element={<Login onFormSwitch={toggleForm} />} />
        ) : (
          <Route
            path="/register"
            element={<Register onFormSwitch={toggleForm} />}
          />
        )}
        <Route path="/product-details/:itemCode" element={<ProductDetails />} />
        <Route exact path="/product-page" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
