function detectType(value) {
    if (typeof(value) === "number"){
        console.log(`The item ${value} is a number type!`);
    } else if (typeof(value) === "boolean") {
        console.log(`The item ${value} is a boolean type!`);
    } else if (typeof(value) === "string") {
        console.log(`The item ${value} is a string type!`);
    } else {
        console.log(`The item ${value} not is a valid type!`);
    }
}

detectType(21);
detectType(false);
detectType("Oi");


