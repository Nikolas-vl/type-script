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
//!-------------------------------------------------Return Type

// function greet(): string {
//   return 'Hi';
// }
// let results = greet();

// ==================================================

// const greet = (): string => {
//   return 'hi';
// };

// ==================================================

// type User = {
//   id: number;
//   name: string;
// };

// const getUserNames = (users: User[]): string[] => {
//   return users.map(user => user.name);
// };

// const users: User[] = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' },
// ];

// let results = getUserNames(users);

// ==================================================

// function greet() {
//   return 'Hello, world!';
// }

// let result: string = greet();

//!-------------------------------------------------Void

// function logMessage(message: string): void {
//   console.log(message);
// }

// logMessage('Hello, world!');

// ==================================================

// function doSomething(callback: () => void) {
//   callback();
// }

// doSomething(() => {
//   console.log(2);
// });

//!-------------------------------------------------Never

// // Функція, яка завжди викидає помилку
// function throwError(message: string): never {
//   throw new Error(message);
// }

// // Функція з нескінченним циклом
// function infiniteLoop(): never {
//   while (true) {}
// }

//!-------------------------------------------------Function Type

// let myFunc: (firstArg: string, secondArg: number) => void;

// myFunc = (first: string, second: number) => {
//   console.log(`First: ${first}, Second: ${second}`);
// };

// myFunc('Hello', 42); // Висновок: "First: Hello, Second: 42"

// ==================================================

// // Визначення типу функції, який приймає два числа та повертає число
// type CallbackType = (...nums: number[]) => number;

// // Функція, яка приймає два числа та функцію зворотного виклику, застосовує цю функцію до чисел та виводить результат
// function calc(param1: number, param2: number, callback: CallbackType): void {
//   console.log('Result:', callback(param1, param2));
// }

// // Приклади використання calc з різними функціями зворотного виклику
// calc(1, 2, (num1, num2) => num1 + num2);
// calc(10, 5, (num1, num2) => num1 - num2);

// ==================================================

// function handleEvent(event: string, ...params: any[]): void {}

// handleEvent('click', () => {
//   console.log('Clicked!');
// });

// handleEvent('mouseover', (x: number, y: number) => {
//   console.log(`Mouse at ${x}, ${y}`);
// });

//!-------------------------------------------------Custom Types

// type User = {
//   id: number;
//   name: string;
// };

// const user: User = {
//   id: 1,
//   name: 'Alice',
// };

// ==================================================

// type Coordinate = [number, number];

// type UserWithCoords = {
//   id: number;
//   name: string;
//   coords: Coordinate;
// };

// const userWithCoords: UserWithCoords = {
//   id: 1,
//   name: 'Alice',
//   coords: [10, 20],
// };

// ==================================================

// enum AnimalIds {
//   cat = 'cat',
//   dog = 'dog',
//   fish = 'fish',
// }

// type Animal = {
//   [AnimalIds.cat]: {
//     meow: () => string;
//   };
//   [AnimalIds.dog]: {
//     bark: () => string;
//   };
//   [AnimalIds.fish]: {
//     swim: () => undefined;
//   };
// };

//!-------------------------------------------------
//! Опціональні параметри та властивості
//!-------------------------------------------------

// function greet(name?: string) {
//   if (name) {
//     return `Hello, ${name}!`;
//   } else {
//     return `Hello!`;
//   }
// }

// console.log(greet('Alice')); // Виводить: Hello, Alice!
// console.log(greet()); // Виводить: Hello!

// ==================================================

// type Person = {
//   name: string;
//   age?: number; // age є опціональною властивістю
// };

// const alice: Person = { name: 'Alice', age: 27 };
// const bob: Person = { name: 'Bob' }; // age не вказано, це припустимо

// ==================================================

// type Person = {
//   name: string;
//   age?: number;
// };

// let user: Person = { name: 'Alice' };
// user.age = 27;

//!-------------------------------------------------Різниця між Type та Interface

//! ---- '='

// interface Animal {
//   name: string;
// }

