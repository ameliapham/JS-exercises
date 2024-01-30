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

// Close tab(s)
Window.prototype.tabClose = function(index){
    const tabsBeforeIndex = this.tabs.slice(0, index)
    const tabAfterIndex = this.tabs.slice(index + 1)
    this.tabs = tabsBeforeIndex.concat(tabAfterIndex)
    return this
}