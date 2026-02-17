const mobileNav = () => {
  const closeMenuBtn = document.querySelectorAll("#close-menu");
  const openMenuBtn = document.getElementById("open-menu");
  const mobileNavContainer = document.getElementById("mobile-nav");
  const mobileLinks = document.querySelectorAll("#mobile-nav-link");
  const shoppBagBtn = document.getElementById("shop-bag");
  const shoppingCartContainer = document.getElementById("shopping-cart");
  const checkoutPage = document.getElementById("checkout-page");
  
  

  const removeContainer = function (container) {
    container.classList.add("translate-x-full");
  };

  const showContainer = function (container) {
    container.classList.remove("translate-x-full");
  };

  openMenuBtn.addEventListener("click", () =>
    showContainer(mobileNavContainer),
  );

  shoppBagBtn.addEventListener("click", () =>
    showContainer(shoppingCartContainer),
  );
 

  closeMenuBtn.forEach((icon) => {
    icon.addEventListener("click", () => {
      removeContainer(mobileNavContainer);
      removeContainer(shoppingCartContainer);
      checkoutPage.classList.add("hidden");
    });
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNavContainer.classList.add("translate-x-full");
    });
  });
};

export default mobileNav;
