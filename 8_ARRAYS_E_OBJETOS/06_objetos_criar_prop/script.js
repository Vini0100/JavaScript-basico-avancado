const pessoa = {
    nome: "Vinicius",
    idade: 29,
    profissão: "Programador Front"
}

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa)

pessoa.casado = false;

console.log(pessoa);

pessoa.nome = "teste";
console.log(pessoa.nome);