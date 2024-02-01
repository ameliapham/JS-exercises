// Sorting characters by ascending order
function ascendingAlpha(arr) {
    return arr.sort();
}

const x = ascendingAlpha(['l', 'h', 'z', 'b', 's']);
console.log(x)

// Sorting characters by descending order
function descendingAlpha(arr) {
    return arr.sort((a,b) => {
        return a === b ? 0 : a < b ? 1 : -1
    });
}

const y = descendingAlpha(['l', 'h', 'z', 'b', 's']);
console.log(y)
