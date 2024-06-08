let elemento = document.querySelector("#titulo-principal");

console.log("Largura: " + elemento.offsetWidth);
console.log("Altura: " + elemento.offsetHeight); // Considera borda

console.log("Largura: " + elemento.clientWidth); //Não considera borda
console.log("Altura: " + elemento.clientHeight);