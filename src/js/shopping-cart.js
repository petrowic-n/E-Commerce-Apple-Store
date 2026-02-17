const shoppingCart = () => {
  const buyBtn = document.querySelectorAll("#buy-btn");
  const shoppingCartContainer = document.getElementById("shopping-cart");
  const shoppingCartList = document.getElementById("shopping-cart-list");

  buyBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Open the shopping cart
      shoppingCartContainer.classList.remove("translate-x-full");

      // Add item to the list
      const productCard = e.target.closest("#product-card");
      if (!productCard) return;
      addToCart(productCard);
    });
  });

  const addToCart = function (productCard) {
    // products data
    const productImg = productCard.querySelector("img").src;
    const productTitle =
      productCard.querySelector("#product-title").textContent;
    const productPrice =
      productCard.querySelector("#product-price").textContent;

    // double items check
    const cartItems = shoppingCartList.querySelectorAll(".cart-product-title");
    const alreadyInCart = Array.from(cartItems).some(
      (item) => item.textContent.trim() === productTitle.trim(),
    );

    if (alreadyInCart) {
      alert("This item is already in the cart");
      return;
    }

    // creating product card
    const cartProductCard = document.createElement("div");
    cartProductCard.classList.add("#product-card");
    cartProductCard.innerHTML = `
    <div id="product-card">
  <article
          class="product-card-container flex items-center gap-space-xl border-b border-white-200 pt-space-base py-space-base"
        >
          <figure>
            <img
              width="48"
              height="60"
              src="${productImg}"
              alt=""
            />
          </figure>
          <div class="flex flex-col gap-1">
            <h6 class="cart-product-title text-black-50 font-semibold leading-[-1.2px]">
              ${productTitle}
            </h6>
            <div class="flex flex-col gap-1.5">
              <span class="card-product-price text-fs-base text-black-100">${productPrice}</span>
              <div
                class="cart-quantity flex items-center justify-between gap-4 border border-gray-50 rounded-md overflow-hidden"
              >
                <button
                id="decrement-btn"
                  class=" text-fs-2xl font-medium border-r border-gray-50 px-2 py-1 hover:bg-white-200 duration-300 ease-in-out cursor-pointer"
                >
                  -
                </button>
                <span  class="number-quantity text-fs-base text-center font-bold"
                  >1</span
                >
                <button
                id="increment-btn"
                  class="increment-btn text-fs-xl border-l border-gray-50 px-2 py-1 hover:bg-white-200 duration-300 ease-in-out cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article
        </div>
  `;
    shoppingCartList.appendChild(cartProductCard);

    // Product quantity
    const cartQuantityBox = document.querySelector(".cart-quantity");
    cartQuantityBox.addEventListener("click", (e) => {
      const number = cartQuantityBox.querySelector(".number-quantity");
      const productCardContainer = document.querySelector(
        ".product-card-container",
      );

      let quantity = number.textContent;

      if (e.target.id === "decrement-btn") quantity--;

      // removes product
      if (quantity < 1) productCardContainer.remove();

      if (e.target.id === "increment-btn") quantity++;

      number.textContent = quantity;
      updateTotalPrice();
    });
    updateTotalPrice();
  };
};

const updateTotalPrice = () => {
  const cartTotalPrice = document.getElementById("total-price");
  const cardProductPrice = document.querySelector(".card-product-price");
  let total = 0;

  const cartItems = document.querySelectorAll(".product-card-container");
  cartItems.forEach(() => {
    let price = cardProductPrice.textContent.replace("$", "");
    const quantity = document.querySelector(".number-quantity").textContent;
    total += price * quantity;
  });
  cartTotalPrice.textContent = `$${total}`;
};

export default shoppingCart;
