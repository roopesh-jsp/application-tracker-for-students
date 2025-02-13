import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppContextPorovider from "./context/Appcontext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextPorovider>
      <App />
    </AppContextPorovider>
  </StrictMode>
);
