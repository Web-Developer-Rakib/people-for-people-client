import React from "react";
import { Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="login-form-container">
        <form className="login-form">
          <h3 className="my-3">Login</h3>
          <input type="email" placeholder="Email" /> <br />
          <input type="password" placeholder="Password" /> <br />
          <div className="d-flex justify-content-center">
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
