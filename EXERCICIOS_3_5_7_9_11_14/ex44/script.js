// const validaIP = /[0-9]{3}[.][0-9]{1}[.][0-9]{1}[.][0-9]{1}/;
const validaIP = /\d{1,3}[.]\d{1,3}[.]\d{1,3}[.]\d{1,3}/;


console.log(validaIP.test("127.0.0.1"));
console.log(validaIP.test("127.10.00.2"));
console.log(validaIP.test("130.91.0.1"));
console.log(validaIP.test("13021.11910.1"));






