function decrement(value){
    if (value >= 0){
        if (value % 2 == 0) {
            console.log(`The number ${value} is par`);
        }
        decrement(--value);
    }
}

decrement(50);

