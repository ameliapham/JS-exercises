function unCurried(x, y) {
    return x + y;
}

// Using currying
function curried(x) {
    return function (y) {
        return x + y;
    }
}

const funcForY = curried(1);
console.log(funcForY(2));