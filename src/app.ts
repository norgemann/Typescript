const pizzas = [{ name: "Pepperoni", toppings: ["pepperoni"] }];

//not an arrow function
// const mappedPizzas = pizzas.map(function (pizza) {
//   return pizza.name.toUpperCase();
// });

//arrow function
const mappedPizzas = pizzas.map((pizza) => pizza.name.toUpperCase());

console.log(mappedPizzas);

const pizza = {
  name: "Blazing Inferno",
  //   getName: function () {
  //     //console.log(this);
  //     //const that = this;
  //     // setTimeout(() => {
  //     //   console.log(this.name);
  //     // }, 100);
  //   },
  //getName: () => pizza.name,
  getName: function () {
    return this.name;
  },
};

console.log(pizza.getName());
