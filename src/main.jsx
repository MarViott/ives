import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Usar optional chaining y nullish coalescing (ES2020)
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

// createRoot es la API moderna de React 18
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Registrar Service Worker para PWA (opcional)
if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // Silently fail if service worker registration fails
    });
  });
}
