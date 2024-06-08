const names1 = ["Edso", "Flavio", "André", "Vinicius", "João"];

interacao(names1);

// function interacao(array) {
//     array.forEach(value => {
//         console.log(`O array possui o value: ${value}`);
//     });
// }

function interacao(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("The array have: " + array[i]);
    }
}