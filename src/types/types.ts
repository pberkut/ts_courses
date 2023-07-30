let isDone: boolean = false;

let decimal: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number;

let color: string = 'blue';

let empty: null = null;
let notParam: undefined = undefined;

const num = 10;
const str = 'Some string';
const bool = true;
const empty1 = null;
const notParam1 = undefined;

function foo(num: number, str: string, bool: boolean, empty: null) {}
function boo(num = 10, str = 'Some string', bool = true, empty = null) {}

// ##################################

const obj: object = {};
const obj1: {} = {};

let user: { name: string; age: number } = {
  name: 'Jobs',
  age: 30,
};

// #######################################

type User = {
  name: string;
  age: number;
};

let userTom: User = {
  name: 'Tom',
  age: 30,
};

let userJack: User = {
  name: 'Jack',
  age: 25,
};

// ###################

interface UserObj {
  name: string;
  age: number;
}

let userBob: UserObj = {
  name: 'Bob',
  age: 28,
};

// ###########################

let arrAny: any[];
arrAny = [123, 'text', true];

let mixed: (number | string)[] = [1, 'text'];

let numbersArr1: number[] = [1, 2, 3];
let numbersArr2: Array<number> = [1, 2, 3];

let users11: {
  name: string;
  age: number;
}[] = [
  { name: 'Tom', age: 16 },
  { name: 'Cooper', age: 23 },
  { name: 'Coopered', age: 28 },
];

type User1 = {
  name: string;
  age: number;
};

let users: User1[] = [
  { name: 'Tom', age: 30 },
  { name: 'Jack', age: 25 },
  { name: 'Alice', age: 32 },
];

// ###################

let notSure: unknown = 4;
notSure = 'Hello';
notSure = false;

let num1: number;

// num1 = notSure;

// ###################

function fetchUserData() {
  return 'Tom';
}

let userData: unknown = fetchUserData(); // fetchUserData повертає невідомі дані
if (typeof userData === 'string') {
  console.log(userData.toUpperCase()); // OK, тепер ми знаємо, що це рядок
}

// Tuple

let fixed: [string, number];

fixed = ['Text', 10];

// fixed = ['Text', 10, 10]

let tuple: [string, ...number[]];
tuple = ['Hello', 10, 20];

// ###################### Union type

function combine(param1: number | string, param2: number | string) {
  if (typeof param1 === 'number' && typeof param2 === 'number') {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

// ##############