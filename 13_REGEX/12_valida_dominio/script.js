const validaDominio = /[?\www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com")); // True
console.log(validaDominio.test("www.instagram.com.br")); // True
console.log(validaDominio.test("google.com")); // True
console.log(validaDominio.test("dadasdasd.br")); //False











