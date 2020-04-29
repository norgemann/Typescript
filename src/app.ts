//Creating Interfaces
interface Pizza {
  name: string;
  sizes: string[];
}

let ljuta: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
  };
}

ljuta = createPizza("Ljuta", ["S", "L"]);
console.log(ljuta);

//Interfaces with Function Types
interface Car {
  name: string;
  sizes: string[];
  getSizes(): string[];
}

function createCar(name: string, sizes: string[]): Car {
  return {
    name,
    sizes,
    getSizes() {
      return this.sizes;
    },
  };
}

let mali: Car = createCar("Mali auto", ["S", "XS"]);
console.log(mali.getSizes());

//Extending Interfaces

interface Sizes {
  sizes: string[];
}

interface Cookie extends Sizes {
  name: string;
  getSizes(): string[];
}

function createCookie(name: string, sizes: string[]): Cookie {
  return {
    name,
    sizes,
    getSizes() {
      return this.sizes;
    },
  };
}

let choco: Cookie = createCookie("Chokomoko", ["S", "XS", "L"]);
console.log(choco.getSizes());

//Interfaces and Optional Properties
interface Sizes {
  sizes: string[];
}

interface House extends Sizes {
  name: string;
  windows?: number;
  getSizes(): string[];
}

function createHouse(name: string, sizes: string[]): House {
  return {
    name,
    sizes,
    getSizes() {
      return this.sizes;
    },
  };
}

let house: House = createHouse("nice house", ["L"]);
house.windows = 5;
console.log(house.getSizes(), house.windows);

//Interfaces with Index Signatures

interface PC extends Sizes {
  name: string;
  OS?: number;
  getSizes(): string[];
  [key: number]: string;
  [key: string]: any;
}

function createPC(name: string, sizes: string[]): PC {
  return {
    name,
    sizes,
    getSizes() {
      return this.sizes;
    },
  };
}

let pc: PC = createPC("laptop", ["M"]);
pc.OS = 7;
pc[1] = "8";
pc["a"] = true;
console.log(pc);
