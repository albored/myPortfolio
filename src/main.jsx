import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import LanguageContextProvider from "./context/languageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LanguageContextProvider>
);
