// Type Aliases

//Premitive types
type Username = string;
type age = number;
type isAlive = boolean;

let username: Username = "john.doe";

let age: age = 30;

let isAlive: isAlive = true;

// Arrays

type StringArray = string[];
type NumberArray = number[];
type BooleanArray = boolean[];

let stringArray: StringArray = ["a", "b", "c"];

let numberArray: NumberArray = [1, 2, 3];

let booleanArray: BooleanArray = [true, false];

// Objects

type Employees = {
  name: string;
  age: number;
};

let employees: Employees = {
  name: "John",
  age: 30,
};

// Function Types

type Greeter = (name: string) => string;

let greeter: Greeter = (name) => `Hello, ${name}`;

// Union Types

type UnionType = string | number | boolean;

let unionType: UnionType = "hello";

unionType = 10;

unionType = true;

// Tuples

type TupleType = [string, number, boolean];

let tupleType: TupleType = ["hello", 10, true];
