class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let labrador = new Cachorro("Labrador", 4, "Black");

console.log(labrador.raca);
console.log(labrador.patas);
console.log(labrador.cor);