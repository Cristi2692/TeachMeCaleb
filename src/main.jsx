import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App.jsx";
import "./index.css";
import { theme } from "./theme.js";
import { typeScale } from "./themeFonts.js";

const customTheme = createTheme({
  ...theme,
  typography: typeScale.typography,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
