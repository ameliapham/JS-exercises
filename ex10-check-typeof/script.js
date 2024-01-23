function booWho(bool) {
    /*if (typeof bool === 'boolean'){
        return true
    } else {
      return false
    }*/

    return typeof bool === 'boolean'
}

const x = booWho(null)
console.log(x)