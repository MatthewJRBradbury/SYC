import "./style.css";

// For click event and also reference for outer div tag
const toggleMenu = document.querySelector("#mobile-nav-toggle");

toggleMenu.onclick = () => {
  toggleMenu.classList.toggle("hamburger-toggle");
};
