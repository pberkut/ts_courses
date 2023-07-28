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
