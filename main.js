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
