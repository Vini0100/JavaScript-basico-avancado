const reg1 = new RegExp('bola');

console.log(reg1.test("Tem bola?")); //True
console.log(reg1.test("Não tem")); //False

const reg2 = /bola/;

let text = "Tem bola na cesta";

console.log(reg2.test("Tem bola?")); //True
console.log(reg2.test("Não tem")); //False
console.log(reg2.test(reg2));

console.log(/quadrado/.test("Tem um quadrado aqui?")); //True
console.log(/quadrado/.test("312323123123123quadrado132312312313  ")); //True
