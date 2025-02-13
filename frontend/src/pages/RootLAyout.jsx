import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function RootLAyout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default RootLAyout;
