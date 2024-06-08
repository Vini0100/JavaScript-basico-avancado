function Cachorro(raca, cor) {
    this.raca = raca;
    this.cor = cor;
    }

Cachorro.prototype.uivar = function() {
    console.log("Auuu");
}

const husk = new Cachorro("Husky", "Black");

husk.uivar();