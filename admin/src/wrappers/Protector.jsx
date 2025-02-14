import React, { useEffect } from "react";
import { useAppContext } from "../context/Apppppp";
import { useNavigate } from "react-router-dom";

function Protect({ children }) {
  const { token } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  return <>{children}</>;
}

export default Protect;
