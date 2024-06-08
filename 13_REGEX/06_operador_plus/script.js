const umOuMaisNumeros = /\d+/

console.log(umOuMaisNumeros.test("123")); // True
console.log(umOuMaisNumeros.test("")); // False
console.log(umOuMaisNumeros.test("dasdsa")); // False
console.log(umOuMaisNumeros.test("1")); // True
console.log(umOuMaisNumeros.test("asds123")); // True