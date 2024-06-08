let pessoa = {
    "nome": "Vinícius",
    "idade": "28",
    "profissao": "programador",
    "hobbies": ["Video game", "Leitura", "Futebol"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);
console.log(pessoaJSON.hobbies[0]);
