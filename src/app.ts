const pizza = {
  name: "Pepperoni",
  price: 15,
};

const toppings = ["pepperoni"];

//old
// const order = {
//   pizza: pizza,
//   toppings: toppings,
// };

//new shorhand syntx
const order = {
  pizza,
  toppings,
};

//function with new shorthan syntx
const getOrder = function (pizza: {}, toppings: string[]) {
  return {
    pizza,
    toppings,
  };
};

//console.log(order);
//console.log(getOrder(pizza, toppings));

//func in object
// const pizza = {
//     name: "Pepperoni",
//     price: 15,
//     getName: function () {
//       return this.name;
//     },
//   };

//shorthand syntx when writing func in objects
const pizzaNew = {
  name: "Pepperoni",
  price: 15,
  //   getName() {
  //     return this.name;
  //   },
  getName: () => pizzaNew.name,
};

console.log(pizzaNew.getName());
