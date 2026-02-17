import { products } from "./products.js";

const renderProducts = () => {
  const categoryContainer = {
    iphones: document.getElementById("iphones-grid"),
    ipads: document.getElementById("ipad-grid"),
    airpods: document.getElementById("airpods-grid"),
    watches: document.getElementById("watches-grid"),
  };

  Object.keys(categoryContainer).forEach((category) => {
    const container = categoryContainer[category];
    if (!container) return;

    // clear container
    container.innerHTML = "";

    products[category].forEach((product) => {
      const card = `
        <article
        id="product-card"
              class="bg-white rounded-[18px] flex flex-col items-center gap-space-2xl p-space-xl shadow-my-shadow hover:scale-105 duration-300 ease-in-out"
            >
            <div class="flex flex-col items-center gap-2">
                <span class="text-orange-50">${product.status}</span>
                <h3
                id="product-title"
                  class="md:text-fs-3xl text-fs-2xl text-black-50 font-semibold tracking-[-1.2px]"
                >
                  ${product.name}
                </h3>
            </div>

            <figure>
                <img src="public${product.image}" alt="${product.name}" />
            </figure>
            <div class="flex items-center justify-between w-full">
            <div>
            <span class="text-black-200 text-fs-base font-medium">from</span>
                <span id="product-price" class="text-fs-lg text-black-100 font-semibold">
                $${product.price}</span>
            </div>
                <button id="buy-btn" class="primary-btn">Buy</button>
            </div>
        </article>
        `;

      container.insertAdjacentHTML("beforeend", card);
    });
  });
};

export default renderProducts;
