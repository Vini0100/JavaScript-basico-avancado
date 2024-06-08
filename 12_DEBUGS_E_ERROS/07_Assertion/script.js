let arr = [1,2,3,4];
let arr2 = [];

function iteraArray(arr) {
    if (arr.length == 0) {
        throw new Error("O array precisa de pelo menos um elemento!");
    } else {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            
        }
    }
}

iteraArray(arr);
iteraArray(arr2);
