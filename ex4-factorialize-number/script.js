function factorialize(num) {
    console.log(num)

    let result = 1

    for(let i = 1; i<=num; i++){
        result = result * i 
    }

    return result
}

const x = factorialize(5)
console.log(x)