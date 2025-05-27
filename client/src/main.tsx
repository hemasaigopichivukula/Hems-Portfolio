import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize AOS library immediately and ensure content shows
const initAOS = () => {
  if (typeof window !== 'undefined' && window.AOS) {
    window.AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 50,
      delay: 0,
    });
  }
};

// Try to initialize immediately
setTimeout(initAOS, 100);

// Also initialize on load as backup
window.addEventListener("load", initAOS);

createRoot(document.getElementById("root")!).render(<App />);
