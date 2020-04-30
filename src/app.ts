//before Class
// function Pizza(name: string) {
//   this.name = name;
//   this.topping = "";
// }

// Pizza.prototype.addTopping = function addTopping(topping: string) {
//   this.topping = topping;
// };

// let pizza = new Pizza("Kapricoza");
// pizza.addTopping("kecap");

// console.log(pizza);

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

//Public and Private Members
class PublicSuperPizza {
  constructor(private name: string, private topping: string[]) {}

  addTopping(topping: string) {
    this.topping.push(topping);
  }
}

let publicSuperPizza = new PublicSuperPizza("Kapricoza", [
  "pepperoni",
  "mushrooms",
]);
publicSuperPizza.addTopping("kecap");

console.log(publicSuperPizza);

//Readonly Members
class ReadonlyPizza {
  constructor(readonly name: string, private topping: string[]) {}

  addTopping(topping: string) {
    this.topping.push(topping);
  }
}

let readonlyPizza = new ReadonlyPizza("Kapricoza", [
  "pepperoni",
  "mushrooms",
]);
readonlyPizza.addTopping("kecap");

//readonlyPizza.name = "Capricioza" // error Cannot assign to 'name' because it is a read-only property.!!!

console.log(readonlyPizza);
