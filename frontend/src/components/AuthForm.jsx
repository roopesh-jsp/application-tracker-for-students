import axios from "axios";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/Appcontext";
import { redirect, useNavigate } from "react-router-dom";

function AuthForm() {
  const [isLogin, setIslogin] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setToken, token } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      return navigate("/");
    }
  }, []);
  async function handleFormSubmit(e) {
    setLoading(true);
    e.preventDefault();
    let endpoint = "/api";
    if (isLogin) {
      endpoint += "/login";
    } else {
      endpoint += "/signup";
    }
    const enteredFormData = new FormData(e.target);
    const enteredData = Object.fromEntries(enteredFormData);
    try {
      console.log(enteredData);

      const { data } = await axios.post(
        import.meta.env.VITE_BACKEND_URL + endpoint,
        enteredData
      );
      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
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
      <h1 className="font-bold text-2xl text-center mt-5">
        {isLogin ? "Login" : "Signup"}
      </h1>
      <form className="flex flex-col gap-4 " onSubmit={handleFormSubmit}>
        {isLogin ? (
          <></>
        ) : (
          <input
            className="px-3 py-2 font-medium border-2 rounded-md"
            type="text"
            name="name"
            placeholder="name"
          />
        )}
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
          {loading ? "submitting ... " : `${isLogin ? "Login" : "Signup"}`}
        </button>
        <p className="font-light text-sm  text-center ">
          {isLogin ? (
            <span>
              did not have a account{" "}
              <button
                type="button"
                onClick={() => setIslogin(false)}
                className="font-bold text-blue-400 underline cursor-pointer"
              >
                signup
              </button>{" "}
            </span>
          ) : (
            <span>
              already had a account{" "}
              <button
                type="button"
                onClick={() => setIslogin(true)}
                className="font-bold text-blue-400 underline cursor-pointer"
              >
                login
              </button>{" "}
            </span>
          )}
        </p>
      </form>
    </div>
  );
}

export default AuthForm;
