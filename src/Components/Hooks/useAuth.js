import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../../../firebase_init";

const useAuth = () => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
    });
  }, []);
  return { userInfo, setUserInfo };
};

export default useAuth;
