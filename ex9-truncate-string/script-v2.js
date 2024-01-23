function truncateString(str, num) {
    //console.log(str.length)
    
    return str.length > num ? str.slice(0,num) + "..." : str
}


const x = truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(x)