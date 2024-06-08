const names = ["Edso", "Flavio", "André", "Vinicius", "João"];

checkName(names, "vinicius");

function checkName(names, name) {

    names.forEach((value, index) => {
        names[index] = value.toLowerCase();
    });

    const lowerCaseName = name.toLowerCase();

    if (names.includes(lowerCaseName)) {
        console.log(`The name ${name} was included in the array`);
    } else {
        console.log(`The name ${name} wasn't included in the array`);
    }    
}