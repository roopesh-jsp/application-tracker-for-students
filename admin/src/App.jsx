import React, { useEffect, useState } from "react";
import AuthForm from "./components/AuthForm";
import DashBoard from "./components/DashBoard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Protect from "./wrappers/Protector";
import AppContextPorovider from "./context/Apppppp";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <AuthForm />,
  },
  {
    path: "/",
    element: (
      <Protect>
        <DashBoard />
      </Protect>
    ),
  },
]);
function App() {
  return (
    <AppContextPorovider>
      <RouterProvider router={router} />
    </AppContextPorovider>
  );
}

export default App;
