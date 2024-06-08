function saudacao(nome) {
    if (typeof nome != 'string') {
        throw new Error("O parâmetro precisa ser uma string");
    } else {
        console.log(`Saudações ${nome}`);
    }
}

saudacao("Vinicius");
saudacao(5);

console.log("Teste");