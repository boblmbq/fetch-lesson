import { getProductById } from "../requests/products";
import { createMarkupProduct, renderProduct } from "../services/markupService";

export function handleSubmitForm(evt) {
  evt.preventDefault();
  const index = evt.currentTarget.elements.id.value.trim();
    getProductById(index).then(createMarkupProduct).then(renderProduct).catch(err => alert(err.message))
}

