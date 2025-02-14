import React, { useEffect } from "react";
import { useAppContext } from "../context/Appcontext";
import { useNavigate } from "react-router-dom";

function Protect({ children }) {
  const { token, user } = useAppContext();

  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  return <>{children}</>;
}

export default Protect;
