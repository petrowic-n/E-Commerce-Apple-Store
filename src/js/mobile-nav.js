"use strict";

const mobileNav = () => {
  const closeMenuBtn = document.getElementById("close-menu");
  const openMenuBtn = document.getElementById("open-menu");
  const mobileNavContainer = document.getElementById("mobile-nav");
  const mobileLinks = document.querySelectorAll("#mobile-nav-link");

  openMenuBtn.addEventListener("click", () => {
    mobileNavContainer.classList.remove("translate-x-full");
  });

  closeMenuBtn.addEventListener("click", () => {
    mobileNavContainer.classList.add("translate-x-full");
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      mobileNavContainer.classList.remove("translate-x-full");
    });
  });
};

export default mobileNav;
