function merge(a, b) {
  c = []
  
  while (a.length && b.length) {
    c.push((a[0] < b[0] ? a : b).shift())
  }
  
  return [...c, ...(a.length ? a : b)]
}


function mergesort(l) {
  if (l.length < 2)
    return l
  
  let m = Math.floor(l.length / 2)
  return merge(mergesort(l.slice(0, m)), mergesort(l.slice(m)))
}
