//an abstract class is a class tat you can not initiate, you use it only to extend from!

abstract class Sizes {
  constructor(protected sizes: string[]) {}

  get availableSizes() {
    return this.sizes;
  }

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }
}

//new Sizes(['S'])  ERROR Cannot create an instance of an abstract class.!

class Pizza extends Sizes {
  constructor(
    readonly name: string,
    private topping: string[],
    sizes: string[]
  ) {
    super(sizes);
  }

  addSize(size: string[]) {
    this.sizes = [...this.sizes, ...size];
  }

  addTopping(topping: string) {
    this.topping.push(topping);
  }
}

let pizza = new Pizza("Kapricoza", ["pepperoni", "mushrooms"], ["L", "XL"]);
pizza.addSize(["S", "M"]);
console.log(pizza);
