function translatePigLatin(str) {
    // Check if the word contains vowels. If not, add "ay" at the end
    if (!str.match(/[aeiou]/)) {
        return str + "ay"
    }

    // If the word begins with a vowel, add "ay" at the end
    if (str[0].match(/[aeiou]/)) {
        return str + "way"
    }
    
    // If the word begins with a consonnant, find the first vowel and then reconstruct the word in Pig Latin format
    else {
        for (let i = 0; i < str.length; i++) {
            if (str[i].match(/[aeiou]/)) {
                let beforeVowel = str.slice(0, i)
                let afterVowel = str.slice(i)

                return afterVowel + beforeVowel + "ay"
            }
        }
    }

    return str;
}

const x = translatePigLatin("schwartz") // -> artzschway
console.log(x)
translatePigLatin("rhythm"); // -> rhythm
translatePigLatin("california") // -> aliforniacay
translatePigLatin("glove") // -> oveglay
translatePigLatin("algorithm") // -> algorithmway