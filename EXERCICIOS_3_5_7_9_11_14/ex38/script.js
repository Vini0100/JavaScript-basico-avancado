function enderecoFactory(rua, bairro, cidade, estado) {
    const endereco = {
        rua: rua,
        bairro: bairro,
        cidade: cidade,
        estado: estado 
    }
    return endereco;
}

function clienteFactory(rua, bairro, cidade, estado) {
    const cliente = {
        endereco: enderecoFactory(rua, bairro, cidade, estado),
        getEndereco: function() {
            return this.endereco;
        },
        setRua: function(newRua) {
            this.endereco.rua = newRua;
        },
        setBairro: function(newBairro) {
            this.endereco.bairro = newBairro;
        },
        setCidade: function(newCidade) {
            this.endereco.cidade = newCidade;
        },
        setEstado: function(newEstado) {
            this.endereco.estado = newEstado;
        }
    } 
    return cliente;
}

const cliente1 = clienteFactory("Getulio Vargas", "Centro", "Rodeio Bonito", "Rio Grande do Sul");
console.log(cliente1.getEndereco());

cliente1.setRua("Teste");
console.log(cliente1.getEndereco());


