const reg1 = /[12345]/;

console.log(reg1.test("12"));
console.log(reg1.test("2"));
console.log(reg1.test("6"));
console.log(reg1.test("62"));

const reg2 = /[0-9]/;

console.log(reg2.test("dsadsa3123123123"));
console.log(reg2.test("dadasdsdadwqrwqr"));