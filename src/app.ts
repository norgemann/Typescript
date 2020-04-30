//Setters and Getters (Accessors)

class Sizes {
  constructor(public sizes: string[]) {}

  get availableSizes() {
    return this.sizes;
  }

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }
}

class Pizza extends Sizes {
  constructor(
    readonly name: string,
    private topping: string[],
    public sizes: string[]
  ) {
    super(sizes);
  }

  addTopping(topping: string) {
    this.topping.push(topping);
  }
}

let pizza = new Pizza("Kapricoza", ["pepperoni", "mushrooms"], ["L", "XL"]);
pizza.addTopping("kecap");
console.log(pizza);
