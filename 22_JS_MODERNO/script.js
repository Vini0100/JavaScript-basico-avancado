// Filter

const arr = [1,5,3,8,0];

const highNumbers = arr.filter((n) => {
    if (n > 3) {
        return n;
    }
})

console.log(highNumbers);

const users = [
    {name: "José", available: true},
    {name: "José", available: false},
    {name: "José", available: false},
    {name: "José", available: true}
]

const availableUsers = users.filter((user) => user.available)

console.log(availableUsers)

// Map

const products = [
    {name: "Camisa", price:10.99, category: "Roupas"},
    {name: "Cafeteira", price:10.99, category: "Eletro"},
    {name: "Meias", price:10.99, category: "Roupas"},
    {name: "Geladeira", price:10.99, category: "Eletro"}
]

products.map((product) => {
    if (product.category === "Roupas") {
        product.onSale = true;
    }
})

console.log(products);

// Spread operator

const a1 = [1,2,3];
const a2 = [4,5,6];

const a3 = [...a1, ...a2];
console.log(a3);

const a4 = [0, ...a1, 4]
console.log(a4);