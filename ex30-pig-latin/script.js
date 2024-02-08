function translatePigLatin(str) {
    // Check if the word contains vowels. If not, add "ay" at the end
    if (!str.match(/[aeiou]/)) {
        return str + "ay"
    }

    // If the word begins with a vowel, add "ay" at the end
    if (str[0].match(/[aeiou]/)) {
        return str + "way"
    }


    return str;
}

const x = translatePigLatin("schwartz") // -> artzschway
console.log(x)
translatePigLatin("rhythm"); // -> rhythm
translatePigLatin("california") // -> aliforniacay
translatePigLatin("glove") // -> oveglay
translatePigLatin("algorithm") // -> algorithmway