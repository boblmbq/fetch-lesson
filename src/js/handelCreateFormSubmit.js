import { addProduct } from "../requests/products";
import {
  createMarkupProduct,
  renderNewProduct,
} from "../services/markupService";
import { createNewProd } from "./createNewProd";

export function handelCreateFormSubmit(e) {
  e.preventDefault();
  const newProduct = createNewProd(e);
  addProduct(newProduct).then(createMarkupProduct).then(renderNewProduct);
}
