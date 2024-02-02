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


// Improve function currying
const curriedFunc = x => y => z => x+y+z
console.log(curriedFunc(1)(2)(3))


// Using partial application
function impartial(x, y, z) {
    return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
console.log(partialFn(10));
