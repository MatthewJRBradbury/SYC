"use strict";
import "./style.css";

// For click event and also reference for outer div tag
const toggleMenu = document.querySelector("#mobile-nav-toggle");
const mobileMenuScreen = document.querySelector("#mobile-nav-menu");
const lastLink = mobileMenuScreen.querySelector("nav div a:last-of-type");
const body = document.body;

toggleMenu.onclick = () => {
  toggleMobileMenu();
};

const toggleMobileMenu = () => {
  toggleMenu.setAttribute(
    "aria-expanded",
    toggleMenu.getAttribute("aria-expanded") === "true" ? "false" : "true",
  );
  mobileMenuScreen.classList.toggle("hidden");
  body.classList.toggle("fixed");
};

mobileMenuScreen.addEventListener("keydown", (event) => {
  if (
    ((event.key === "Tab" && !event.shiftKey) ||
      event.key === "ArrowDown" ||
      event.key === "ArrowUp") &&
    document.activeElement === lastLink
  ) {
    event.preventDefault();
    toggleMenu.focus();
  }
  if (event.key === "Escape") {
    toggleMobileMenu();
    
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const highQualityImage = document.getElementById("high-quality-hero-img");

  if (highQualityImage) {
    // Check if high-quality image has already loaded
    if (!highQualityImage.complete) {
      highQualityImage.classList.add("opacity-0");
      highQualityImage.onload = function () {
        // Hide placeholder after transition
        setTimeout(() => {
          highQualityImage.classList.remove("opacity-0");
        }, 300);
      };

      highQualityImage.onerror = function () {
        console.error("High-quality image failed to load");
      };
    } else {
      // If already loaded, show immediately
      highQualityImage.classList.remove("opacity-0");
    }
  }
});
