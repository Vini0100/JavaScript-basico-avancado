const cep = /\d{5}-\d{3}/;

console.log(cep.test("88888-784")); // True
console.log(cep.test("dasdas")); // False
console.log(cep.test("888-784")); // False

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(55)98777-8058")); // True
console.log(tel.test("557-8058")); // False
console.log(tel.test("5598777-8058")); // False
