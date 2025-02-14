import React, { useEffect, useState } from "react";
import AuthForm from "./components/AuthForm";
import DashBoard from "./components/DashBoard";

const router = createBro;
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  });

  if (!token) {
    return <AuthForm />;
  }
  return (
    <div>
      <DashBoard />
    </div>
  );
}

export default App;
