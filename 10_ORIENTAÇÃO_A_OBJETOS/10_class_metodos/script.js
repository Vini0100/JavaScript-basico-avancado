class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au au");
    }
}

Cachorro.prototype.patas = 4;

let labrador = new Cachorro("Labrador", "Black");

console.log(labrador.raca);
console.log(labrador.patas);
console.log(labrador.cor);
labrador.latir();