//The “Any” Type

let coupon: any;

coupon = 25;
coupon = "25";
coupon = true;

//Implicit vs Explicit Types

let implicitCoupon = "pizza25";
let explicitCoupon: string = "pizza25";

let explicitCoupon2: number;
explicitCoupon2 = 6;

//Void Type

let selectedTopping: string = "pepperoni";

function selectTopping(topping: string): void {
  selectedTopping = topping;
}

selectTopping("bacon");

console.log(selectedTopping);

//Never Type

// function orderError(error: string): never {
//   throw new Error(error);
//   //never going to return a value
// }

// orderError("Something went wrong");

//Null, Undefined, Strict Null checks

let word: string | null = "marko";
let word2: string | null | undefined = "marko";

function changeToNull(): void {
  word = null;
  word2 = undefined;
}
console.log(`${word} and ${word2}`);

changeToNull();

console.log(`${word} and ${word2}`);

//Union and Literal Types

let size: string = "";

function pickSize(sizeP: "S" | "M" | "L"): void {
  size = sizeP;
}

pickSize("S");

console.log(size);

//Function Types

//let sumFunc: Function;
let sumFunc: (price: number, quantity: number) => number; //functions signature (declaration)

sumFunc = (p, q) => p * q; // initialisation

//let sumFunc: (price: number, quantity: number) => number = (p, q) => p * q;

console.log(sumFunc(10, 5));

//Functions and Optional and Default Arguments

let sumFunc2: (price: number, quantity?: number) => number; //functions signature (declaration)
sumFunc2 = (p, q = 1) => p * q; // initialisation
// sumFunc = (p, q) => {
//   if (q) {
//     return p * q;
//   } else {
//     return p;
//   }
// }; initialisation

console.log(sumFunc2(10));
console.log(sumFunc2(10, 5));

//Object Types

let car: { brand: string; doors: number; getBrand(): string };

car = {
  brand: "BMW",
  doors: 4,
  getBrand() {
    return car.brand;
  },
};

console.log(car.getBrand());

//Array Types and Generics

let numbers: number[];

numbers = [1, 2, 3];

let words: string[];

words = ["fox", "dog", "cat"];

let brands: Array<string>;

brands = ["BMW", "Audi", "Reno"];

//Tuple Types for Arrays
//union
let everything: (boolean | number | string)[] = [
  true,
  5,
  "",
  "k",
  55,
  5,
  false,
];

//tuple type
let everythingRestrict: [boolean, number, string] = [true, 8, ""];
