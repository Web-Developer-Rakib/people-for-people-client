import React from "react";
import { Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "./Register.css";

const Register = () => {
  const date = new Date();
  const today = date.toDateString();
  console.log(today);
  return (
    <div className="d-flex justify-content-center">
      <div className="register-form-container">
        <form className="register-form">
          <h3 className="my-3">Register</h3>
          <input type="text" placeholder="Full Name" /> <br />
          <input type="email" placeholder="Email" />
          <br />
          <input type="password" placeholder="Password" /> <br />
          <input type="password" placeholder="Confirm password" /> <br />
          <div className="d-flex justify-content-center">
            <Button type="submit">Register</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
