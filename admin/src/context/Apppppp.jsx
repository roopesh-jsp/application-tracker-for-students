import { createContext, useState, useEffect, useContext } from "react";
const AppContext = createContext({
  backend_url: "",
  token: "",
  setToken: () => {},
});
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export default function AppContextPorovider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  console.log("hai");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
    console.log(localStorage.getItem("token"));
  }, []);

  const value = {
    backend_url: BACKEND_URL,
    token,
    setToken,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
  return useContext(AppContext);
};