// type Animal = {
//   name: string;
// };

// ==================================================Animal2x

// interface Animal {
//   name: string;
// }

// interface Animal {
//   age: number;
// }

// let dog: Animal = {
//   name: 'Fido',
//   age: 5,
// };

// ==================================================extends/&

// interface Dog extends Animal {
//   bark: string;
// }

// type AnimalName = {
//   name: string;
// };

// type AnimalAge = {
//   age: number;
// };

// type Animal = AnimalName & AnimalAge;

// let dog: Animal = {
//   name: 'Fido',
//   age: 5,
// };

// ==================================================

// type Cat = {
//   meow: () => string;
// };

// interface Dog {
//   bark: () => string;
// }

// type DogOrCat = Dog | Cat;
// type DogAndCat = Dog & Cat;

// !==================================================implements

// interface Animal {
//   name: string;
// }

// interface Dog extends Animal {
//   bark: string;
// }

// class MyDog implements Dog {
//   name = 'Fido';
//   bark = 'Woof!';
// }

// // Error: Property 'name' is missing in type 'OtherDog'
// class OtherDog implements Dog {
//   bark = 'Woof!';
// }

// ==================================================

// interface Walkable {
//   walk(): void;
// }

// interface Eatable {
//   eat(): void;
// }

// class Animal implements Walkable, Eatable {
//   walk() {
//     console.log('The animal walks...');
//   }

//   eat() {
//     console.log('The animal eats...');
//   }
// }

// const animal = new Animal();

// ==================================================

// interface AddFunc {
//   (n1: number, n2: number): number;
// }

// let add: AddFunc;

// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

//!-------------------------------------------------Інтерфейси

// interface Person {
//   firstName: string;
//   lastName: string;
//   age?: number; // Необов'язкове поле
// }

// function greet(person: Person) {
//   console.log(`Hi, ${person.firstName} ${person.lastName}`);
// }

// const john: Person = {
//   firstName: 'John',
//   lastName: 'Doe',
// };

// greet(john);

// ==================================================

// interface IPerson {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// let user: IPerson;

// user = {
//   name: 'Anthony',
//   age: 21,
//   greet(phrase) {
//     console.log(phrase + ' ' + this.name);
//   },
// };

// user.greet('Вітання всім, я');

// ==================================================

// type IPerson = {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// };

// let user: IPerson;

// user = {
//   name: 'Anthony',
//   age: 21,
//   greet(phrase) {
//     console.log(phrase + ' ' + this.name);
//   },
// };

// user.greet('Вітання всім, я');

//!-------------------------------------------------Readonly

// interface ITest {
//   readonly name: string;
// }

// const person: ITest = {
//   name: 'Person name',
// };

// person.name = 'Another Name'; // Error: Cannot assign to 'name' because it is a read-only property.

//!-------------------------------------------------Extending Interfaces

// interface IPerson {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// interface IPilot extends IPerson {
//   flyMessage(): void;
// }

// ==================================================

// interface AddFunc {
//   (n1: number, n2: number): number;
// }

// let add: AddFunc;

// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

// ==================================================

// interface IPerson {
//   name?: string;
//   age: number;
// }

// const mango: IPerson = {
//   name: 'mango',
//   age: 2,
// };

// const poly: IPerson = {
//   age: 5,
// };

//!-------------------------------------------------
//!Advanced Types
//!-------------------------------------------------Type Casting/Type Conversion

// let someValue: unknown = 'this is a string';

// let strLength1: number = (<string>someValue).length; //no

// let strLength2: number = (someValue as string).length;

// let strLength3: number = someValue.length;

// ==================================================

// const input = <HTMLInputElement>document.getElementById('inputEmail'); //no
// input.value = 'test@test.ts';

// const input = document.getElementById('inputEmail') as HTMLInputElement;//yes
// input.value = 'test@test.ts';

// ==================================================

// const input = document.getElementById('inputEmail');

// if (input) {
//   (input as HTMLInputElement).value = 'test@test.ts';
// }

