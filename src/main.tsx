import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { appTheme } from "nakit";
import { ThemeProvider } from "@emotion/react";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={appTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
