const pizzas: number = 2;

function getDiscount(productNum: number): boolean {
  return productNum >= 3;
}

if (getDiscount(pizzas)) {
  console.log(`You get a discount`);
} else {
  console.log(`Order ${3 - pizzas} more products to get a discount`);
}
