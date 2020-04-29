//before Class
function Pizza(name: string) {
  this.name = name;
  this.topping = "";
}

Pizza.prototype.addTopping = function addTopping(topping: string) {
  this.topping = topping;
};

let pizza = new Pizza("Kapricoza");
pizza.addTopping("kecap");

console.log(pizza);

//Class
class SuperPizza {
  name: string;
  topping: string;
  constructor(name: string) {
    this.name = name;
    this.topping = "";
  }

  addTopping(topping: string) {
    this.topping = topping;
  }
}

let superPizza = new SuperPizza("Kapricoza");
superPizza.addTopping("kecap");

console.log(superPizza);
