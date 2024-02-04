const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: true
    }
  }

function countOnline(allUsers){
    let result = 0
    for(const key in allUsers){
        // console.log(key)
        // console.log(allUsers[key])
        
        if (allUsers[key].online === true){
            result += 1
        }
    }
    return result
}


console.log(countOnline(users));