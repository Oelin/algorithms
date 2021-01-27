function merge(a, b) {
  c = []
  
  while (a.length + b.length) {
      c.push((a[0] < b[0] ? a : b).shift())
  }
  
  return c
}
