import React from "react";
import { useAppContext } from "../context/Appcontext";

function Dashboard() {
  const { user } = useAppContext();
  return (
    <div>
      {/* user data  */}
      <div>
        <h1>{user?.name}</h1>
        <h3>{user?.email}</h3>
      </div>

      {/* applications of user  */}
      <div>
        <h1>Applications</h1>
        {user?.applications?.map((app, idx) => (
          <div
            key={idx}
            className="flex gap-5 bg-amber-50 shadow-2xs rounded-md"
          >
            <span>program : {app.program_name}</span>
            <span>university: {app.university}</span>
            <span>status : {app.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
