// assets/js/main.js

(function () {
  "use strict";

  // Confirm the script loaded (you can remove this later)
  console.log("main.js loaded");

  // Highlight active nav link based on current path
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const navLinks = document.querySelectorAll('nav a[href^="/"]');

  navLinks.forEach((a) => {
    const href = a.getAttribute("href");
    const normalizedHref = href === "/" ? "/" : href.replace(/\/$/, "");

    if (normalizedHref === path) {
      a.setAttribute("aria-current", "page");
      a.classList.add("active");
    }
  });
})();

let lastParticleTime = 0;

document.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastParticleTime < 40) return;
  lastParticleTime = now;

  const particle = document.createElement("div");
  particle.className = "cursor-particle";

  const size = Math.random() * 8 + 6;
  const hueShift = Math.random() * 40 - 20;

  particle.style.width = size + "px";
  particle.style.height = size + "px";

  particle.style.left = e.clientX + "px";
  particle.style.top = e.clientY + "px";

  particle.style.background =
    `radial-gradient(circle,
      hsla(${220 + hueShift}, 90%, 70%, 0.9) 0%,
      hsla(${250 + hueShift}, 90%, 75%, 0.4) 55%,
      rgba(124,140,255,0) 100%)`;

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 900);
});
