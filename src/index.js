import "./styles/normalize.css";
import "./styles/index.css";
import { getAllProducts } from "./requests/products";
import {
  createMarkupAllProducts,
  renderAllProducts,
} from "./services/markupService";

getAllProducts()
  .then(createMarkupAllProducts)
  .then(renderAllProducts)
  .catch(console.log);
