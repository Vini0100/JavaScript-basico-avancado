let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5;

function imprimirNumeros(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

imprimirNumeros(num1, num2, num3);

imprimirNumeros(num1);
