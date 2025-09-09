import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ModeProvider from "./contexts/ModeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </StrictMode>,
);
