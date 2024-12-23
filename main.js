"use strict";
import "./style.css";

// For click event and also reference for outer div tag
const toggleMenu = document.querySelector("#mobile-nav-toggle");
const mobileMenuScreen = document.querySelector("#mobile-nav-menu");
const body = document.body;

toggleMenu.onclick = () => {
  toggleMenu.classList.toggle("hamburger-toggle");
  mobileMenuScreen.classList.toggle("hidden");
  body.classList.toggle("fixed");
};

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
