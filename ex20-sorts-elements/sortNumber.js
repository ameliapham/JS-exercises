// Sorting number by ascending order
function ascendingOrder(arr) {
    return arr.sort((a,b) => a-b);
}

const x = ascendingOrder([1, 5, 2, 3, 4]);
console.log(x)

// Sorting number by descending order
function descendingOrder(arr){
    return arr.sort((a,b) => b-a)
}

const y = descendingOrder([1, 5, 2, 3, 4]);
console.log(y)