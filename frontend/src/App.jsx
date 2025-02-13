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

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLAyout />,
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
]);
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
