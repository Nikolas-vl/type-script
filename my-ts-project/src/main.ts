// function add(num1: number, num2: number) {
//   return num1 + num2;
// }
// console.log(add(1, 2));

//!------------------------------------------------

// function foo(num: number, str: string, bool: boolean, empty: null) {}

// function foo (num = 10, str = 'Some string', bool = true, empty = null){}

//!------------------------------------------------

// const obj: object = {}; or const obj: {} = {};

// let user: { name: string; age: number } = {
//   name: 'Tom',
//   age: 30,
// };

// type User = {
//   name: string;
//   age: number;
// };
//or
// interface User {
//   name: string;
//   age: number;
// }

// let user: User = {
//   name: 'Tom',
//   age: 30,
// };

// let userJack: User = {
//   name: 'Jack',
//   age: 25,
// };

//!------------------------------------------------

let arrString: string[];
arrString = ['Text', 'Text'];

let arrNumber: number[] = [1, 2, 3];

let matrix: number[][] = [
  [1, 2],
  [3, 4],
];

let mixed: (number | string)[] = [1, 'two', 'one'];

let names: Array<string> = ['Anna', 'Oleh'];
let flags: Array<boolean> = [true, false, true];
let numbers: Array<number> = [1, 2, 3, 4, 5];

let users1: {
  name: string;
  age: number;
}[] = [
  { name: 'Tom', age: 30 },
  { name: 'Jack', age: 25 },
  { name: 'Alice', age: 32 },
];
//or
type User = {
  name: string;
  age: number;
};

let users2: User[] = [
  { name: 'Tom', age: 30 },
  { name: 'Jack', age: 25 },
  { name: 'Alice', age: 32 },
];

let arrAny: any[];
arrAny = [123, 'TEXT', { name: 'Tom' }, [1, 2, 3]];

//!------------------------------------------------
