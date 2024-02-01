// Sorting number by ascending order
function ascendingOrder(arr) {
    return arr.sort((a,b) => a-b);
}

const x = ascendingOrder([1, 5, 2, 3, 4]);
console.log(x)