const squareList = arr => {
    const filtedArr = arr.filter(num => Number.isInteger(num) && num > 0)
    // console.log(filtedArr)

    const resultat = filtedArr.map(num => num * num)

    return resultat
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);