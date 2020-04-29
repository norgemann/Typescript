// function sumAll(arrNum: number[]) {
//   return arrNum.reduce((prev: number, next: number) => {
//     return prev + next;
//   });
// }

// console.log(sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//rest parameter
// function sumAll(message: string, ...restParameter: number[]) {
//   console.log(message);
//   return restParameter.reduce((prev: number, next: number) => {
//     return prev + next;
//   });
// }

// console.log(sumAll("Hello", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//with arrow func
const sumAll = (message: string, ...restParameter: number[]) =>
  restParameter.reduce((prev: number, next: number) => prev + next);

console.log(sumAll("Hello", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
