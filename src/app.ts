//no default parameter
// function multiply(a: number,b: number){
//     return a*b;
// }

//with default parameter
// function multiply(a: number, b = 10) {
//   return a * b;
// }

//override
function multiply(a: number, b = 10) {
  return a * b;
}

console.log(multiply(2, 20));
