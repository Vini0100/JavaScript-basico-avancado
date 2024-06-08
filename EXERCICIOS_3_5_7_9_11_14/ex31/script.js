const names1 = ["Edso", "Flavio", "André", "Vinicius", "João"];
const names2 = ["Edso", "Flavio"];

checkArray(names1);
checkArray(names2);

function checkArray(array) {
    if (array.length >= 5) {
        console.log("Muitos elementos");
    } else {
        console.log("Poucos elementos");
    }
}