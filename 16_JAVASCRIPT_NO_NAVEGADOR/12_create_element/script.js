let lista = document.createElement("ul");
let item = document.createElement("li");

let texto = document.createTextNode("Texto Lista");

item.appendChild(texto);

for (let i = 0; i < 5; i++) {
    let item = document.createElement("li");

    let texto = document.createTextNode("Texto Lista" + i);

    item.appendChild(texto);

    lista.appendChild(item);
}

let container = document.getElementById("container-principal");

container.appendChild(lista);