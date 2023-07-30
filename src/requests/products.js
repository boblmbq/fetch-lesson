import { instance } from "../services/api";

export function getAllProducts() {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
}

export function getProductById(id) {
  return instance.get(`/products/${id}`).then(resp => resp.data);
}