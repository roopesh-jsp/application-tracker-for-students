import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
const AppContext = createContext({
  backend_url: "",
  token: "",
  setToken: () => {},
  user: {},
  setUser: () => {},
});
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export default function AppContextPorovider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  async function getUser() {
    try {
      const { data } = await axios.get(BACKEND_URL + "/api/get-user", {
        headers: { Authorization: `Barear ${token}` },
      });
      if (data.success) {
        setUser(data.user);
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUser();
    }
  }, []);
  const value = {
    backend_url: BACKEND_URL,
    token,
    setToken,
    user,
    setUser,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
  return useContext(AppContext);
};
