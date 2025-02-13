import { createContext, useState, useEffect, useContext } from "react";
const AppContext = createContext({
  backend_url: "",
  token: "",
  setToken: () => {},
});

export default function AppContextPorovider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);
  const value = {
    backend_url: "",
    token,
    setToken,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
  return useContext(AppContext);
};
