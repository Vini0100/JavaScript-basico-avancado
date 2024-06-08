const padrao = /abacax?i/;

console.log(padrao.test("abacaxi")); //True
console.log(padrao.test("abacai")); //True
console.log(padrao.test("abacali")); //True

const padrao2 = /\d+\w?/;

console.log(padrao2.test("132")); //True
console.log(padrao2.test("123a")); //True
console.log(padrao2.test("123 ")); //True