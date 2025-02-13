import React from "react";
import { Outlet } from "react-router-dom";

function RootLAyout() {
  return (
    <div>
      sidebar
      <Outlet />
    </div>
  );
}

export default RootLAyout;
