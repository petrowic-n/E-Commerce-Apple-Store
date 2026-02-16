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
              class="bg-white rounded-[18px] flex flex-col items-center gap-space-2xl p-space-xl"
            >
            <div class="flex flex-col items-center gap-2">
                <span class="text-orange-50">${product.status}</span>
                <h3
                  class="md:text-fs-3xl text-fs-2xl text-black-50 font-semibold tracking-[-1.2px]"
                >
                  ${product.name}
                </h3>
            </div>

            <figure>
                <img src="public${product.image}" alt="${product.name}" />
            </figure>
            <div class="flex items-center justify-between w-full">
                <span class="text-fs-lg text-black-100 font-semibold"><span class="text-black-200 text-fs-base mr-1.5 font-medium">from</span>$${product.price}</span>

                <button class="primary-btn">Buy</button>
            </div>
        </article>
        `;

      container.insertAdjacentHTML("beforeend", card);
    });
  });
};

export default renderProducts;
