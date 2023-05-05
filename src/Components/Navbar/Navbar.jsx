import Logo from "../../assets/logo.png";
// import { Link } from "react-router-dom";
import design from "./style.module.css";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <div className={design.Navbar}>
      <img src={Logo} alt="Logo" />
      <Search />
      <div className={design.NavEnd}>
        <button>Sign Up</button>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
