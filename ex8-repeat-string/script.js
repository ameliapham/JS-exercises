function repeatStringNumTimes(str, num){
    let repeatStr = ""

    if (num < 0){
        return ""
    }

    for (let i = 0; i < num; i++){
        repeatStr += str
        //console.log(repeatStr)
    }

    return repeatStr
}

const x = repeatStringNumTimes("abc", 8)
console.log(x)