//!-------------------------------------------------Index Properties

// type IndexType = {
//   [prop: string]: string;
// };

// ==================================================

// type Person = {
//   name: string;
//   [x: string]: string;
// };

// const user: Person = {
//   name: 'Alex',
//   gender: 'MAN',
//   country: 'Ukraine',
// };

// ==================================================

// type User = {
//   id: string;
//   name: string;
//   email: string;
// };

// type Users = {
//   [id: string]: User;
// };

// let users: Users = {};

// let user: User = {
//   id: '1',
//   name: 'Alex',
//   email: 'alex@example.com',
// };

// users[user.id] = user;

// ==================================================

// type MyType = {
//   [key: string]: number;
// };

// let obj: MyType = {
//   one: 1,
//   two: 2,
//   three: 'three', //error
// };

//!-------------------------------------------------Generics

// let arr: Array<string | number> = [];

// arr = ['str', 10, true];//error bc true

// ==================================================

// const promise: Promise<string> = new Promise(resolve => {
//   setInterval(() => {
//     resolve('Done!');
//   }, 1000);
// });

// promise.then(data => {
//   console.log(data);
// });

// ==================================================//!Generic function/method

// function identity<T>(arg: T): T {
//   return arg;
// }

// let output1 = identity<string>('myString');
// let output2 = identity<number>(100);
// //or
// let output11 = identity("myString");
// let output22 = identity(100);

// ==================================================

// function firstElement<T>(arr: T[]): T {
//   return arr[0];
// }

// let numbers = [1, 2, 3, 4, 5];
// let firstNum = firstElement(numbers);

// let strings = ['a', 'b', 'c', 'd'];
// let firstStr = firstElement(strings);

// ==================================================

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const merged = merge({ name: 'Alisa' }, { age: 28 });

// merged.name;

// ==================================================

// type Person = {
//   name: string;
// };

// type AdditionFields = {
//   age: number;
// };

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const merged = merge<Person, AdditionFields>({ name: 'Alisa' }, { age: 28 });

// merged.name;

//!-------------------------------------------------Extends

// type Length = {
//   length: number;
// };

// function getLength<T extends Length>(str: T) {
//   return str.length;
// }

// getLength('text');
// getLength([1, 2, 3]);
// getLength(100); // Errro: Argument of type 'number' is not assignable to parameter of type 'Length'

// ==================================================

// function arrayLogger<T extends Array<string>>(array: T): void {
//   array.forEach(item => {
//     console.log(item);
//   });
// }

// arrayLogger(['Hello', 'World']); // Ok
// arrayLogger([1, 2, 3]); // Error

//!-------------------------------------------------keyof

// type Person = {
//   name: string;
//   age: number;
//   location: string;
// };

// type PersonKeys = keyof Person; // 'name' | 'age' | 'location'

// function getPersonInfo(person: Person, key: PersonKeys) {
//   return person[key];
// }

// const john: Person = {
//   name: 'John',
//   age: 25,
//   location: 'NY',
// };

// console.log(getPersonInfo(john, 'age')); // 25
// console.log(getPersonInfo(john, 'name')); // 'John'
// console.log(getPersonInfo(john, 'job')); // Error: Argument of type '"job"' is not assignable to parameter of type 'PersonKeys'.

// ==================================================

// function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
//   return obj[key];
// }
// extractValue({ name: 'John' }, 'name');

//!-------------------------------------------------Generic Classes

// class DataStorage<T> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem('Hello');
// textStorage.addItem('World');
// console.log(textStorage.getItems()); // ['Hello', 'World']
// textStorage.addItem(1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

// const numberStorage = new DataStorage<number>();
// numberStorage.addItem(1);
// numberStorage.addItem(2);
// console.log(numberStorage.getItems()); // [1, 2]
// numberStorage.addItem('TEXT'); // Error: Argument of type 'number' is not assignable to parameter of type 'number'

// ==================================================

// class KeyValuePair<TKey, TValue> {
//   constructor(private key: TKey, private value: TValue) {}

