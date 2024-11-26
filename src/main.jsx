import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const name = "Sneha Ramalingam";
const first_page = 1997;



createRoot(document.getElementById("root")).render(
  <StrictMode><App /></StrictMode>
);
