import React from "react";
import { useAppContext } from "../context/Apppppp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function DashBoard() {
  const { setToken, backend_url, token } = useAppContext();
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("atoken");
    setToken(null);
    navigate("/login");
  }
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);

  async function getAllApplications() {
    setLoading(true);
    try {
      const { data } = await axios.get(backend_url + "/api/get-all", {
        headers: { Authorization: `Barear ${token}` },
      });
      console.log(data);

      if (data.success) {
        setApplications(data.appointments);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  async function handleStatusChange(e, id) {
    setUpdating(true);
    try {
      const { data } = await axios.post(
        backend_url + "/api/admin/application",
        {
          applicationId: id,
          status: e.target.value,
        },
        {
          headers: { Authorization: `Barear ${token}` },
        }
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    setUpdating(false);
  }
  useEffect(() => {
    getAllApplications();
    // console.log(applications);
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center p-10 ">
        <h1 className="uppercase text-2xl font-bold">Admin- dashboard</h1>
        <button
          onClick={handleLogout}
          className=" border-2 bg-red-300 cursor-pointer rounded-sm px-3 py-2"
        >
          logout
        </button>
      </div>
      {loading ? (
        <div>laoding ... </div>
      ) : (
        <div className="overflow-x-auto m-5 rounded-t-xl shadow-lg">
          <table className="table-auto w-full bg-blue-200 rounded-lg shadow-lg">
            <thead className="bg-blue-400">
              <tr className="">
                <th className="px-4 py-4">Program Name</th>
                <th className="px-4 py-2">University</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Update</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((ap, idx) => (
                <tr key={idx} className="bg-blue-100">
                  <td className="border px-4 py-2">{ap.program_name}</td>
                  <td className="border px-4 py-2">{ap.university}</td>
                  <td className="border px-4 py-2">{ap.student.name}</td>
                  <td className="border px-4 py-2">{ap.student.email}</td>
                  <td className="border px-4 py-2">{ap.status}</td>
                  <td className="border px-4 py-2">
                    <select
                      name="status"
                      className="bg-white border border-gray-300 rounded-md p-2"
                      onChange={(e) => {
                        handleStatusChange(e, ap._id);
                      }}
                    >
                      <option
                        value="pending"
                        selected={ap.status === "pending"}
                      >
                        pending
                      </option>
                      <option
                        value="accepted"
                        selected={ap.status === "accepted"}
                      >
                        accepted
                      </option>
                      <option
                        value="rejected"
                        selected={ap.status === "rejected"}
                      >
                        rejected
                      </option>
                    </select>
                    {updating && (
                      <p className="text-sm capitalize text-red-400 text-center font-bold animate-pulse">
                        updating ...
                      </p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default DashBoard;
