import React from "react";
import useAuth from "../../../Hooks/useAuth";

const ThankYou = () => {
  const { userInfo } = useAuth();
  return (
    <div>
      <h1>Dear {userInfo?.displayName}</h1>
      <h1>Thanks for register.</h1>
    </div>
  );
};

export default ThankYou;
