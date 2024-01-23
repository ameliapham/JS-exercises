function repeatStringNumTimes(str, num){
    let repeatStr = ""

    if (num < 0){
        return ""
    }

    return str.repeat(num)
}

const x = repeatStringNumTimes("abc", 8)
console.log(x)