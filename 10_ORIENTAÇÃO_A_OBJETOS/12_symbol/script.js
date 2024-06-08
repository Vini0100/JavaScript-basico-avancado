class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Cachorro extends Mamifero{
    constructor(raca, patas) {
        super(patas, patas);
        this.raca = raca;
    }
}

const pug = new Cachorro("Pug", 4);

console.log(pug.patas);

console.log(pug instanceof Cachorro); //True