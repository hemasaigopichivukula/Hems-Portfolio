import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize AOS library when the window loads
window.addEventListener("load", () => {
  if (window.AOS) {
    window.AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }
});

createRoot(document.getElementById("root")!).render(<App />);
