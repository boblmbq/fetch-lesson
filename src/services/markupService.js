import { refs } from "./refs";

export function createMarkupAllProducts(object) {
  return object.products.map(
    ({ title, price, description }) =>
      `<li><h3>${title}</h3> <p>price: ${price}</p> <p>description: ${description}</p></li>`
  );
}

export function renderAllProducts(e) {
  refs.ulProductsEl.insertAdjacentHTML("beforeend", e);
}