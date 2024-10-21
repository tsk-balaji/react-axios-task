// eslint-disable-next-line no-unused-vars
import React from "react"; // Ensure React is imported
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
