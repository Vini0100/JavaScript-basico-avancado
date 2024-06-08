function checarNumero(value) {
    let number = Number(value);
    if (Number.isNaN(number)) {
        console.log("Por favor, passe só numeros para o programa");
    } else {
        console.log("Numero recebido!");
    }
}