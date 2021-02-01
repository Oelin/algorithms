// todo: reimplement this nicely later
// this was just for learning purposes, not anything
// usable.

function heap() {
  let nodes = []
  
  function swap(i, j) {
    let tmp = nodes[i]
    nodes[i] = nodes[j]
    nodes[j] = tmp
  }
  
  function siftDown(n) {
    let left = 2*n + 1
    let right = 2*n + 2
    let child
    
    if (left < nodes.length && right < nodes.length) {
      child = nodes[left] > nodes[right] ? left : right
    } else {
      child = left > nodes.length ? right : left
    }

    if (nodes[child] != undefined && nodes[n] <= nodes[child]) {
      swap(n, child)
      siftDown(child)
    }
  }

  function siftUp(n) {
    let parent = Math.floor((n - 1) / 2)

    if (nodes[n] > nodes[parent]) {
      swap(n, parent)
      siftUp(parent)
    }
  }
  
  this.insert = function(value) {
    nodes.push(value)
    siftUp(nodes.length - 1)
  }
  
  // deletes the root
  
  this.unroot = function(n) {
    let root = nodes[0]
    nodes[0] = nodes.pop()
    siftDown(0)
    
    return root
  }
    
  this.toList = function() {
    return nodes
  }
}


function heapsort(array) {
  // create a max heap from the array
  
  let h = new heap()
  array.forEach(h.insert)
  
  // the array in descending order can be
  // recovered by repeatedly unrooting
  
  return Array(array.length)
  .fill(0)
  .map(h.unroot)
}
