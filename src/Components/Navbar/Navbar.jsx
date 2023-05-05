import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import design from "./style.module.css";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <div className={design.Navbar}>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <Search />
      <div className={design.NavEnd}>
        <Link to="/register">
          <button>Sign Up</button>
        </Link>
        <Link to="login">
          {" "}
          <button>Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
