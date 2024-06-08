const dog = {
    raca: "SRD",
    uivar: function() {
        console.log("Auuuuuuuuuu");
    },
    rosnar: function() {
        console.log("Grrrrrrr");
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return this.raca;
    }
}

console.log(dog.raca);

dog.setRaca("Pastor Alemão");

console.log(dog.getRaca());