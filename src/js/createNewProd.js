export function createNewProd(e) {
  const newProduct = {};
  new FormData(e.currentTarget).forEach((value, name) => {
    newProduct[name] = value;
  });
  return newProduct
}


