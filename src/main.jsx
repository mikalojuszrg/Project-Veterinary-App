import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DonationProvider } from "./contexts/DonationContext";
import { ThemeProvider } from "./contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <DonationProvider>
          <App />
        </DonationProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
