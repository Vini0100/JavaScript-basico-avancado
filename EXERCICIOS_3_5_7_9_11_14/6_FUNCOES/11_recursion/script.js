function recursao(n) {
    
    if(n - 1 < 2) {
        console.log("Recursão parou!");
    } else if(n % 2 != 0) {
        console.log("Numero impar: " + n);
        recursao(n - 1);
    } else {
        console.log("Numero par: " + n);
        recursao(n - 1);
    }
}

recursao(10);
recursao(55);