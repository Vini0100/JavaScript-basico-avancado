const validaNome = /^(?=.{3,16}$)[a-z0-9-_]/;


console.log(validaNome.test("1a"));
console.log(validaNome.test("1assssssssssssssssssssaaaaaaaaaaa"));
console.log(validaNome.test("_-vinicius-_10"));