//   getKey(): TKey {
//     return this.key;
//   }

//   getValue(): TValue {
//     return this.value;
//   }
// }

// const pair1 = new KeyValuePair('name', 'Alice');
// console.log(pair1.getKey()); // 'name'
// console.log(pair1.getValue()); // 'Alice'

// const pair2 = new KeyValuePair(1, true);
// console.log(pair2.getKey()); // 1
// console.log(pair2.getValue()); // true

//!-------------------------------------------------
//! Utility Types
//!-------------------------------------------------Partial<T>

// type User = {
//   id: number;
//   name: string;
//   email: string;
//   registered: boolean;
// };

// function createUser(data: Partial<User>): User {
//   // Деякі значення за замовчуванням:
//   const defaultUser: User = {
//     id: Date.now(),
//     name: '',
//     email: '',
//     registered: false,
//   };
//   // З'єднуємо дані користувача та значення за замовчуванням
//   return { ...defaultUser, ...data };
// }

// const newUser = createUser({ name: ' alice', email: 'alice@example.com' });

// console.log(newUser);

//!-------------------------------------------------Readonly<T>

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// let alice: User = {
//   id: 1,
//   name: 'Alice',
//   email: 'alice@example.com',
// };

// alice.name = 'Bob'; // OK

// let aliceReadonly: Readonly<User> = {
//   id: 1,
//   name: 'Alice',
//   email: 'alice@example.com',
// };

// user.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property.

// ==================================================

// const arr: Readonly<string[]> = ['One', 'Two', 'Three'];
// arr.push('Four'); // Error: Property 'push' does not exist on type 'readonly string[]'.

//!-------------------------------------------------Pick<T, K>

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// type UserBasicInfo = Pick<User, 'id' | 'name'>;

// let userBasicInfo: UserBasicInfo = {
//   id: 1,
//   name: 'John Doe',
//   email: 'john@example.com', // Error: Property 'email' does not exist on type 'UserBasicInfo'};
// };

// ==================================================

// type BaseEmployee = {
//   id: number;
//   firstName: string;
//   lastName: string;
//   position: string;
//   department: string;
//   startDate: Date;
//   // ...і багато інших полів
// };

// type BaseProject = {
//   id: number;
//   name: string;
//   budget: number;
//   deadline: Date;
//   // ...і багато інших полів
// };

// type Assignment = {
//   employee: Pick<BaseEmployee, 'id' | 'firstName' | 'lastName'>;
//   projects: Pick<BaseProject, 'id' | 'name' | 'deadline'>[];
//   shouldNotifyEmployee?: boolean;
// };

//!-------------------------------------------------Record<K, T>

// type Weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
// type Weekend = 'Sat' | 'Sun';

// type Day = Weekdays | Weekend;
// type DayTranslations = Record<Day, string>;

// const translations: DayTranslations = {
//   Mon: 'Понеділок',
//   Tue: 'Вівторок',
//   Wed: 'Середа',
//   Thu: 'Четверг',
//   Fri: "П'ятниця",
//   Sat: 'Субота',
//   Sun: 'Неділя',
// };

// ==================================================

// enum UserRoles {
//   admin = 'admin',
//   manager = 'manager',
//   employee = 'employee',
// }

// type UserRolesStatuses = Record<UserRoles, boolean>;

// const userRoleStatuses: UserRolesStatuses = {
//   [UserRoles.admin]: true,
//   [UserRoles.manager]: false,
//   [UserRoles.employee]: true,
// };

// ==================================================

// type InitialFormType = {
//   name: string;
//   email: string;
//   password: string;
// };

// export type Form = InitialFormType & {
//   errors: Partial<Record<keyof InitialFormType, [string]>>;
// };

//!-------------------------------------------------Omit<T, K>
// Це Pick, але навпаки.
// type Person = {
//   name: string;
//   age: number;
//   location: string;
// };
// type PersonWithoutLocation = Omit<Person, 'location'>;

