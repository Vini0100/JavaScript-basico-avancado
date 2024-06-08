const onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2
}

console.log(onibus);

onibus.janelas = 20;
delete onibus.rodas;

console.log(onibus.janelas);
console.log(onibus.rodas);