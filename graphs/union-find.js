// problem: given a social network containing N members and a log file containing a sequence of friendships requests, 
// design an algorithm to determine the earliest time at which all members are connected (i.e. every member is a friend
// of a friend of a friend ...).

function network() {
  this.ids = []
  this.sizes = []
  this.groups = null
  
  // create n new users
  
  this.init = function(n) {
    this.ids = Array(n).fill(0)
    .map((e, i) => i)
    
    this.sizes = Array(n).fill(1)
    this.groups = n
  }
  
  // find the root of a friend group
  
  this.root = function(x) {
    let parent = this.ids[x]
    return x == parent ? x : this.root(parent)
  }
  
  // are two users connected?
  // Note: path compression would remove bottle necks here
  
  this.find = function(x, y) {
   return this.root(x) == this.root(y) 
  }
  
  // merge two friend groups
  
  this.union = function(x, y) {
    let rx = this.root(x)
    let ry = this.root(y)
    let sx = this.sizes[x]
    let sy = this.sizes[y]
    
    if (rx == ry)
      return
    
    // subtree size comparison to acheive O(log n)
    // worst case
    
    if (sx > sy) {
      this.ids[rx] = ry
      this.sizes[ry] += sx
    } else {
      this.ids[ry] = rx
      this.sizes[rx] += sy
    }
    
    this.groups --
  }
}

function allConnected(network) {
  return network.groups === 1
}
