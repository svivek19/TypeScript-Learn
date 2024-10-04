// Type Casting

let str6: unknown = "Hello World";

console.log((str6 as string).length);
console.log((<string>str6).length);

let str7: unknown = 30;

console.log((str7 as string).length);

// Dom

let inputEl = document.querySelector("input") as HTMLInputElement;
let inputVal = inputEl.value;
