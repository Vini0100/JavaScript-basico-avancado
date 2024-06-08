let input = document.querySelector("input");

input.addEventListener("focus", function() {
    console.log("Entrou no Input");
});

input.addEventListener("blur", function() {
    console.log("Saiu do Input");
});