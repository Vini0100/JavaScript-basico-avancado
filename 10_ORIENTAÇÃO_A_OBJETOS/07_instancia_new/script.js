function Cachorro(raca, cor) {
    this.raca = raca;
    this.cor = cor;
    this.uivar = function() {
        console.log("Au au");
    }
}

const husk = new Cachorro("Husky", "Black");

husk.uivar();