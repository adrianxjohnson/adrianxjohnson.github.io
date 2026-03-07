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

  // limit particle creation
  if (now - lastParticleTime < 40) return;
  lastParticleTime = now;

  const particle = document.createElement("div");
  particle.className = "cursor-particle";

  particle.style.left = e.clientX + "px";
  particle.style.top = e.clientY + "px";

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 900);
});
