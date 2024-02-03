// Using indexOf
function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0 ? true : false
}

const x = quickCheck(['squash', 'onions', 'shallots'], 'mushrooms');
console.log(x)

// Using .includes()
function otherCheck(arr, elem){
    return arr.includes(elem)
}

const y = otherCheck(['squash', 'onions', 'shallots'], 'mushrooms');
console.log(y)