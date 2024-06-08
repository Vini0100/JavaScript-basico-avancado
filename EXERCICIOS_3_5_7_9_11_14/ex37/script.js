function itemFactory(id, nomeItem, qtd, preco) {
    const item = {
        id: id,
        nomeItem: nomeItem,
        quantidade: qtd,
        preco: preco 
    }
    return item;
}

function carrinhoFactory() {
    const carrinho = {
        items: [],
        quantidade: 0,
        total: 0,
        getQuantidade: function() {
            return this.quantidade;
        },
        getTotal: function() {
            return this.total;
        },
        getItems: function() {
            return this.items;
        },
        setItems: function(id, nomeItem, qtd, preco) {
            this.items.push(itemFactory(id, nomeItem, qtd, preco));
            this.quantidade += qtd;
            this.total += preco * qtd;
        },
        removeItems: function(id){
            let temp = this.items.find(items => items.id == id);
            if (temp != undefined) {
                let tempItem = this.items[this.items.indexOf(temp)];
                this.total -= tempItem.preco;
                this.quantidade -= tempItem.quantidade;

                this.items.splice(this.items.indexOf(temp),1);
                console.log("Item removido com sucesso!");
            } else {
                console.log("Id inexistente!");
            }
        }
    } 
    return carrinho;
}

const carrinho1 = carrinhoFactory();
carrinho1.setItems(1, "maionese", 1, 7);
console.log(carrinho1.getItems());
console.log(carrinho1.getQuantidade());
console.log(carrinho1.getTotal());

carrinho1.setItems(2, "Vinagre", 1, 10);
console.log(carrinho1.getItems());
console.log(carrinho1.getQuantidade());
console.log(carrinho1.getTotal());

carrinho1.removeItems(2);
console.log(carrinho1.getItems());
console.log(carrinho1.getQuantidade());
console.log(carrinho1.getTotal());

