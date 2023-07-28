let isDone = false;
let decimal = 6;
let float = 3.14;
let hex = 0xf00d;
let binary = 0b1010;
let octal;
let color = 'blue';
let empty = null;
let notParam = undefined;
const num = 10;
const str = 'Some string';
const bool = true;
const empty1 = null;
const notParam1 = undefined;
function foo(num, str, bool, empty) { }
function boo(num = 10, str = 'Some string', bool = true, empty = null) { }
// ##################################
const obj = {};
const obj1 = {};
let user = {
    name: 'Jobs',
    age: 30,
};
let userTom = {
    name: 'Tom',
    age: 30,
};
let userJack = {
    name: 'Jack',
    age: 25,
};
let userBob = {
    name: 'Bob',
    age: 28,
};
// ###########################
let arrAny;
arrAny = [123, 'text', true];
let mixed = [1, 'text'];
let numbersArr1 = [1, 2, 3];
let numbersArr2 = [1, 2, 3];
let users11 = [
    { name: 'Tom', age: 16 },
    { name: 'Cooper', age: 23 },
    { name: 'Coopered', age: 28 },
];
let users = [
    { name: 'Tom', age: 30 },
    { name: 'Jack', age: 25 },
    { name: 'Alice', age: 32 },
];
// ###################
let notSure = 4;
notSure = 'Hello';
notSure = false;
let num1;
// num1 = notSure;
// ###################
function fetchUserData() {
    return 'Tom';
}
let userData = fetchUserData(); // fetchUserData повертає невідомі дані
if (typeof userData === 'string') {
    console.log(userData.toUpperCase()); // OK, тепер ми знаємо, що це рядок
}
// Tuple
let fixed;
fixed = ['Text', 10];
// fixed = ['Text', 10, 10]
let tuple;
tuple = ['Hello', 10, 20];
// ###################### Union type
function combine(param1, param2) {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
//# sourceMappingURL=types.js.map