//!-------------------------------------------------ReturnType<T>

// function greeting() {
//   return 'Hello, world!';
// }

// type Greeting = ReturnType<typeof greeting>; // 'string'

// function multiply(a: number, b: number) {
//   return a * b;
// }

// type MultiplyResult = ReturnType<typeof multiply>; // 'number'

// ==================================================

// type Callback = (...args: unknown[]) => unknown;

// function createLoggedFunction<T extends Callback>(func: T) {
//   let funcRef = func;

//   const loggedFunction = (...args: Parameters<T>) => {
//     console.log(`Function ${func.name} was called with arguments:`, args);
//     const result = funcRef(...args) as ReturnType<T>;
//     return result;
//   };

//   return loggedFunction;
// }

//!-------------------------------------------------Parameters<T>

// type MyFunctionType = (a: string, b: number, c: boolean) => void;

// type MyParametersType = Parameters<MyFunctionType>;
// // Результат: [string, number, boolean]

//!-------------------------------------------------NonNullable<T>

// type SomeType = string | null | undefined;

// // NonNullableType буде 'string'
// type NonNullableType = NonNullable<SomeType>;

// ==================================================
//!-------------------------------------------------
//!-------------------------------------------------
//!-------------------------------------------------

// type userProfile = {
//   userName: string;
//   age: number;
//   isActive: boolean;
// };

// function displayUserProfile(user: userProfile) {
//   return `User name is ${user.userName} his is ${user.age} years old and hi is ${user.isActive}`;
// }

// const user = {
//   userName: 'Bob',
//   age: 12,
//   isActive: true,
// };

// console.log(displayUserProfile(user));

// function logName(name: string) {
//   return `${name}`;
// }

// ==================================================

// function calcTotal(arr: number[]) {
//   return arr.reduce((acc, el) => acc + el, 0);
// }

// const numbersArray = [10, 20, 30, 40];
// console.log(calcTotal(numbersArray));

// ==================================================

// type User = {
//   name: string;
//   age: number;
// };
// //best
// function calcTotal2(arr: User[]) {
//   return;
// }
// //or
// function calcTotal1(arr: object[]) {
//   return;
// }
// //or
// function calcTotal3(arr: { name: string; age: number }[]) {
//   return;
// }

// const users = [
//   { name: 'Bob', age: 12 },
//   { name: 'Bob', age: 22 },
//   { name: 'Bob', age: 32 },
// ];

// ==================================================
//! unknown

// function safelyParseJson(jsonString: string) {
//   try {
//     const result: unknown = JSON.parse(jsonString);
//     if (typeof result === 'object' && result !== null) {
//       return result; // Type is verified as an object (non-null)
//     }
//   } catch (error) {
//     console.error('Failed to parse JSON:', error);
//   }
//   return null; // Return null if parsing fails or type is incorrect
// }

//! any

// function logDetails(value: any) {
//   console.log(`Value: ${value}, Type of value: ${typeof value}`);
// }

//! enum

// enum VehicleType {
//   Car = 'Audi',
//   Truck = 'Scania',
//   Motorcycle = 'Ducati',
// }

// function getVehicleType(vehicle: VehicleType) {
//   return `The vehicle type is: ${vehicle}.`;
// }

// // Example usage:
// console.log(getVehicleType(VehicleType.Car)); // Output: "The vehicle type is: Audi."
// console.log(getVehicleType(VehicleType.Motorcycle)); // Output: "The vehicle type is: Ducati."

//! Union Types
// function formatInput(input: string | number) {
//     if (typeof input === 'number') {
//         return input.toFixed(2); // Formats the number to two decimal places
//     } else {
//         return input.toUpperCase(); // Converts the string to uppercase
//     }
// }

//! Literal

// function lightShower(color: 'green' | 'yellow' | 'red') {
//   if (color === 'green') {
//     console.log('go');
//   } else if (color === 'yellow') {
//     console.log('ready');
//   } else if (color === 'red') {
//     console.log('stop');
//   }
// }

// lightShower('red');
