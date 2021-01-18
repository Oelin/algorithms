// deque implementation with a doubly linked list

function node(value) {
  return {
    value,
    previous,
    next,
  }
}


function deque() {
  this.length = 0
  this.front = null
  this.back = null
  
  this.empty = function() {
    return !this.length
  }
  
  
}
