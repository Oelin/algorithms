// On an r x c grid, how many unique paths exist between cell (0, 0) and cell (x, y)?
// You can only move down or right.
// 
// Write a function paths(r, c, x, y) that returns the solution.


// iterative unmemoized

function paths(r, c, x, y) {
  let q = [[0,0]]
  let n = 0
    
  while (q.length > 0) {
    let [cx, cy] = q.shift()
      
    if (cx != x || cy != y) {
      if (cx + 1 < c) q.push([cx + 1, cy]) // right
      if (cy + 1 < r) q.push([cx, cy + 1]) // down
    } else {
       n++
    }
  }
    
  return n
}


// recursive unmemoized


// recursive memoized
