const pizza = {
  name: "Pepperoni",
};

const toppings = ["pepperoni"];

//Object.assign
//const order = Object.assign({}, pizza, { toppings });

//Object Spread Operator
const order = {
  ...pizza,
  toppings,
};

console.log(order);
