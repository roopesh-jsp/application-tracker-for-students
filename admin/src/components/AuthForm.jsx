import axios from "axios";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/Apppppp";
import { useNavigate } from "react-router-dom";

function AuthForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { token, setToken } = useAppContext();

  const navigate = useNavigate();
  useEffect(() => {
    console.log(token);
    if (token) {
      navigate("/");
    }
  });
  async function handleFormSubmit(e) {
    setLoading(true);
    e.preventDefault();

    const enteredFormData = new FormData(e.target);
    const enteredData = Object.fromEntries(enteredFormData);
    try {
      console.log(enteredData);

      const { data } = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/admin/login",
        enteredData
      );
      if (data.success) {
        localStorage.setItem("atoken", data.token);
        setToken(data.token);
        console.log(token);

        setError("");
        console.log(data);

        navigate("/");
      }
    } catch (error) {
      // Handle errors (both client-side and server-side)
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message); // Server error message
      } else {
        setError("Something went wrong. Please try again."); // Default error message
      }
    } finally {
      setLoading(false); // Stop loading after request finishes
    }
  }
  return (
    <div className="flex flex-col gap-7 p-10 bg-stone-50 shadow-xl rounded-xl w-[40%] min-w-96  mx-auto my-40">
      <h1 className="font-bold text-2xl text-center mt-5">login - admin</h1>
      <form className="flex flex-col gap-4 " onSubmit={handleFormSubmit}>
        <input
          className="px-3 py-2 font-medium border-2 rounded-md "
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          className="px-3 py-2 font-medium border-2 rounded-md "
          type="password"
          name="password"
          placeholder="password"
        />
        {error && (
          <p className="text-center text-red-500  font-bold">{error}</p>
        )}
        <button
          disabled={loading}
          className="bg-blue-400 p-3 cursor-pointer text-white font-xl rounded-lg font-bold shadow"
        >
          login
        </button>
        =
      </form>
    </div>
  );
}

export default AuthForm;
