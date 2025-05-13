// function add(num1: number, num2: number) {
//   return num1 + num2;
// }
// console.log(add(1, 2));

//!------------------------------------------------

// function foo(num: number, str: string, bool: boolean, empty: null) {}

// function foo (num = 10, str = 'Some string', bool = true, empty = null){}

//!------------------------------------------------{}

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

//!------------------------------------------------[]

// let arrString: string[];
// arrString = ['Text', 'Text'];

// let arrNumber: number[] = [1, 2, 3];

// let matrix: number[][] = [
//   [1, 2],
//   [3, 4],
// ];

// let mixed: (number | string)[] = [1, 'two', 'one'];

// let names: Array<string> = ['Anna', 'Oleh'];
// let flags: Array<boolean> = [true, false, true];
// let numbers: Array<number> = [1, 2, 3, 4, 5];

// let users1: {
//   name: string;
//   age: number;
// }[] = [
//   { name: 'Tom', age: 30 },
//   { name: 'Jack', age: 25 },
//   { name: 'Alice', age: 32 },
// ];
// //or
// type User = {
//   name: string;
//   age: number;
// };

// let users2: User[] = [
//   { name: 'Tom', age: 30 },
//   { name: 'Jack', age: 25 },
//   { name: 'Alice', age: 32 },
// ];

// let arrAny: any[];
// arrAny = [123, 'TEXT', { name: 'Tom' }, [1, 2, 3]];

//!------------------------------------------------any

// let notSure: any = 4;
// notSure = 'maybe a string instead';
// notSure = false;
// notSure = {};

// let num: number;

// num = notSure;

// let data: any = fetchData();

//!------------------------------------------------unknown

// let notSure: unknown = 4;
// notSure = 'maybe a string instead';
// notSure = false;

// let num: number;

// num = notSure;

// function fetchUserData() {
//   return 'Tom';
// }

// let userData: unknown = fetchUserData(); // fetchUserData повертає невідомі дані
// if (typeof userData === 'string') {
//   console.log(userData); // OK, тепер ми знаємо, що це рядок
// }

//!------------------------------------------------Tuple

// let tupleType: [string, boolean];
// tupleType = ['hi', true];
// tupleType = [true, 'hello']; // Error. Неправильні типи
// tupleType = ['hello', true, true]; // Error. Більше значень ніж у tuple

// let date: [number, number, number];
// date = [7, 11, 2023]; // OK

// let fixed: [string, number];
// fixed = ['Text', 10];
// fixed.push('Add this text');
// console.log(fixed); // компілятор не зміг розібратися і видати помилку.

// let tuple: [string, ...number[]];
// tuple = ['hello', 42, 100, 1];

//!------------------------------------------------Enum (являє собою набір констант)

// enum Role {
//   ADMIN,
//   USER,
// }

// const person = {
//   role: Role.ADMIN,
// };

// if (person.role === Role.ADMIN) {
//   console.log('role ', Role.ADMIN);
// }

// -------------------------------------------

// enum UserStatus {
//   Active = 'ACTIVE',
//   Inactive = 'INACTIVE',
//   Banned = 'BANNED',
// }

// let status: UserStatus = UserStatus.Active;
// console.log(status);

// -------------------------------------------

// enum HttpCodes {
//   OK = 200,
//   BadRequest = 400,
//   Unauthorized = 401,
// }

// function respond(status: HttpCodes) {
//   // handle response
// }

// respond(HttpCodes.OK);

// -------------------------------------------

// const enum HttpCodes {
//   OK = 200,
//   BadRequest = 400,
//   Unauthorized = 401,
// }

// const status = HttpCodes.OK;

// Після компіляції у JavaScript отримаємо наступний код: const status = 200;

// enum Test {           //const no!!!
//   A = 1,
//   B = 2,
// }

// for (let item in Test) {
//   console.log(item);
// }

//!------------------------------------------------Union Type

// let mixedType: string | number | boolean;

// mixedType = 'string'; // OK
// mixedType = 10; // OK
// mixedType = true; // OK
// mixedType = {}; // Error: Type '{}' is not assignable to type 'string | number | boolean'.

// ==================================================

// function combine(param1: number | string, param2: number | string) {
//   if (typeof param1 === 'number' && typeof param2 === 'number') {
//     return param1 + param2;
//   } else {
//     return param1.toString() + param2.toString();
//   }
// }

// ==================================================

// type Dog = {
//   legs: 4;
//   bark: () => void;
// };

// type Fish = {
//   fins: 2;
//   swim: () => void;
// };

// let pet: Dog | Fish;

// function isDog(pet: Dog | Fish): pet is Dog {
//   return 'bark' in pet;
// }

// if (isDog(pet)) {
//   pet.bark();
// } else {
//   pet.swim();
// }

//!------------------------------------------------Intersection Type

// type Employee = {
//   name: string;
//   id: number;
// };

// type Manager = {
//   employees: Employee[];
// };

// type CEO = Employee & Manager;

// const ceo: CEO = {
//   name: 'Alice',
//   id: 1,
//   employees: [
//     {
//       name: 'Bob',
//       id: 2,
//     },
//   ],
// };

//!-------------------------------------------------Literal Type

// type OneOrTwo = 1 | 2;
// let value: OneOrTwo;
// value = 1;
// value = 2;
// value = 3; // Error: Type '3' is not assignable to type 'OneOrTwo'.

// // ==================================================

// type YesOrNo = 'yes' | 'no';
// let answer: YesOrNo;
// answer = 'yes'; // OK
// answer = 'no'; // OK
// answer = 'maybe'; // Error: Type '"maybe"' is not assignable to type 'YesOrNo'.

// ==================================================

// type ButtonSize = 'small' | 'medium' | 'large';

// function getButtonStyle(size: ButtonSize) {
//   switch (size) {
//     case 'small':
//       return { fontSize: '10px', padding: '5px' };
//     case 'medium':
//       return { fontSize: '14px', padding: '10px' };
//     case 'large':
//       return { fontSize: '18px', padding: '15px' };
//     default:
//       return { fontSize: '14px', padding: '10px' };
//   }
// }

// let myButtonStyle = getButtonStyle('medium'); // OK
// myButtonStyle = getButtonStyle('extra-large'); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'ButtonSize'.

//!-------------------------------------------------
//! Типи для методів та функцій
//!-------------------------------------------------

// function greet(): string {
//   return 'Hi';
// }
// let results = greet();

// ==================================================

// const greet = (): string => {
//   return 'hi';
// };

// ==================================================
