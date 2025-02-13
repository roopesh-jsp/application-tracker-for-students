import React from "react";
import { useAppContext } from "../context/Appcontext";
import { useNavigate } from "react-router-dom";

function Protect({ children }) {
  const { token, user } = useAppContext();

  const navigate = useNavigate();
  console.log(user);

  if (!token) {
    return navigate("/login");
  }
  return <>{children}</>;
}

export default Protect;
