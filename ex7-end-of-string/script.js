function confirmEnding(str, target){
    const endOfString = str.substring(str.length - target.length)
    //console.log(endOfString)

    if (endOfString === target){
        console.log("true")
        return true
    } else {
        console.log("false")
        return false
    }
}



confirmEnding("He has to give me a new name", "name")