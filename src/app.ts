//obj destructuring
// const pizza = {
//   name: "Pepperoni",
// };

// function order({ name }) {
//   console.log(name);
// }

// function order({ name: pizzaName }) {
//   console.log(pizzaName);
// }

//order(pizza);

// function order({ name: pizzaName }) {
//   return {pizzaName};
// }

// const finalOrder = order(pizza);
// console.log(finalOrder);
// const {pizzaName} = order(pizza);
// console.log(pizzaName);

//array destructuring
const toppings = ["pepperoni", "fish", "mushrooms"];

// function showToppings(arr) {
//   console.log(arr);
// }

// function showToppings([first]: any) {
//   console.log(first);
// }
//showToppings(toppings);

function showToppings([first, second, third]: any) {
  return [first, second, third];
}

const [, , third] = showToppings(toppings);
console.log(third);
