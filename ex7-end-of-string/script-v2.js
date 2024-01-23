function confirmEnding(str, target){
    return str.endsWith(target)
}

const x = confirmEnding("He has to give me a new name", "name")
console.log(x)