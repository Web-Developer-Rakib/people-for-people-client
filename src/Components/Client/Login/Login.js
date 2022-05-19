import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase_init";
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { setUserInfo } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserInfo(user);
        navigate("/thank-you");
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage === "Firebase: Error (auth/wrong-password).") {
          toast.warn("Wrong password.");
        }
        if (errorMessage === "Firebase: Error (auth/network-request-failed).") {
          toast.error("Please check your internet connection.");
        }
        if (errorMessage === "Firebase: Error (auth/missing-email).") {
          toast.warn("Please enter your email.");
        }
        if (errorMessage === "Firebase: Error (auth/user-not-found).") {
          toast.warn("This email is not registered yet.");
        }
        if (errorMessage === "Firebase: Error (auth/invalid-email).") {
          toast.warn("Please enter a valid email.");
        }
      });
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="login-form-container">
        <form onSubmit={handleLogin} className="login-form">
          <h3 className="my-3">Login</h3>
          <input type="email" name="email" placeholder="Email" /> <br />
          <input type="password" name="password" placeholder="Password" />{" "}
          <br />
          <div className="d-flex justify-content-center">
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
