import React from "react";
import AuthForm from "./components/AuthForm";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLAyout from "./pages/RootLAyout";
import Dashboard from "./pages/Dashboard";
import Application from "./pages/Application";
import Protect from "./wrappers/Protect";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protect>
        <RootLAyout />
      </Protect>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/applications",
        element: <Application />,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthForm />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
