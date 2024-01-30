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

// Create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp'])
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium'])
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine'])

const finalTabs = socialWindow
    .tabOpen()
    .join(videoWindow.tabClose(2))
    .join(workWindow.tabClose(1).tabOpen())

console.log(finalTabs)