function ContaFactory(saldoCC, saldoCP, juros) {
    const conta = {
        saldoCC: saldoCC,
        saldoCP: saldoCP,
        juros: juros,
        getConta: function() {
            return this;
        },
        deposito: function(value){
            this.saldoCC += value;
        },
        saque: function(value){
            this.saldoCC -= value;
        },
        tranferenciaCP: function(value){
            this.saldoCC -= value;
            this.saldoCP += value;
        },
        tranferenciaCC: function(value){
            this.saldoCC += value;
            this.saldoCP -= value;
        },
        jurosDeAniversario: function(){
            let juros = (this.saldoCP * this.juros) / 100;
            this.saldoCP += juros;
        }
    } 
    return conta;
}

function ContaEspecialFactory(saldoCC, saldoCP, juros) {
    const conta = ContaFactory(saldoCC, saldoCP, juros*2);
    return conta;
}

const contaEspecial = ContaEspecialFactory(1000,1000,1);
contaEspecial.jurosDeAniversario();

const contaNormal = ContaFactory(1000,1000,1);
contaNormal.jurosDeAniversario();


console.log(contaEspecial);
console.log(contaNormal);




