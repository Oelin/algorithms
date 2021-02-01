// I will make this max-heap implementation nicer later

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
    nodes[0] = nodes.pop()
    siftDown(0)
  }
    
  this.toList = function() {
    return nodes
  }
}
