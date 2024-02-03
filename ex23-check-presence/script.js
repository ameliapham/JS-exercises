// Using indexOf
function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0 ? true : false
}

const x = quickCheck(['squash', 'onions', 'shallots'], 'mushrooms');
console.log(x)