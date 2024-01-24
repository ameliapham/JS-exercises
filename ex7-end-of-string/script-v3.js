/**
 * @param {string} str 
 * @param {string} target
 * @returns {boolean} 
 */

function confirmEnding(str, target) {
    /*
    // "afoobfoo".split("foo") -> [ "a", "b", ""]
    const arr= str.split(target)

    // [ "a", "b", ""].filter(...)  ->  [ "a", "b" ]
    const arr2 = arr.filter((elem, i) => i !== arr.length -1)

    // [ "a", "b" ].join("foo") -> "afoob"
    const strWithTargetAtTheEndRemoved = arr2.join(target)

    return strWithTargetAtTheEndRemoved.length === (str.length - target.length);
    */

    /*
    const strWithoutTargetAtTheEnd= 
        str
            .split(target) // "afoobfoo".split("foo") -> [ "a", "b", ""]
            .reverse() // [ "a", "b", ""] -> [ "", "b", "a"]
            .filter((elem, i) => i !== 0) // [ "b", "a" ].filter(...)  ->  [ "b", "a" ]
            .reverse() // ["b", "a"] -> ["a", "b"]
            .join(target);  // [ "a", "b" ].join("foo") -> "afoob"

    return `${strWithoutTargetAtTheEnd}${target}` === str;
    */

    const strWithoutTargetAtTheEnd= 
    str
        .split("") // "afoobfoo" -> [ "a", "f", "o", "o", "b", "f", "o", "o"]
        .reverse() // ... -> ["o","o","f","b","o","o","f","a"]
        .filter((elem,i)=> i >= target.length) // ... -> ["b","o","o","f","a"]
        .reverse() // ... -> [ "a", "f", "o", "o", "b"]
        //.join("") // "afoob"
        .reduce((acc,curr)=> `${acc}${curr}`, "") // this is an equivalent of .join("")

    return `${strWithoutTargetAtTheEnd}${target}` === str
    ""
}

console.log(confirmEnding("afoobfoo", "foo"));
console.log(confirmEnding("afoobfoo", "bar"));

//const x = confirmEnding("He has to give me a new name", "name")
//console.log(x)


// [ 19, 49, 3, 12].filter(elem => elem > 15) -> [ 19, 49 ]
// [ 19, 49, 3, 12].filter(elem => elem % 2 === 0) -> [ 12 ]
// [ 19, 49, 3, 12].filter(elem => elem % 2 === 1) -> [ 19, 49, 3 ]
// [ 19, 49, 3, 12].filter((elem, i) => i === 1) -> [ 49 ]
// [ 19, 49, 3, 12, 22].filter((elem, i) => i < 2) -> [19, 49]