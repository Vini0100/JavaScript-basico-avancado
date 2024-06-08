let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", function() {
   console.log("Apertou o Botão");
});

btn1.addEventListener("mouseup", function() {
    console.log("Soltou o votão");
 });

btn2.addEventListener("dblclick", function() {
    console.log("Clicou duas vezes");
});

btn2.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    console.log("Botão Direito");
});