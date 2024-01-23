function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, function(L) {
      return L.toUpperCase()
    })
  }
  
const x = titleCase("I'm a little tea pot")
console.log(x)
  