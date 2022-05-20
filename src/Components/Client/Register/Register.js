import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from "react";
import { Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase_init";
import useAuth from "../../../Hooks/useAuth";
import "./Register.css";

const Register = () => {
  const { setUserInfo } = useAuth();
  const navigate = useNavigate();
  const date = new Date();
  const registerDate = date.toDateString();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const usersData = { name, email, registerDate };
    if (password !== confirmPassword) {
      toast.warn("Password did not matched.");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          await updateProfile(auth.currentUser, {
            displayName: name,
          });
          const user = userCredential.user;
          setUserInfo(user);
          fetch("http://localhost:5000/post-users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(usersData),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
            })
            .catch((error) => {
              // console.error("Error:", error);
            });
          navigate("/thank-you");
        })
        .catch((error) => {
          const errorMessage = error.message;
          if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
            toast.warn("This email is already in use.");
          }
          if (errorMessage === "Firebase: Error (auth/invalid-email).") {
            toast.warn("Please enter a valid email.");
          }
          if (
            errorMessage === "Firebase: Error (auth/network-request-failed)."
          ) {
            toast.error("Please check your internet connection.");
          }
          if (
            errorMessage ===
            "Firebase: Password should be at least 6 characters (auth/weak-password)."
          ) {
            toast.warn("Password should be at least 6 characters.");
          }
        });
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="register-form-container">
        <form onSubmit={handleRegister} className="register-form">
          <h3 className="my-3">Register</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />{" "}
          <br />
          <input type="email" name="email" placeholder="Email" required />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />{" "}
          <br />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            required
          />{" "}
          <br />
          <div className="d-flex justify-content-center">
            <Button type="submit">Register</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
