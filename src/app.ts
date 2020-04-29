//concat arrays
const toppings = ["pepperoni", "chilli"];

const newToppings = ["mushrooms", "basil"];

//const allToppings = toppings.concat(newToppings);

//swap th order
//const allToppingsSwaped = [newToppings.concat(toppings)];

//use the attay spread operator
const allToppings = [...toppings, ...newToppings];
//swap th order
//const allToppings = [...newToppings, ...toppings ];
console.log(allToppings);
