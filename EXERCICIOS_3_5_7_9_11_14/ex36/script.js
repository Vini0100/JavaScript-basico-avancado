function contaBanco() {
    const conta = {
        saldo: 0,
        getSaldo: function() {
            return this.saldo;
        },
        deposito: function(value) {
            this.saldo =+ value;
        },
        saque: function(value) {
            if (value > this.saldo) {
                console.log("Saldo insuficiente");
            } else {
            this.saldo -= value;
            }
        }
    } 
    return conta;
}

const conta1 = contaBanco();
console.log(conta1.getSaldo());
conta1.deposito(100);
console.log(conta1.getSaldo());
conta1.saque(200);
conta1.saque(80);
console.log(conta1.getSaldo());

