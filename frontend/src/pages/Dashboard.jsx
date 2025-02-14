import React from "react";
import { useAppContext } from "../context/Appcontext";

function Dashboard() {
  const { user } = useAppContext();
  return (
    <div>
      {/* user data  */}
      <div className="flex flex-col font-extrabold gap-1 bg-white mt-10 w-70 mx-10 text-xl text-center p-5 rounded-2xl">
        <span className="font-light text-sm text-start relative -top-2 -left-2">
          logged user
        </span>
        <h1>{user?.name}</h1>
        <h3 className="text-lg font-medium">{user?.email}</h3>
      </div>

      {/* applications of user  */}
      <div>
        <h1 className="p-5 underline text-center text-xl ">Applications</h1>
        <div className="overflow-x-auto mx-5 rounded-t-2xl">
          <table className="table-auto w-full bg-blue-200 rounded-lg shadow-lg">
            <thead className="bg-blue-400">
              <tr>
                <th className="px-4 py-3">Program</th>
                <th className="px-4 py-2">University</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>

            <tbody>
              {user?.applications?.length == 0 && (
                <p className="p-5 text-xl text-center relative left-[50%] w-full animate-pulse uppercase">
                  no applications
                </p>
              )}
              {user?.applications?.map((app, idx) => (
                <tr key={idx} className="bg-blue-200">
                  <td className="border px-4 py-2">{app.program_name}</td>
                  <td className="border px-4 py-2">{app.university}</td>
                  <td className="border px-4 py-2">{app.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
