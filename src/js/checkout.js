const checkout = () => {
  const checkoutBtn = document.getElementById("checkout-btn");
  const checkoutPage = document.getElementById("checkout-page");
  const shoppingCartContainer = document.getElementById("shopping-cart");
  const cartTotalPrice = document.getElementById("total-price");
  const checkoutTotal = document.getElementById("checkout-total");

  checkoutBtn.addEventListener("click", () => {
    checkoutPage.classList.remove("hidden");
    shoppingCartContainer.classList.add("translate-x-full");

    checkoutTotal.textContent = cartTotalPrice.textContent;
  });
};

export default checkout;
