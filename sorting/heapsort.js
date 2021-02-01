function heap() {
  let nodes = []

  function siftUp(n) {
    let node
    let parent

    while ((node = nodes[n]) > nodes[parent = Math.floor((n - 1) / 2)]) {
      nodes[n] = nodes[parent]
      nodes[parent] = node
      n = parent
    }
  }
  
  function siftDown(n) {
    let node
    let left, right, maxchild
    
    while (true) {
      node = nodes[n]
      left = nodes[2 * n + 1]
      right = nodes[2 * n + 2]
      maxchild = Math.max(left, right)
      
      if (node <= maxchild) {
        maxchild = 2*n + 1 + (maxchild == right)
        nodes[n] = nodes[maxchild]
        nodes[maxchild] = node
        n = maxchild
      } else {
        break
      }
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
