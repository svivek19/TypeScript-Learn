// Function Type

// let greet: Function;

// let greet2 = () => {
//   return "Hello";
// };

// Function with Parameter

// let add = (a: number, b: number): number => {
//   return a + b;
// };

// // console.log(add(10, 10));

// let add = (a: number, b: number, c: string | number): number => {
//   if (typeof c === "number") {
//     return a + b + c;
//   }
//   return a + b;
// };

// console.log(add(10, 10, "10"));

// Funtion with optional parameters
// let add = (a: number, b: number, c?: string | number): number => {
//   if (typeof c === "number") {
//     return a + b + c;
//   }
//   return a + b;
// };

// console.log(add(10, 10));

// Funtion with Default value
// let add = (a: number, b: number, c: string | number = 15): number => {
//   if (typeof c === "number") {
//     return a + b + c;
//   }
//   return a + b;
// };

// console.log(add(10, 10));

// Function with Type alias params

// type StrOrNum = string | number;

// let add = (a: number, b: number, c: StrOrNum = 15): number => {
//   if (typeof c === "number") {
//     return a + b + c;
//   }
//   return a + b;
// };

// console.log(add(10, 10));

// type Users = {
//   name: string;
//   age: number;
// };

// let printObj = (user: Users) => {
//   console.log(`name is ${user.name} and age is ${user.age}`);
// };

// printObj({ name: "John", age: 30 });

// rest parameters
// let add = (a: number, b: number, ...c: number[]): number => {
//   console.log(c);
//   let d = c.reduce((x, y) => x + y, 0);
//   return a + b + d;
// };

// console.log(add(10, 10, 32, 54, 65, 67678, 6787, 78789));

//Function signature

// let add: (x: number, y: number, ...z: number[]) => number;

// add = (a: number, b: number, ...c: number[]): number => {
//   let d = c.reduce((x, y) => x + y, 0);
//   return a + b + d;
// };

// console.log(add(10, 10, 32, 54, 65, 67678));
