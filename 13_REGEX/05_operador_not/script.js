const notab = /[^ab]/;

console.log(notab.test("a")); //False
console.log(notab.test("Aqui tem a")); //True

const nottoaz = /[^a-z]/;

console.log(nottoaz.test("123 as")); //True
console.log(nottoaz.test("dsadsadassffsdgasfgsadfb")); //False

const az = /[a-z]/ // Os padrões de negação dão "False" apenas em casos isolado, diferente dos normais

console.log(az.test("dsadasd413241s"))