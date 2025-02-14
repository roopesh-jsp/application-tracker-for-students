import axios from "axios";
import React, { useState } from "react";
import { useAppContext } from "../context/Appcontext";
import { redirect, useNavigate } from "react-router-dom";

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
          headers: { Authorization: `Barear ${token}` },
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
    <div className="w-fit bg-white mx-auto my-12 p-10 rounded-2xl shadow-2xs">
      <h1 className="text-center capitalize font-bold text-xl mb-5">
        Application Form
      </h1>
      <form onSubmit={HandleCreateApplication} className="flex flex-col gap-2 ">
        <div className="flex gap-3 bg-red justify-between w-[100%] items-center capitalize my-2">
          <label htmlFor="program_name" className=" text-end">
            program name
          </label>
          <input
            type="text"
            name="program_name"
            id="program_name"
            placeholder="program name"
            className="border-2 px-2 py-1 rounded-sm"
          />
        </div>
        <div className="flex gap-3 justify-between w-[100%] items-center capitalize my-2">
          <label className="text-end" htmlFor="university">
            university
          </label>
          <input
            type="text"
            name="university"
            id="university"
            placeholder="university"
            className="border-2 px-2 py-1 rounded-sm"
          />
        </div>
        {error && <p>{error}</p>}
        <button
          disabled={loading}
          className="bg-blue-300 w-fit mx-auto px-7 mt-2 rounded-lg relative left-2 font-bold  py-2"
        >
          {loading ? "submitting... " : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ApplicationForm;
