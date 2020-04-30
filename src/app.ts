interface SizesInterface {
  //we can not add sizes property since it is protected(same for private members)
  availableSizes: string[];
}

abstract class Sizes implements SizesInterface {
  constructor(protected sizes: string[]) {}

  get availableSizes() {
    return this.sizes;
  }

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }
}

interface PizzaInterface extends SizesInterface {
  readonly name: string;
  addSize(size: string[]): void;
  addTopping(topping: string): void;
}

class Pizza extends Sizes implements PizzaInterface {
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
