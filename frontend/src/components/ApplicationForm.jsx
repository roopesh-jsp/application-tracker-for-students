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
    <div>
      <h1>Application Form</h1>
      <form onSubmit={HandleCreateApplication}>
        <div>
          <label htmlFor="program_name">program name</label>
          <input
            type="text"
            name="program_name"
            id="program_name"
            placeholder="program name"
          />
        </div>
        <div>
          <label htmlFor="university">university</label>
          <input
            type="text"
            name="university"
            id="university"
            placeholder="university"
          />
        </div>
        {error && <p>{error}</p>}
        <button disabled={loading}>
          {loading ? "submitting... " : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ApplicationForm;
