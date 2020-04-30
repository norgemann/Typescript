//Setters and Getters (Accessors)

class Sizes {
  constructor(private sizes: string[]) {}

  get availableSizes() {
    return this.sizes;
  }

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }
}

let pizzaSizes = new Sizes(["S", "M", "L"]);

console.log(pizzaSizes.availableSizes);
pizzaSizes.availableSizes = ["S", "M", "L", "XL"];
console.log(pizzaSizes.availableSizes);

// class Pizza {
//   constructor(readonly name: string, private topping: string[]) {}

//   addTopping(topping: string) {
//     this.topping.push(topping);
//   }
// }

// let pizza = new Pizza("Kapricoza", ["pepperoni", "mushrooms"]);
// pizza.addTopping("kecap");
// console.log(pizza);
