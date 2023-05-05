import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import design from "./style.module.css";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <div className={design.Login_container}>
        {" "}
        <div className={design.auth_form_container}>
          <h1>Login</h1>
          <form className={design.register_form} onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="example@email.com"
              id="email"
              name="email"
            />
            <label htmlFor="password">Password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="input password"
              id="password"
              name="password"
            />
            <button type="submit">Log In</button>
          </form>
          <p className={design.link_btn}>
            Don&apos;t have an account? Register{" "}
            <Link to="/register">
              <span onClick={() => props.onFormSwitch("register")}>Here.</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  onFormSwitch: PropTypes.func.isRequired,
};
