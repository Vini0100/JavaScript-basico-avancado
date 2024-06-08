const pessoa = {
    maos: 2,
}

const pessoaNova = Object.create(pessoa);

pessoaNova.maos = 1;

console.log(pessoaNova.maos);
console.log(pessoa.maos);

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);