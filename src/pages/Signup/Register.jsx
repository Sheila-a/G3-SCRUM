import PropTypes from "prop-types";
import { useState } from "react";
import design from "./style.module.css";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className={design.Appp}>
      <div className={design.container}>
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
          <button
            className="link-btn"
            onClick={() => props.onFormSwitch("register")}
          >
            Don`&apos;`t have an account? Register Here.
          </button>
        </div>
      </div>
    </div>
  );
};
Register.propTypes = {
  onFormSwitch: PropTypes.func.isRequired,
};
