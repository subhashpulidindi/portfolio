import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.addEventListener("mousemove", (e) => {
  const glow = document.getElementById("cursorGlow");
  if (glow) {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }
});
document.querySelectorAll(".nav-links li").forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    el.style.transform = `
      translate(
        ${(e.clientX - rect.left - rect.width / 2) * 0.2}px,
        ${(e.clientY - rect.top - rect.height / 2) * 0.2}px
      )
    `;
  });

  el.addEventListener("mouseleave", () => {
    el.style.transform = "translate(0,0)";
  });
});
