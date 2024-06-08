function carroFactory(marca, cor, gasolinaRestante, consumo) {
    const carro = {
        marca: marca,
        cor: cor,
        gasolina: gasolinaRestante,
        consumo: consumo,
        getCarro: function() {
            return this;
        },
        dirigir: function(km) {
            let gasolinaNecessria = km / this.consumo;
            if (this.gasolina >= gasolinaNecessria) {
                this.gasolina -= gasolinaNecessria;
                console.log("Você dirigiu "+ km + "km e sua gasolina atual é: " + this.gasolina);
            } else {
                console.log("Gasolina insuficnete para dirigir!");
            }
        },
        abastecer: function(value) {
            this.gasolina += value;
            console.log("Você abasteceu, sua gasolina atual é: " + this.gasolina);
        }

    } 
    return carro;
}

const carro1 = carroFactory("Ferrari", "Azul", 20, 4);
console.log(carro1.getCarro());
carro1.dirigir(3);
carro1.abastecer(10);







