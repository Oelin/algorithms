// I will make this max-heap implementation nicer later

function heap() {
  let nodes = []

  function heapify(n) {
    let node
    let parent

    while ((node = nodes[n]) > nodes[parent = Math.floor((n - 1) / 2)]) {
      nodes[n] = nodes[parent]
      nodes[parent] = node
      n = parent
    }
  }
    
  this.insert = function(value) {
    nodes.push(value)
    heapify(nodes.length - 1)
  }
    
  this.toList = function() {
    return nodes
  }
}
