const cachorro = {
    patas: 4,
    raca: "SRD",
    latir: function() {
        console.log("Au au au");
    }
}

let labrador = Object.create(cachorro);

labrador.latir();

labrador.raca = "Labrador";

console.log(labrador.raca);