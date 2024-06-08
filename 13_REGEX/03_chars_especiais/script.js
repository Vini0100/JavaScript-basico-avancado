const pontoRegex = /./;

console.log(".");
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test("asd"));

const dRegex = /\d/;

console.log("d");
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("asd"));
console.log(dRegex.test("asd"));

const DRegex = /\D/;

console.log("D");
console.log(DRegex.test("asd"));
console.log(DRegex.test(" "));
console.log(DRegex.test("asd"));
console.log(DRegex.test("asd"));

const sRegex = /\s./;

console.log("s");
console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("asd"));
console.log(sRegex.test("asd"));

const wRegex = /\w/;

console.log("w");
console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("asd"));
console.log(wRegex.test("asd"));
