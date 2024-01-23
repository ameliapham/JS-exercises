function truncateString(str, num) {
    console.log(str.length)
  
    let newStr = ""
    
    if (str.length <= num){
      newStr = str
    } else {
        newStr = str.substring(0,num) + "..."
    }
  
    return newStr;
  }
  

const x = truncateString("A-tisket a-tasket A green and yellow basket", 2);
console.log(x)