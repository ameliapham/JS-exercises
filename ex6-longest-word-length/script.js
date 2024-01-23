function findLongestWordLength(str){
    const words = str.split(' ')
    //console.log(words)

    let max = words[0]
    //console.log(max)

    for (let i = 1; i < words.length; i++){
        const word = words[i]
        //console.log(word)

        if (word.length > max.length){
            max = word
        }
    }
    //console.log(max.length)
    return max.length
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
