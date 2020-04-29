const pizzaCost: number = 10;
const toppingsNumber: number = 10;

function pizzaPrice(cost: number, toppings: number) {
  //return cost + (1.5 * toppings).toString(); error
  return cost + 1.5 * toppings;
}

const price: number = pizzaPrice(pizzaCost, toppingsNumber);

console.log(`The price of your pizza is ${price}`);
