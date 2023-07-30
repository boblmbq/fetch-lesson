import "./styles/normalize.css";
import "./styles/index.css";
import { getAllProducts } from "./requests/products";
import {
  createMarkupAllProducts,
  renderAllProducts,
} from "./services/markupService";
import { refs } from "./services/refs";
import { handleSubmitForm } from "./js/handleSubmitForm";
import { handelCreateFormSubmit } from "./js/handelCreateFormSubmit";

// getAllProducts()
//   .then(createMarkupAllProducts)
//   .then(renderAllProducts)
//   .catch(console.log);

refs.formProducts.addEventListener("submit", handleSubmitForm);
refs.addProductForm.addEventListener("submit", handelCreateFormSubmit);
