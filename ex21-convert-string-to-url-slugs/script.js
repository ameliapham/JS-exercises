/**
 * @param {string} title 
 * @param {string} 
 * @returns {boolean} 
 */

function urlSlug(title) {

    // Spliting string to arr
    const splitedArr = title
        .trim() // " A Mind Needs Books Like    A Sword Needs A Whetstone" -> "A Mind Needs Books Like    A Sword Needs A Whetstone"
        .split(/\s+/) // "A Mind Needs Books Like    A Sword Needs A Whetstone" -> ["A","Mind","Needs","Books","Like","A","Sword","Needs","A","Whetstone"]

    // Lowercase
    const lowerCaseArr = splitedArr.map(char => char.toLowerCase()) // ["A","Mind","Needs","Books","Like","A","Sword","Needs","A","Whetstone"] -> ["a","mind","needs","books","like","a","sword","needs","a","whetstone"]

    // Joining arr to string
    const joinedArr = lowerCaseArr.join("-")

    return joinedArr
}

const x = urlSlug(" A Mind Needs Books Like    A Sword Needs A Whetstone")
console.log(x)