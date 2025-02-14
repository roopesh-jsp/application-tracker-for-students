import axios from "axios";
import React, { useState } from "react";
import { useAppContext } from "../context/Appcontext";
import { useNavigate } from "react-router-dom";

function ApplicationForm() {
  const { backend_url, user, token } = useAppContext();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function HandleCreateApplication(e) {
    setLoading(true);
    e.preventDefault();
    const enteredFormData = new FormData(e.target);
    const enteredData = Object.fromEntries(enteredFormData);
    try {
      const { data } = await axios.post(
        backend_url + "/api/create",
        enteredData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(data);

      if (data.success) {
        user.applications.push(data.application);
        setError("");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      setError(error?.response?.data?.message);
    }
    setLoading(false);
  }

  return (
    <div className="max-w-lg w-full bg-white mx-auto my-12 p-10 rounded-2xl shadow-lg">
      <h1 className="text-center capitalize font-bold text-2xl mb-5">
        Application Form
      </h1>
      <form onSubmit={HandleCreateApplication} className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-3 justify-between items-center capitalize my-2">
          <label
            htmlFor="program_name"
            className="text-center w-full md:w-auto"
          >
            Program Name
          </label>
          <input
            type="text"
            name="program_name"
            id="program_name"
            placeholder="Program Name"
            className="border-2 px-3 py-2 rounded-md w-full"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 justify-between items-center capitalize my-2">
          <label className="text-center w-full md:w-auto" htmlFor="university">
            University
          </label>
          <input
            type="text"
            name="university"
            id="university"
            placeholder="University"
            className="border-2 px-3 py-2 rounded-md w-full"
          />
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <button
          disabled={loading}
          className="bg-blue-300 w-full md:w-fit mx-auto px-7 mt-4 rounded-lg font-bold py-2"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ApplicationForm;
