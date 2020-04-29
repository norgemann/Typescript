const pizzas: number = 1;

function getDiscount(productNum: number): boolean {
  return productNum >= 3;
}

function diff(productNum: number): boolean {
  const diff = 3 - productNum;
  return diff === 1;
}

if (getDiscount(pizzas)) {
  console.log(`You get a discount`);
} else {
  console.log(
    `Order ${3 - pizzas} more product${
      diff(pizzas) ? "" : "s"
    } to get a discount`
  );
}
