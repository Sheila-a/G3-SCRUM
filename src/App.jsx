import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Signup/Register";
import "./App.css";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [currentForm, setCurrentForm] = useState("Login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <>
      <Navbar />
      <Routes>
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
    </>
  );
}

export default App;
