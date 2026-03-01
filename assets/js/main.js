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
