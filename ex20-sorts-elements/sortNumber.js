// Sorting number by ascending order
function ascendingOrder(arr) {
    return arr.sort((a,b) => a-b);
}

const x = ascendingOrder([1, 30, 4, 21, 100000]);
console.log(x)

// Sorting number by descending order
function descendingOrder(arr){
    return arr.sort((a,b) => b-a)
}

const y = descendingOrder([1, 30, 4, 21, 100000]);
console.log(y)