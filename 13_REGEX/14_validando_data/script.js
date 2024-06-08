const validaData = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validaData.test("12/03/2003")); // True
console.log(validaData.test("12-03-2003")); // False
console.log(validaData.test("2/3/2003")); // False











