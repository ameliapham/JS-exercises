// Definition of the Window Class
const Window = function(tabs){ // Construction function for Window
    this.tabs = tabs 
}

// Merge two window
Window.prototype.join = function(otherWindow){
    this.tabs = this.tabs.concat(otherWindow.tabs)
    return this
}

// Open new tab
Window.prototype.tabOpen = function(tab){
    this.tabs.push('new tab')
    return this
}