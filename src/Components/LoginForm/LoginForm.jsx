import React from "react";
import "./LoginForm.css";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function LoginForm({
  handleOnChange,
  email,
  password,
  handleOnSubmit,
  formSwitcher,
}) {
  return (
    <div className="login-form">
      <div className="login-form-wrap">
        <header>Client Login</header>
        <hr />
        <div className="space-er"></div>
        <form autoComplete="off">
          <div className="login-form-email">
            <label>Email :</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Input Email"
              required
              onChange={handleOnChange}
              className="login-form-input"
            />
          </div>
          <div className="login-form-pass">
            <label>Password :</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Input password"
              required
              onChange={handleOnChange}
              className="login-form-input"
            />
          </div>
          <div className="login-from-button">
            <button
              type="submit"
              onClick={handleOnSubmit}
              className="login-from-button-btn"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="forgot-password">
          <a href="#" onClick={() => formSwitcher("forgetpassword")}>
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

LoginForm.propTypes = {
  forgetpassword: propTypes.func.isRequired,
  handleOnChange: propTypes.func.isRequired,
  handleOnSubmit: propTypes.func.isRequired,
  email: propTypes.string.isRequired,
  password: propTypes.string.isRequired,
};
