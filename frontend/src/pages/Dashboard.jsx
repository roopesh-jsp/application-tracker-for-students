import React from "react";
import { useAppContext } from "../context/Appcontext";

function Dashboard() {
  const { user } = useAppContext();
  return (
    <div className="px-5 py-10">
      {/* user data  */}
      <div className="flex flex-col font-extrabold gap-1 bg-white mt-10 w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto text-xl text-center p-5 rounded-2xl shadow-lg">
        <span className="font-light text-sm text-start relative -top-2 -left-2">
          logged user
        </span>
        <h1>{user?.name}</h1>
        <h3 className="text-lg font-medium">{user?.email}</h3>
      </div>

      {/* applications of user */}
      <div className="mt-10">
        <h1 className="p-5 underline text-center text-xl">Applications</h1>
        <div className="overflow-x-auto mx-auto rounded-t-2xl max-w-full">
          <table className="table-auto w-full bg-blue-200 rounded-lg shadow-lg">
            <thead className="bg-blue-400">
              <tr>
                <th className="px-4 py-3">Program</th>
                <th className="px-4 py-2">University</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>

            <tbody>
              {user?.applications?.length === 0 && (
                <tr>
                  <td
                    colSpan="3"
                    className="p-5 text-xl text-center animate-pulse uppercase"
                  >
                    no applications
                  </td>
                </tr>
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
