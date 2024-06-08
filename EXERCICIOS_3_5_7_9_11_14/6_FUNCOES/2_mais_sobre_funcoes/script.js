function multiplicarTresNumeros(x, y, z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,3,4));

const mult = multiplicarTresNumeros(5,7,9);

console.log("O valor de mult é de :" + mult);

function podeDirigir(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        console.log("Pode dirigir");
    } else {
        console.log("Não pode dirigir");
    }
}

console.log(podeDirigir(21, 1));
console.log(podeDirigir(15, 0));
console.log(podeDirigir(21, 1));
console.log(podeDirigir(25, 0));