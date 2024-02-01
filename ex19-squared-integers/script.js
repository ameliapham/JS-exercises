/*
const squareList = arr => {
    const filtedArr = arr.filter(num => Number.isInteger(num) && num > 0)
    // console.log(filtedArr)

    const resultat = filtedArr.map(num => num * num)

    return resultat
}
*/

const squareList = arr => {
    return arr
        .filter(num => Number.isInteger(num) && num > 0)
        .map(num => num * num)
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);


