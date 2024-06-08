function randomNumber(num) {
    return Math.floor(Math.random() * num) + 1;
}

console.log(`O numero randomico é ${randomNumber(3)}`);
console.log(`O numero randomico é ${randomNumber(10)}`);
console.log(`O numero randomico é ${randomNumber(90)}`);