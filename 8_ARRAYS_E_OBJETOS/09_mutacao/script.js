let pessoa = {
  nome: "Vini"
}

let pessoa2 = pessoa;

console.log(pessoa == pessoa2);

pessoa2.nome = "Pedro";

console.log(pessoa.nome);