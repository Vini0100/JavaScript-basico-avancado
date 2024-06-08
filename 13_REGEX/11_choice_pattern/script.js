const reg = /\w+: (Vinicius|Joao|Geisy)/; //Nome: edsdads

console.log(reg.test("Nome: Vinicius")) //True
console.log(reg.test("Name: Joao")) //True
console.log(reg.test("Nome: Maria")) //False