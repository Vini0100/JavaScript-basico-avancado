// let num = 1;

// check(num);
// function check(num){
//     let divisoes = 0;
//     for (let i = 1; i <= num; i++){
//         if (num % i == 0) {
//             divisoes++;
//         }
//     }

//     if (divisoes == 2) {
//         console.log(`O numero ${num} é primo!`);
//     } else {
//         console.log(`O numero ${num} não é primo!`);
//     }
// }

let num = 10;

classificarNumero(num);

function classificarNumero(num){
    if (num > 0 && num % 2 === 0) {
        return console.log("Positivo e Par");
    } else if(num > 0) {
        return console.log("Positivo e Ímpar");
    } else if(num < 0) {
        return console.log("Negativo");
    } else {
        return console.log("Neutro");
    }
}
